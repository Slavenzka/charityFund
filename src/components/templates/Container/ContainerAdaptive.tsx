import { memo, PropsWithChildren } from 'react'
import css from './ContainerAdaptive.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'

function ContainerAdaptive ({
  className,
  children
}: PropsWithChildren<PropsWithClassName>) {
  return (
    <div className={classnames(css.wrapper, className)}>
      { children }
    </div>
  )
}

export default memo(ContainerAdaptive)