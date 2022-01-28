import { memo, useMemo } from 'react'
import css from './Tabs.module.scss'
import classnames from 'classnames'
import TabItem from 'components/atoms/TabItem/TabItem'
import PropTypes from 'prop-types'

export const TabVariants = {
  DEFAULT: 'DEFAULT'
}

function Tabs ({
  activeTab,
  className,
  onTabClick,
  tabsConfig,
  variant = TabVariants.DEFAULT,
}) {
  const items = useMemo(() => {
    return (tabsConfig || []).map(item => (
      <TabItem
        onClick={() => onTabClick(item)}
        isActive={item.id === activeTab.id}
        variant={variant}
        key={item.id}
      >
        {item.label}
      </TabItem>
    ))
  }, [
    tabsConfig,
    activeTab,
    onTabClick,
    variant
  ])
  
  if (!tabsConfig) return null
  
  return (
    <ul
      className={classnames(css.list, className, {
        [css.listDefault]: variant === TabVariants.DEFAULT
      })}
    >
      {items}
    </ul>
  )
}

Tabs.propTypes = {
  /*
  * Active tab data
  */
  activeTab: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    Component: PropTypes.elementType
  }).isRequired,
  /*
  * External class name
  */
  className: PropTypes.string,
  /*
  * Tab click handler that replaces active tab value with the data of the clicked tab
  */
  onTabClick: PropTypes.func.isRequired,
  /*
  * An array with the data required to render and operate tabs
  */
  tabsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      Component: PropTypes.elementType
    }).isRequired
  ),
  /*
  * Toggles application of style presets
  */
  variant: PropTypes.oneOf(Object.values(TabVariants)),
}

Tabs.defaultProps = {
  variant: TabVariants.DEFAULT
}

export default memo(Tabs)