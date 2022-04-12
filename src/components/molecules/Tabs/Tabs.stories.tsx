import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Tabs from 'components/molecules/Tabs/Tabs'
import IconArrow from 'assets/icons/IconArrow'
import css from 'stories/styles/modules/TabItem.module.scss'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'
import TabsController from 'components/organisms/controllers/TabsController/TabsController'

const list: ListItemProps[] = [
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
export enum TabVariants {
  DEFAULT = \`DEFAULT\`,
}

export interface TabType {
  /*
  * Tab unique identifier
  */
  id: number | string;
  /*
  * Tab label
  */
  label: string;
  /*
  * Component relevant to actual tab
  */
  Component: FC;
}

export interface TabsProps extends PropsWithClassName {
  /*
  * Active tab data
  */
  activeTab: TabType;
  /*
  * Tab click handler that replaces active tab value with the data of the clicked tab
  */
  onTabClick: (item: TabType) => void;
  /*
  * An array with the data required to render and operate tabs
  */
  tabsConfig: TabType[];
  /*
  * Toggles application of style presets
  */
  variant?: TabVariants;
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
} as StoriesExportObject