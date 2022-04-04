import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import CollapseController from 'components/organisms/controllers/CollapseController/CollapseController'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: ``,
    component: (
      <CollapseController
        buttonContent={(
          <span>Click here to toggle collapse</span>
        )}
        collapseContent={(
          <div>Some collapse content</div>
        )}
      />
    ),
    code: (
`
<CollapseController
  buttonContent={(
    <span>Click here to toggle collapse</span>
  )}
  collapseContent={(
    <div>Some collapse content</div>
  )}
/>
`
    )
  },
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/CollapseController`,
  component: CollapseController,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`CollapseController`}
      componentDescription={(
        <>
          Renders wrappers that executes react-collapse logic.
        </>
      )}
      references={[
        {
          label: `react-collapse`,
          url: `https://github.com/nkbt/react-collapse`
        }
      ]}
      proptypesString={(
`
export interface CollapseControllerProps extends PropsWithClassName {
  /*
  * External classname for collapse content
  */
  classNameContent?: string;
  /*
  * Content of collapse trigger button
  */
  buttonContent: ReactNode;
  /*
  * Content of collapsable area
  */
  collapseContent: ReactNode;
  /*
  * External flag to disable collapse
  */
  isDisabled?: boolean;
}
`
      )}
    />
  )]
} as StoriesExportObject