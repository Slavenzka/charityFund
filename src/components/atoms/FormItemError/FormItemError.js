import { memo } from 'react'
import css from './FormItemError.module.scss'
import classnames from 'classnames'

function FormItemError ({
  className,
  message
}) {
  return (
    <span className={classnames(css.wrapper, className)}>
      { message }
    </span>
  )
}

export default memo(FormItemError)