import { FC } from 'react'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject, StoriesListType } from 'stories/specs/index.spec'
import FormItemError from 'components/atoms/FormItemError/FormItemError'

const list: StoriesListType = [
  {
    heading: ``,
    component: (
      <FormItemError message="Some error message" />
    ),
    code: (
`
  <FormItemError message="Some error message" />
`
    )
  },
]

export const Usage: FC = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/FormItemError`,
  component: FormItemError,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`FormItemError`}
      componentDescription={(
        <>
          Renders error message for multiple purposes, e.g. form input errors
        </>
      )}
      proptypesString={(
`
export interface FormItemErrorProps {
  /*
  * External class name for styling
  */
  className?: string;
  /*
  * Error message text
  */
  message: ReactNode;
}
`
      )}
    />
  )]
} as StoriesExportObject