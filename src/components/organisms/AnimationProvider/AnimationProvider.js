import { useCallback, useEffect, useRef, useState, memo } from 'react'
import css from './AnimationProvider.module.scss'
import classnames from 'classnames'

function AnimationProvider ({
  isVisible,
  classNameHidden,
  classNameVisible,
  children,
  options = {}
}) {
  const [isElementVisible, setElementVisibility] = useState(isVisible)
  const [isRendered, setRenderedStatus] = useState(false)
  const listRef = useRef(null)
  const observerRef = useRef(null)
  const countRef = useRef(0)
  const {
    keepInDOMAfterRender = false
  } = options
  
  const handleUpdateElementDisplay = useCallback(() => {
    const display = getComputedStyle(listRef.current).display
    
    if (display === `block`) {
      setElementVisibility(true)
      observerRef.current.disconnect()
      
      if (keepInDOMAfterRender && !countRef.current) {
        countRef.current++
      }
    }
  }, [keepInDOMAfterRender])
  
  const handleRemoveElement = useCallback(() => {
    setRenderedStatus(false)
    
    if (listRef.current) {
      listRef.current.removeEventListener(`transitionend`, handleRemoveElement)
      listRef.current.removeEventListener(`animationend`, handleRemoveElement)
    }
  }, [])
  
  useEffect(() => {
    if (isVisible) {
      observerRef.current = new MutationObserver(handleUpdateElementDisplay)
      
      observerRef.current.observe(listRef.current, {
        attributes: true,
        childList: false
      })
    }
  }, [isVisible, handleUpdateElementDisplay])
  
  useEffect(() => {
    const isRequiredToBeMounted = listRef.current &&
      isVisible &&
      !isElementVisible &&
      !isRendered
    
    console.log(isRequiredToBeMounted)
    
    const isRequiredToBeHidden = listRef.current &&
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
    const isToBeRemovedAfterAnimation = listRef.current &&
      !isVisible &&
      !isElementVisible &&
      isRendered &&
      !keepInDOMAfterRender
    
    if (isToBeRemovedAfterAnimation) {
      listRef.current.addEventListener(`transitionend`, handleRemoveElement)
      listRef.current.addEventListener(`animationend`, handleRemoveElement)
    }
  }, [isVisible, isElementVisible, isRendered, handleRemoveElement, keepInDOMAfterRender])
  
  if (!isVisible && !isRendered) return null
  
  return children({
    elementRef: listRef,
    animationClassName: classnames(classNameHidden, {
      [classNameVisible]: isElementVisible,
      [css.elementRendered]: isRendered
    })
  })
}

export default memo(AnimationProvider)