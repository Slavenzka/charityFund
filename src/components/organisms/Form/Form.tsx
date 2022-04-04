import { memo, useEffect, useMemo } from 'react'
import { useForm, NestedValue } from 'react-hook-form'
import useRenderFormItems from 'hooks/useRenderFormItems'
import PropTypes from 'prop-types'
import { FormElements } from 'utils/const'
import { FormProps } from 'components/organisms/Form/Form.spec'

function Form ({
  children,
  formConfig,
  submitForm,
}: FormProps) {
  const defaultValues = useMemo(() => {
    if (!formConfig || !Array.isArray(formConfig)) return {}
    
    return formConfig.reduce((total, {name, defaultValue}) => {
      total[name] = defaultValue as NestedValue
      return total
    }, {} as {[key: string]: NestedValue})
  }, [formConfig])
  
  const { handleSubmit, ...methods } = useForm({
    defaultValues
  })
  const { reset } = methods
  
  const items = useRenderFormItems({
    list: formConfig,
    ...methods
  })
  
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    }
  }, [defaultValues, reset])
  
  return (
    <form
      onSubmit={handleSubmit(data => submitForm(data, {
        ...methods
      }))}
      style={{
        height: `100%`
      }}
    >
      {children({
        items,
        ...methods
      })}
    </form>
  )
}

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

export default memo(Form)