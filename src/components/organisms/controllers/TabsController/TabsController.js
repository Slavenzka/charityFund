import { memo, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

function TabsController ({
  children,
  defaultTabID,
  tabsConfig
}) {
  const defaultTab = useMemo(() => {
    return defaultTabID
      ? tabsConfig.find(item => item.id === defaultTabID) || tabsConfig[0]
      : tabsConfig[0]
  }, [defaultTabID, tabsConfig])
  
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  return children({
    tabsConfig,
    activeTab,
    onTabClick: setActiveTab
  })
}

TabsController.propTypes = {
  /**
  * Definition of single tab config object
  * @typedef TabConfig
  * @property {string|number} id - unique id of the tab
  * @property {string|object} label - content of tab
  * @property {ReactElement} Component - a component that will be rendered if the tab is selected
  */
  /**
  * Description of argument object of children render function
  * @typedef ChildrenArgs
  * @property {Array<TabConfig>} tabsConfig - array of config objects for each tab
  * @property {TabConfig} activeTab - config object for selected tab
  * @property {function} onTabClick - tab click handler
  */
  /**
  * Render function for child components
  * @function TabsController render function children
  * @param {ChildrenArgs} - provides tabs config, state and state update method
  */
  children: PropTypes.func,
  /**
  * Provides default active tab
  */
  defaultTabID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Config for tabs
   */
  tabsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      /**
      * Some unique id to manage tabs
      */
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /**
      * Content of tab label
      */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      /**
      * Component that is rendered if the tab is selected
      */
      Component: PropTypes.elementType
    })
  )
}

export default memo(TabsController)