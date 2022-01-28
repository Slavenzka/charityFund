import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TabItem from 'components/atoms/TabItem/TabItem'
import IconArrow from 'assets/icons/IconArrow'
import css from 'stories/styles/modules/TabItem.module.scss'
import { TabVariants } from 'components/molecules/Tabs/Tabs'

const list = [
  {
    heading: `Non-selected tab`,
    component: (
      <TabItem
        onClick={() => {}}
        TagName="div"
      >
        {`Tab #1`}
      </TabItem>
    ),
    code: (
`
      <TabItem
        onClick={() => {}}
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
        onClick={() => {}}
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
        onClick={() => {}}
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
        onClick={() => {}}
        TagName="div"
        isActive
      >
        {`Tab #1`}
      </TabItem>
    ),
    code: (
`
      <TabItem
        onClick={() => {}}
        TagName="div"
        isActive
      >
        {\`Tab #1\`}
      </TabItem>
`
    )
  },
]

export const Default = () => <ComponentRenderTemplateStory list={list} />

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
TabItem.propTypes = {
  /*
  * The content of tab item
  */
  children: PropTypes.oneOf([PropTypes.string, PropTypes.elementType]).isRequired,
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
  variant: PropTypes.oneOf([${Object.values(TabVariants)}]),
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
}