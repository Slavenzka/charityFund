import { FormEventHandler, memo, useState } from 'react'
import css from './TextareaVariableHeight.module.scss'
import Input from 'components/atoms/Input/Input'
import useTextAreaAutoHeight from 'hooks/useTextAreaAutoHeight'
import PropTypes from 'prop-types'
import { InputTypes } from 'components/atoms/Input/Input.spec'
import { FieldError } from 'react-hook-form'

function TextareaVariableHeight ({
  formRef,
  ...props
}: {
  formRef?: <T>(node: T) => void,
  error?: FieldError | string,
  isRequired?: boolean,
  name?: string,
  value?: string,
  onChange?: FormEventHandler<HTMLInputElement>
}) {
  const [ref, setRef] = useState<HTMLTextAreaElement | null>(null)
  
  useTextAreaAutoHeight({
    elementRef: ref as HTMLTextAreaElement
  })
  
  return (
    <Input
      inputType={InputTypes.TEXTAREA}
      formRef={(node: unknown) => {
        formRef && formRef(node)
        setRef(node as HTMLTextAreaElement)
      }}
      className={css.input}
      {...props}
    />
  )
}

TextareaVariableHeight.propTypes = {
  /*
  * External ref getter, e.g. from react-hook-form Controller
  */
  formRef: PropTypes.func
}

export default memo(TextareaVariableHeight)