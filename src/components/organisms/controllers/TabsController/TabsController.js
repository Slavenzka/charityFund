import { memo, useMemo, useState } from 'react'

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

export default memo(TabsController)