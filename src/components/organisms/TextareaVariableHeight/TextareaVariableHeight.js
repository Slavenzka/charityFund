import { memo, useState } from 'react'
import css from './TextareaVariableHeight.module.scss'
import Input, { InputTypes } from 'components/atoms/Input/Input'
import useTextAreaAutoHeight from 'hooks/useTextAreaAutoHeight'
import PropTypes from 'prop-types'

function TextareaVariableHeight ({
  formRef,
  ...props
}) {
  const [ref, setRef] = useState(null)
  
  useTextAreaAutoHeight({
    elementRef: ref
  })
  
  return (
    <Input
      type={InputTypes.TEXTAREA}
      formRef={node => {
        formRef && formRef(node)
        setRef(node)
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