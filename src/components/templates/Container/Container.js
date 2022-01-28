import { memo } from 'react'
import css from './Container.module.scss'
import classnames from 'classnames'

function Container ({
  className,
  children
}) {
  return (
    <div className={classnames(css.wrapper, className)}>
      { children }
    </div>
  )
}

export default memo(Container)