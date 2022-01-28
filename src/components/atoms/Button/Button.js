import { memo } from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ButtonVariants = {
  DEFAULT: `DEFAULT`
}

const ButtonDefault = memo(({
  children,
  className,
  isDisabled,
  isLoading,
  type = `button`,
  url,
  ...restProps
}) => {
  const isHTML = url &&
    typeof url === `string` &&
    (url.includes(`http`) || url.includes(`mailto:`))
  
  const TagName = url
    ? isHTML
      ? `a`
      : Link
    : `button`
  
  const extraProps = TagName === `button`
    ? {
      type,
    }
    : isHTML
      ? {
        href: url,
        rel: `noopener norefferer`,
        target: `_blank`
      }
      : {
        to: url
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
})

function Button ({
  variant = ButtonVariants.DEFAULT,
  ...restProps
}) {
  switch (variant) {
    default:
      return (
        <ButtonDefault
          {...restProps}
        />
      )
  }
}

Button.defaultProps = {
  type: "button",
  variant: ButtonVariants.DEFAULT,
}

Button.propTypes = {
  /*
  * The contents of button
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to button
  */
  className: PropTypes.string,
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled: PropTypes.bool,
  /*
  * Adds styling for the loading state of the button
  */
  isLoading: PropTypes.bool,
  /*
  * Definition of button type
  */
  type: PropTypes.oneOf([`submit`, `button`]),
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  * and react router link otherwise.
  */
  url: PropTypes.string,
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant: PropTypes.oneOf(Object.values(ButtonVariants))
}

export default memo(Button)