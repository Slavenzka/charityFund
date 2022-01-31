import { useCallback, useEffect, useRef, useState, memo } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function VisibilityAnimationProvider ({
  isVisible,
  classNameHidden,
  classNameVisible,
  children,
  options = {}
}) {
  const [isElementVisible, setElementVisibility] = useState(false)
  const [isRendered, setRenderedStatus] = useState(false)
  const targetRef = useRef(null)
  const observerRef = useRef(null)
  const countRef = useRef(0)
  const {
    keepInDOMAfterRender = false,
    displayType = `block`
  } = options
  
  const createTargetRef = useCallback(node => targetRef.current = node, [])
  
  const handleUpdateElementDisplay = useCallback(() => {
    const display = getComputedStyle(targetRef.current).display
    
    if (display === displayType) {
      setElementVisibility(true)
      observerRef.current.disconnect()
      
      if (keepInDOMAfterRender && !countRef.current) {
        countRef.current++
      }
    }
  }, [keepInDOMAfterRender, displayType])
  
  const handleRemoveElement = useCallback(() => {
    setRenderedStatus(false)
    
    if (targetRef.current) {
      targetRef.current.removeEventListener(`transitionend`, handleRemoveElement)
      targetRef.current.removeEventListener(`animationend`, handleRemoveElement)
    }
  }, [])
  
  useEffect(() => {
    if (isVisible) {
      observerRef.current = new MutationObserver(handleUpdateElementDisplay)
      
      observerRef.current.observe(targetRef.current, {
        attributes: true,
        childList: false
      })
    }
  }, [isVisible, handleUpdateElementDisplay])
  
  useEffect(() => {
    const isRequiredToBeMounted = targetRef.current &&
      isVisible &&
      !isElementVisible &&
      !isRendered
    
    const isRequiredToBeHidden = targetRef.current &&
      !isVisible &&
      isElementVisible &&
      isRendered
  
    if (isRequiredToBeMounted) {
      setRenderedStatus(true)
    }
    
    if (isRequiredToBeHidden) {
      setElementVisibility(false)
    }
    
    if (isVisible && keepInDOMAfterRender && countRef.current > 0) {
      setElementVisibility(true)
    }
  }, [isVisible, isElementVisible, isRendered, keepInDOMAfterRender])
  
  useEffect(() => {
    const isToBeRemovedAfterAnimation = targetRef.current &&
      !isVisible &&
      !isElementVisible &&
      isRendered &&
      !keepInDOMAfterRender
    
    if (isToBeRemovedAfterAnimation) {
      targetRef.current.addEventListener(`transitionend`, handleRemoveElement)
      targetRef.current.addEventListener(`animationend`, handleRemoveElement)
    }
  }, [isVisible, isElementVisible, isRendered, handleRemoveElement, keepInDOMAfterRender])
  
  if (!isVisible && !isRendered) return null
  
  return children({
    style: {
      display: isRendered ? displayType : `none`
    },
    animationClassName: classnames({
      [classNameHidden]: !isElementVisible,
      [classNameVisible]: isElementVisible,
    }),
    getTargetRef: createTargetRef,
  })
}

VisibilityAnimationProvider.propTypes = {
  /*
  * Flag that controls target item visibility
  */
  isVisible: PropTypes.bool,
  /*
  * Class name that contains animation or transition to hide the target element
  */
  classNameHidden: PropTypes.string,
  /*
  * Class name that contains animation or transition to reveal the target element
  */
  classNameVisible: PropTypes.string,
  /**
   * @typedef ChildrenArgs
   * @property {{display: string}} style - inline styles with actual value for display  property
   * @property {string} animationClassName - actual className responsible for application of hiding or revealing animation
   * @property {function} getTargetRef - target element ref get callback
   * */
  /**
  * Render function for the children components
  * @function children
  * @param {ChildrenArgs} - contains actual data for correct target rendering
  */
  children: PropTypes.func,
  /*
  * Fine-tuning of component operation
  */
  options: PropTypes.shape({
    /*
    * Flag to keep element in dom after hiding animation or not
    */
    keepInDOMAfterRender: PropTypes.bool,
    /*
    * Value of display property applied to target element
    */
    displayType: PropTypes.string
  }),
}

VisibilityAnimationProvider.defaultProps = {
  options: {
    keepInDOMAfterRender: false,
    displayType: `block`
  }
}

export default memo(VisibilityAnimationProvider)