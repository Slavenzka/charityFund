import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Form from 'components/organisms/Form/Form'
import { FormElements } from 'utils/const'
import { InputTypes } from 'components/atoms/Input/Input'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

const list = [
  {
    heading: `Form example`,
    component: (
      <Form
        submitForm={data => console.log(data)}
        formConfig={Object.values({
          login: {
            element: FormElements.INPUT,
            name: `login`,
            defaultValue: `test@test.test`,
            label: `Test label`
          },
          description: {
            element: FormElements.INPUT,
            name: `description`,
            defaultValue: `Once upon a time in a far far galaxy...`,
            label: `Some label for the textarea`,
            type: InputTypes.TEXTAREA
          },
          images: {
            element: FormElements.INPUT_IMAGE,
            name: `images`,
          },
          comment: {
            element: FormElements.TEXT_AREA_VARIABLE_HEIGHT,
            name: `comment`,
            label: `Textarea with var height`,
          },
          agreement: {
            element: FormElements.INPUT_CHECKBOX,
            name: `agreement`,
            label: `I need your boots, your shoes and your motorcycle. Please.`,
          },
        })}
      >
        {({items}) => (
          <div style={{paddingLeft: `5rem`}}>
            {items}
            <button
              type="submit"
            >
              Submit
            </button>
          </div>
        )}
      </Form>
    ),
    code: (
`
<Form
  submitForm={data => console.log(data)}
  formConfig={Object.values({
    login: {
      element: FormElements.INPUT,
      name: \`login\`,
      defaultValue: \`test@test.test\`,
      label: \`Test label\`
    },
    description: {
      element: FormElements.INPUT,
      name: \`description\`,
      defaultValue: \`Once upon a time in a far far galaxy...\`,
      label: \`Some label for the textarea\`,
      type: InputTypes.TEXTAREA
    },
    images: {
      element: FormElements.INPUT_IMAGE,
      name: \`images\`
    },
    comment: {
      element: FormElements.TEXT_AREA_VARIABLE_HEIGHT,
      name: \`comment\`,
      label: \`Textarea with var height\`
    },
    agreement: {
      element: FormElements.INPUT_CHECKBOX,
      name: \`agreement\`,
      label: \`I need your boots, your shoes and your motorcycle. Please.\`
    }
  })}
>
  {({items}) => (
    <div style={{paddingLeft: \`5rem\`}}>
      {items}
      <button
        type="submit"
      >
        Submit
      </button>
    </div>
  )}
</Form>
`
    )
  },
]

export const Usage = () => (
  <Provider store={store}>
    <ComponentRenderTemplateStory list={list} />
  </Provider>
)

export default {
  title: `Components/Organisms/Form`,
  component: Form,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Form`}
      componentDescription={(
        <>
          A component that renders form according to received config array managed by react-hook-form with custom submit handler
        </>
      )}
      proptypesString={(
`
Form.propTypes = {
  /*
  * Child components provider with list of generated form item components (items) and list of useForm methods
  */
  children: PropTypes.func,
  /*
  * Description of each form item to be rendered according to useRenderFormItems hook and form item component requirements
  */
  formConfig: PropTypes.arrayOf(PropTypes.shape({
      element: PropTypes.oneOf(Object.values(FormElements)).isRequired,
      name: PropTypes.string.isRequired,
      defaultValue: PropTypes.any
    })),
  /*
  * Form submit handler that receives two arguments: form data and object with useForm methods
  */
  submitForm: PropTypes.func,
}
`
      )}
    />
  )]
}