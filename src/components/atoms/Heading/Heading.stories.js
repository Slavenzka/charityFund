import Heading, { HeadingTypes } from 'components/atoms/Heading/Heading'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'

const list = [
  ...Object.values(HeadingTypes).map(headingType => (
    {
      heading: headingType,
      component: (
        <Heading type={headingType}>
          Heading type {headingType}
        </Heading>
      ),
      code: (
        `
<Heading type={${headingType}}>
  Heading type ${headingType}
</Heading>
`
      )
    }
  ))
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/Heading`,
  component: Heading,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Heading`}
      componentDescription={(
        <>
          Renders heading of various types from HeadingTypes enum and provides capability to pass inside any component.
        </>
      )}
      proptypesString={(
`
Heading.propTypes = {
  /*
  * Content of the component
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to heading
  */
  className: PropTypes.string,
  /*
  * Triggers application of class name according to its value from HeadingTypes enum
  */
  type: PropTypes.oneOf(Object.values(HeadingTypes)),
}
`
      )}
      defaultPropsString={(
`
Heading.defaultProps = {
  type: HeadingTypes.H2
}
`
      )}
    />
  )]
}