import Button, { ButtonVariants } from 'components/atoms/Button/Button'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'

const list = [
  {
    heading: `Button - variant DEFAULT`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
      >
        Some button label
      </Button>
    ),
    code: (
`<Button
  onClick={() => alert(\`Button clicked!\`)}
>
  Some button label
</Button>
`
    )
  },
  {
    heading: `Link - variant DEFAULT`,
    component: (
      <Button
        url="https://google.com"
      >
        Some link label
      </Button>
    ),
    code: (
`
<Button
  url="https://google.com"
>
  Some link label
</Button>
`
    )
  },
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/Button`,
  component: Button,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Button`}
      componentDescription={(
        <>
          <span style={{display: `block`, margin: `1rem 0`}}>
            A button component that can render both button and link (web or client route depending on the url string).
            The main idea is to provide the default button state that simply renders children inside the button tag with options
            for extension via configuring variant props that should cause to render modified default button (e.g. with custom icon or
            with some other customization) via switch statement.
          </span>
          <span style={{display: `block`, margin: `1rem 0`}}>
            Be aware that default button state completely resets button styles including reset font-size to 0. So any variant
            that requires text content requires additional css text properties.
          </span>
        </>
      )}
      proptypesString={(
`
Button.propTypes = {
  /*
  * The contents of button
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to button
  */
  className: PropTypes.string,
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled: PropTypes.bool,
  /*
  * Adds styling for the loading state of the button
  */
  isLoading: PropTypes.bool,
  /*
  * Definition of button type
  */
  type: PropTypes.oneOf([\`submit\`, \`button\`]),
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  and react router link otherwise.
  */
  url: PropTypes.string,
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant: PropTypes.oneOf([${Object.values(ButtonVariants)}]),
}
`
      )}
      defaultPropsString={(
`
Button.defaultProps = {
  type: "button"
  variant: ButtonVariants.DEFAULT,
}
`
      )}
    />
  )]
}