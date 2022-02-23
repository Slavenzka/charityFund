import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import CollapseController from 'components/organisms/controllers/CollapseController/CollapseController'

const list = [
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
CollapseController.propTypes = {
  /*
  * External classname for component wrapper
  */
  className: PropTypes.string,
  /*
  * External classname for collapse content
  */
  classNameContent: PropTypes.string,
  /*
  * Content of collapse trigger button
  */
  buttonContent: PropTypes.element.isRequired,
  /*
  * Content of collapsable area
  */
  collapseContent: PropTypes.element.isRequired,
  /*
  * External flag to disable collapse
  */
  isDisabled: PropTypes.bool
}
`
      )}
    />
  )]
}