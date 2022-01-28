import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TextareaVariableHeight from 'components/organisms/TextareaVariableHeight/TextareaVariableHeight'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'

const list = [
  {
    heading: `Variant Default`,
    component: (
      <StoriesStoreProvider>
        {({store: {textarea}, updateTextarea}) => (
          <TextareaVariableHeight
            value={textarea}
            onChange={evt => updateTextarea(evt.target.value)}
          />
        )}
      </StoriesStoreProvider>
    ),
    code: (
`
<StoriesStoreProvider>
  {({store: {textarea}, updateTextarea}) => (
    <TextareaVariableHeight
      value={textarea}
      onChange={evt => updateTextarea(evt.target.value)}
    />
  )}
</StoriesStoreProvider>
`
    )
  },
]

export const Default = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/TextareaVariableHeight`,
  component: TextareaVariableHeight,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`TextareaVariableHeight`}
      componentDescription={(
        <>
          Renders textarea with hook support that updates its height depending on content.
          Most props are similar to Input component.
        </>
      )}
      proptypesString={(
`
TextareaVariableHeight.propTypes = {
  /*
  * External ref getter, e.g. from react-hook-form Controller
  */
  formRef: PropTypes.func
}
`
      )}
    />
  )]
}