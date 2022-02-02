import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Tabs from 'components/molecules/Tabs/Tabs'
import IconArrow from 'assets/icons/IconArrow'
import css from 'stories/styles/modules/TabItem.module.scss'
import TabsController from 'components/organisms/controllers/TabsController/TabsController'

const list = [
  {
    heading: `Default variant`,
    component: (
      <TabsController
        tabsConfig={[
          {
            id: 0,
            label: `Tab #1`,
            Component: () => <div>Component for Tab#1</div>
          },
          {
            id: 1,
            label: `Tab #2`,
            Component: () => <div>Component for Tab#2</div>
          },
          {
            id: 2,
            label: (
              <>
          <span>
            Tab #3
          </span>
                <IconArrow className={css.icon} />
              </>
            ),
            Component: () => <div>Component for Tab#3</div>
          },
        ]}
      >
        {({tabsConfig, activeTab, onTabClick}) => (
          <>
            <Tabs
              activeTab={activeTab}
              onTabClick={onTabClick}
              tabsConfig={tabsConfig}
            />
            <div
              style={{
                margin: `1rem 0`,
                backgroundColor: `lightgrey`
              }}
            >
              Some content irrelative to tabs
            </div>
            {<activeTab.Component />}
          </>
        )}
      </TabsController>
    ),
    code: (
`
<TabsController
  tabsConfig={[
    {
      id: 0,
      label: \`Tab #1\`,
      Component: () => <div>Component for Tab#1</div>
    },
    {
      id: 1,
      label: \`Tab #2\`,
      Component: () => <div>Component for Tab#2</div>
    },
    {
      id: 2,
      label: (
        <>
          <span>
            Tab #3
          </span>
          <IconArrow className={css.icon} />
        </>
      ),
      Component: () => <div>Component for Tab#3</div>
    }
  ]}
>
  {({tabsConfig, activeTab, onTabClick}) => (
    <>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        tabsConfig={tabsConfig}
      />
      <div
        style={{
          margin: \`1rem 0\`,
          backgroundColor: \`lightgrey\`
        }}
      >
        Some content irrelative to tabs
      </div>
      {<activeTab.Component />}
    </>
  )}
</TabsController>
`
    )
  },
]

export const Default = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Molecules/Tabs`,
  component: Tabs,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Tabs`}
      componentDescription={(
        <>
          Renders tabs with state and click handler provided from outside. Expected to be used inside TabsController wrapper.
        </>
      )}
      proptypesString={(
`
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
`
      )}
      defaultPropsString={(
`
Tabs.defaultProps = {
  variant: TabVariants.DEFAULT
}
`
      )}
    />
  )]
}