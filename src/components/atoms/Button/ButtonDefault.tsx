import { ElementType, memo, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import {
  ButtonProps,
  ButtonTypes,
  ExtraProps
} from 'components/atoms/Button/Button.spec'
import { Link } from 'react-router-dom'

function ButtonDefault ({
  children,
  className,
  isDisabled,
  isLoading,
  type = ButtonTypes.BUTTON,
  url,
  ...restProps
}: PropsWithChildren<ButtonProps>): JSX.Element {
  const isHTML: boolean = Boolean(url) &&
    typeof url === `string` &&
    (url.includes(`http`) || url.includes(`mailto:`))

  const TagName: ElementType = url
    ? isHTML
      ? `a`
      : Link
    : `button`

  const extraProps: ExtraProps = TagName === `button`
    ? {
      type
    }
    : isHTML
      ? {
        href: url as string,
        rel: `noopener norefferer`,
        target: `_blank`
      }
      : {
        to: url as string
      }

  return (
    <TagName
      className={classnames(className, {
        [css.button]: !url,
        [css.link]: url,
        [css.disabled]: isDisabled,
        [css.loading]: isLoading,
      })}
      {...extraProps}
      {...restProps}
    >
      { children }
    </TagName>
  )
}

export default memo(ButtonDefault)