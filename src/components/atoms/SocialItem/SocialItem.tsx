import { ElementType, memo } from 'react'
import css from './SocialItem.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'

function SocialItem ({
  className,
  url,
  Icon,
  label
}: {
  url: string,
  Icon: ElementType,
  label: string
} & PropsWithClassName) {
  return (
    <a
      href={url}
      className={classnames(css.wrapper, className)}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Icon className={css.icon} />
      {label}
    </a>
  )
}

export default memo(SocialItem)