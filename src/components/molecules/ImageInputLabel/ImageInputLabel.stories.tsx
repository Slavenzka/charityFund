import ImageInputLabel from 'components/molecules/ImageInputLabel/ImageInputLabel'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { FC } from 'react'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Image input label with demo content`,
    component: (
      <ImageInputLabel>
        <p>Additional demo content</p>
        <input type="file" />
      </ImageInputLabel>
    ),
    code: (
`
<ImageInputLabel>
  <p>Additional demo content</p>
  <input type="file"/>
</ImageInputLabel>
`
    )
  },
  {
    heading: `Image input label with received error`,
    component: (
      <ImageInputLabel error="Some error message">
        <input type="file" />
      </ImageInputLabel>
    ),
    code: (
`
<ImageInputLabel error="Some error message">
  <input type="file"/>
</ImageInputLabel>
`
    )
  },
]

export const Usage: FC = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Molecules/ImageInputLabel`,
  component: ImageInputLabel,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`ImageInputLabel`}
      componentDescription={(
        <>
          A component that provides a label for the image input
        </>
      )}
      proptypesString={(
`
ImageInputLabel.propTypes = {
  /*
  * Contents of label tag
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to label tag
  */
  className: PropTypes.string,
  /*
  * Error message from form management code
  */
  error: PropTypes.string,
}
`
      )}
    />
  )]
} as StoriesExportObject