import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TabItem from 'components/atoms/TabItem/TabItem'
import IconArrow from 'assets/icons/IconArrow'
import css from 'stories/styles/modules/TabItem.module.scss'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { FC } from 'react'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'

const list: ListItemProps[] = [
  {
    heading: `Non-selected tab`,
    component: (
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
      >
        {`Tab #1`}
      </TabItem>
    ),
    code: (
`
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
      >
        {\`Tab #1\`}
      </TabItem>
`
    )
  },
  {
    heading: `Non-selected tab w/ complex content`,
    component: (
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
      >
        <>
          <span>
            Tab #1
          </span>
          <IconArrow className={css.icon} />
        </>
      </TabItem>
    ),
    code: (
`
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
      >
        <>
          <span>
            Tab #1
          </span>
          <IconArrow className={css.icon} />
        </>
      </TabItem>
`
    )
  },
  {
    heading: `Selected tab`,
    component: (
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
        isActive
      >
        {`Tab #1`}
      </TabItem>
    ),
    code: (
`
      <TabItem
        onClick={evt => console.log(evt)}
        TagName="div"
        isActive
      >
        {\`Tab #1\`}
      </TabItem>
`
    )
  },
]

export const Default: FC = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/TabItem`,
  component: TabItem,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`TabItem`}
      componentDescription={(
        <>
          Renders clickable tabs that switch the active tab in Tabs component
        </>
      )}
      proptypesString={(
`
export interface TabItemProps {
  /*
  * External class name
  */
  className?: string;
  /*
  * Triggers application of selected tab styles
  */
  isActive?: boolean;
  /*
  * Click handler for the non-active tab item
  */
  onClick: ButtonClickHandlerType;
  /*
  * Provides customization of wrapper tag of tab item
  */
  TagName?: ElementType;
  /*
  * Toggles application of style presets
  */
  variant?: TabVariants;
}
`
      )}
      defaultPropsString={(
`
TabItem.defaultProps = {
  TagName: \`li\`,
  variant: TabVariants.DEFAULT
}
`
      )}
    />
  )]
} as StoriesExportObject