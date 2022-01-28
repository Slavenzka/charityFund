import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Input, { InputTypes, InputVariants } from 'components/atoms/Input/Input'

const list = [
  {
    heading: `Variant DEFAULT`,
    component: (
      <Input
        value="Some input value"
        onChange={() => {}}
        label="Label text"
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with a child component`,
    component: (
      <Input
        value="Some input value"
        onChange={() => {}}
        label="Label text"
      >
        <div>Some content renders here</div>
      </Input>
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
>
  <div>Some content renders here</div>
</Input>
`
    )
  },
  {
    heading: `Variant DEFAULT with error message`,
    component: (
      <Input
        value="Some input value"
        onChange={() => {}}
        label="Label text"
        error="Some error message text"
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
  error="Some error message text"
  isRequired
/>
`
    )
  },
]

const listCheckbox = [
  {
    heading: `Variant Checkbox checked`,
    component: (
      <Input
        checked={true}
        onChange={() => {}}
        type={InputTypes.CHECKBOX}
        variant={InputVariants.CHECKBOX_DEFAULT}
      />
    ),
    code: (
      `
<Input
  checked={true}
  onChange={() => {}}
  type={InputTypes.CHECKBOX}
  variant={InputVariants.CHECKBOX_DEFAULT}
/>
`
    )
  },
  {
    heading: `Variant Checkbox unchecked`,
    component: (
      <Input
        checked={false}
        onChange={() => {}}
        type={InputTypes.CHECKBOX}
        variant={InputVariants.CHECKBOX_DEFAULT}
      />
    ),
    code: (
      `
<Input
  checked={false}
  onChange={() => {}}
  type={InputTypes.CHECKBOX}
  variant={InputVariants.CHECKBOX_DEFAULT}
/>
`
    )
  },
]

export const Default = () => <ComponentRenderTemplateStory list={list} />
export const Checkbox = () => <ComponentRenderTemplateStory list={listCheckbox} />

export default {
  title: `Components/Atoms/Input`,
  component: Input,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Input`}
      componentDescription={(
        <>
          Renders input element that can be controlled either uncontrolled. Ready to be controlled by react-hook-form via
          useRenderFormItems hook.
        </>
      )}
      proptypesString={(
`
Input.propTypes = {
  /*
  * Provides capability to pass a component inside input's label, e.g. an icon or a button.
  */
  children: PropTypes.node,
  /*
  * Optional external class name, that would be added to input's label wrapper
  */
  className: PropTypes.string,
  /*
  * Error message from form management code
  */
  error: PropTypes.string,
  /*
  * Ref creation callback which is mostly used by react-hook-form Controller in useRenderFormItems hook
  */
  formRef: PropTypes.func,
  /*
  * Applies styles to highlight a required field
  */
  isRequired: PropTypes.bool,
  /*
  * Provides text content for input's label wrapper
  */
  label: PropTypes.string,
  /*
  * Defines the type of input element
  */
  type: PropTypes.oneOf([${Object.values(InputTypes)}]),
  /*
  * Applies styles preset associated with indicated variant from InputVariants enum
  */
  variant: PropTypes.oneOf([${Object.values(InputVariants)}])
}
`
      )}
      defaultPropsString={(
`
Input.defaultProps = {
  type: InputTypes.TEXT,
  variant: InputVariants.DEFAULT
}
`
      )}
    />
  )]
}