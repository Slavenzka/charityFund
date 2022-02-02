import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TabsController from 'components/organisms/controllers/TabsController/TabsController'

export const Usage = () => null

export default {
  title: `Components/Organisms/TabsController`,
  component: TabsController,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`TabsController`}
      componentDescription={(
        <>
          A wrapper that contains local state for tabs management based on input config array. Return render function for
          child components with args to get and update the state.
        </>
      )}
      proptypesString={(
`
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
`
      )}
    />
  )]
}