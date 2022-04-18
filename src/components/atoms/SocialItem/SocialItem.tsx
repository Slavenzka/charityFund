import { ElementType, memo } from 'react'
import css from './SocialItem.module.scss'
import classnames from 'classnames'
import { PropsWithClassName } from 'specs/index.spec'

function SocialItem ({
  className,
  url,
  Icon,
  label,
  isDark
}: {
  url: string,
  Icon: ElementType,
  isDark?: boolean,
  label: string
} & PropsWithClassName) {
  return (
    <a
      href={url}
      className={classnames(css.wrapper, className, {
        [css.wrapperDark]: isDark
      })}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Icon className={css.icon} />
      {label}
    </a>
  )
}

export default memo(SocialItem)