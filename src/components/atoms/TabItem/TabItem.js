import { memo } from 'react'
import css from './TabItem.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { TabVariants } from 'components/molecules/Tabs/Tabs'
import PropTypes from 'prop-types'

function TabItem ({
  children,
  className,
  isActive,
  onClick,
  TagName = `li`,
  variant = TabVariants.DEFAULT,
  ...props
}) {
  return (
    <TagName
      className={classnames(className, {
        [css.wrapperDefault]: variant === TabVariants.DEFAULT,
        [css.wrapperActive]: isActive
      })}
      {...props}
    >
      <Button
        onClick={onClick}
        isDisabled={isActive}
        className={css.button}
      >
        {children}
      </Button>
    </TagName>
  )
}

TabItem.propTypes = {
  /*
  * The content of tab item
  */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /*
  * External class name
  */
  className: PropTypes.string,
  /*
  * Triggers application of selected tab styles
  */
  isActive: PropTypes.bool,
  /*
  * Click handler for the non-active tab item
  */
  onClick: PropTypes.func.isRequired,
  /*
  * Provides customization of wrapper tag of tab item
  */
  TagName: PropTypes.string,
  /*
  * Toggles application of style presets
  */
  variant: PropTypes.oneOf(Object.values(TabVariants)),
}

TabItem.defaultProps = {
  TagName: `li`,
  variant: TabVariants.DEFAULT
}

export default memo(TabItem)