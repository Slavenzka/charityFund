import { memo, useCallback, useState } from 'react'
import css from './CollapseController.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse'
import { CollapseControllerProps } from 'components/organisms/controllers/CollapseController/CollapseController.spec'

function CollapseController ({
  className,
  classNameContent,
  buttonContent,
  collapseContent,
  isDisabled,
}: CollapseControllerProps) {
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

export default memo(CollapseController)