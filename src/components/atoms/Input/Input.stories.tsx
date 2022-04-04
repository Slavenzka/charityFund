import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Input from 'components/atoms/Input/Input'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { FC } from 'react'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { InputVariants } from 'components/atoms/Input/Input.spec'

const list: ListItemProps[] = [
  {
    heading: `Variant DEFAULT`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
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
        onChange={evt => console.log(evt)}
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
        onChange={evt => console.log(evt)}
        label="Label text"
        error="Some error message text"
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  error="Some error message text"
  isRequired
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with search presets`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        variant={InputVariants.SEARCH}
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  variant={InputVariants.SEARCH}
  isRequired
/>
`
    )
  },
]

const listCheckbox: ListItemProps[] = [
  {
    heading: `Variant Checkbox checked`,
    component: (
      <Input
        onChange={evt => console.log(evt)}
        variant={InputVariants.CHECKBOX_DEFAULT}
        label={`Some label text`}
        checked
      />
    ),
    code: (
      `
<Input
  onChange={evt => console.log(evt)}
  variant={InputVariants.CHECKBOX_DEFAULT}
  label={\`Some label text\`}
  checked
/>
`
    )
  },
  {
    heading: `Variant Checkbox unchecked`,
    component: (
      <Input
        checked={false}
        onChange={evt => console.log(evt)}
        label={`Some label text`}
        variant={InputVariants.CHECKBOX_DEFAULT}
      />
    ),
    code: (
      `
<Input
  checked={false}
  onChange={evt => console.log(evt)}
  label={\`Some label text\`}
  variant={InputVariants.CHECKBOX_DEFAULT}
/>
`
    )
  },
  {
    heading: `Variant Checkbox w/ error message`,
    component: (
      <Input
        onChange={evt => console.log(evt)}
        label={`Some label text`}
        variant={InputVariants.CHECKBOX_DEFAULT}
        error={`Please, mark the checkbox to proceed`}
        checked
      />
    ),
    code: (
      `
<Input
  checked={false}
  onChange={evt => console.log(evt)}
  label={\`Some label text\`}
  variant={InputVariants.CHECKBOX_DEFAULT}
  error={\`Please, mark the checkbox to proceed\`}
/>
`
    )
  },
]

export const Default: FC = () => <ComponentRenderTemplateStory list={list} />
export const Checkbox: FC = () => <ComponentRenderTemplateStory list={listCheckbox} />

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
export enum InputVariants {
  DEFAULT = \`DEFAULT\`,
  CHECKBOX_DEFAULT = \`CHECKBOX_DEFAULT\`,
  SEARCH = \`SEARCH\`
}

export enum InputTypes {
  TEXTAREA = \`textarea\`,
  TEXT = \`text\`,
  NUMBER = \`number\`,
  TEL = \`tel\`,
  EMAIL = \`email\`,
  CHECKBOX = \`checkbox\`
}

export interface InputDefaultProps {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Cumulative class name form Input component
  */
  className?: string;
  /*
  * Error message to be rendered, e.g. from form state manager
  */
  error?: ReactNode;
  /*
  * Ref setter, e.g. from react-hook-form
  */
  formRef?: RefGetterType;
  /*
  * Applies styles to highlight a required field
  */
  isRequired?: boolean;
  /*
  * Provides text content for input's label wrapper
  */
  label?: string;
  /*
  * Defines the type of input element
  */
  inputType?: InputTypes;
}

export interface InputProps extends HTMLProps< HTMLInputElement>, InputDefaultProps {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Optional external class name, that would be added to input's label wrapper
  */
  className?: string;
  /*
  * Enum value to apply corresponding style and logic presets
  */
  variant?: InputVariants;
}
`
      )}
      defaultPropsString={(
`
Input.defaultProps = {
  inputType: InputTypes.TEXT,
  variant: InputVariants.DEFAULT
}
`
      )}
    />
  )]
} as StoriesExportObject