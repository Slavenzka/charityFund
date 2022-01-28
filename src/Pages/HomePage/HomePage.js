import { memo, useCallback } from 'react'
import Heading from 'components/atoms/Heading/Heading'
import Container from 'components/templates/Container/Container'
import { FormElements, FormErrorMessages } from 'utils/const'
import Form from 'components/organisms/Form/Form'
import Button from 'components/atoms/Button/Button'
import { InputTypes } from 'components/atoms/Input/Input'

function HomePage () {
  const getFormDescription = useCallback(() => {
    const selectOptions = [
      {
        label: `one`,
        value: 1
      },
      {
        label: `two`,
        value: 2
      },
      {
        label: `three`,
        value: 3
      },
    ]
    
    return {
      login: {
        element: FormElements.INPUT,
        name: `login`,
        defaultValue: `test@test.test`,
        label: `Test label`,
        validation: {
          required: FormErrorMessages[FormElements.INPUT].NO_DATA,
        }
      },
      description: {
        element: FormElements.INPUT,
        name: `description`,
        defaultValue: `Once upon a time in a far far galaxy...`,
        label: `Some label for the textarea`,
        type: InputTypes.TEXTAREA,
        validation: {
          required: FormErrorMessages[FormElements.INPUT].NO_DATA,
        }
      },
      images: {
        element: FormElements.INPUT_IMAGE,
        name: `images`,
        defaultValue: [],
      },
      date: {
        element: FormElements.DATEPICKER,
        name: `date`,
        label: `Date and time picker`,
      },
      range: {
        element: FormElements.DATE_RANGE_PICKER,
        name: `range`,
        label: `Date range picker`,
      },
      select: {
        element: FormElements.SELECT,
        name: `select`,
        defaultValue: selectOptions[0],
        options: selectOptions,
        label: `Select label`,
        validation: {
          required: `Please, select any value`
        }
      }
    }
  }, [])
  
  return (
    <section>
      <Container>
        <Heading style={{margin: `1.5rem 0`}}>
          useRenderFormItems hook inside Form component
        </Heading>
        <Form
          formConfig={Object.values(getFormDescription())}
          submitForm={data => console.log(data)}
        >
          {({items}) => (
            <>
              { items }
              <Button
                style={{fontSize: `1.2rem`}}
                type="submit"
              >
                Submit
              </Button>
            </>
          )}
        </Form>
      </Container>
    </section>
  )
}

export default memo(HomePage)