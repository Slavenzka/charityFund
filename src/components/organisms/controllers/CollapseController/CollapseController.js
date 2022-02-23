import { memo, useCallback, useState } from 'react'
import css from './CollapseController.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse'
import PropTypes from 'prop-types'

function CollapseController ({
  className,
  classNameContent,
  buttonContent,
  collapseContent,
  isDisabled,
}) {
  const [isOpen, setOpenStatus] = useState(false)
  
  const handleClickButton = useCallback(() => setOpenStatus(prevState => !prevState), [])
  
  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperOpened]: isOpen,
        [css.wrapperDisabled]: isDisabled
      })}
    >
      <button
        className={css.button}
        onClick={handleClickButton}
        type="button"
      >
        {buttonContent}
      </button>
      <Collapse
        isOpened={isOpen}
        theme={{
          collapse: `ReactCollapse--collapse`,
          content: classNameContent
        }}
      >
        {collapseContent}
      </Collapse>
    </div>
  )
}

CollapseController.propTypes = {
  /*
  * External classname for component wrapper
  */
  className: PropTypes.string,
  /*
  * External classname for collapse content
  */
  classNameContent: PropTypes.string,
  /*
  * Content of collapse trigger button
  */
  buttonContent: PropTypes.element.isRequired,
  /*
  * Content of collapsable area
  */
  collapseContent: PropTypes.element.isRequired,
  /*
  * External flag to disable collapse
  */
  isDisabled: PropTypes.bool
}

export default memo(CollapseController)