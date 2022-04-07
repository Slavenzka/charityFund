import { FC, HTMLAttributes, memo } from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import FormItemError from 'components/atoms/FormItemError/FormItemError'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import IconCheck from 'assets/icons/IconCheck'
import IconSearch from 'assets/icons/IconSearch'
import { InputDefaultProps, InputProps, InputTypes, InputVariants } from 'components/atoms/Input/Input.spec'

const InputDefault: FC<InputDefaultProps> = memo(({
  children,
  className,
  error,
  formRef,
  isRequired,
  label,
  inputType = InputTypes.TEXT,
  ...restProps
}) => {
  // console.log(type)
  const isTextArea = inputType === InputTypes.TEXTAREA
  const isInputHidden = inputType === InputTypes.CHECKBOX
  
  const TagName = isTextArea
    ? inputType
    : `input`
  
  const extraProps = isTextArea
    ? {}
    : {type: inputType}
  
  const input = (
    <TagName
      className={classnames(css.input, {
        [css.inputHidden]: isInputHidden
      })}
      {...extraProps}
      {...restProps}
      ref={formRef}
    />
  )
  
  return (
    <>
      <InputLabel
        className={classnames(css.wrapper, className, {
          [css.wrapperRequired]: isRequired,
        })}
        isRequired={isRequired}
        label={label}
      >
        { children }
        { input }
        {error && <FormItemError message={error} />}
      </InputLabel>
    </>
  )
})

const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  checked,
  className,
  variant = InputVariants.DEFAULT,
  ...restProps
}) => {
  switch (variant) {
    case InputVariants.CHECKBOX_DEFAULT: {
      return (
        <InputDefault
          checked={checked}
          className={classnames(css.checkboxDefault, className, {
            [css.checkboxDefaultChecked]: Boolean(checked)
          })}
          inputType={InputTypes.CHECKBOX}
          {...restProps}
        >
          {checked && <IconCheck className={css.iconCheck} />}
        </InputDefault>
      )
    }
    case InputVariants.SEARCH: {
      return (
        <InputDefault
          className={classnames(className, css.wrapperSearch)}
          {...restProps}
        >
          <IconSearch className={css.iconSearch} />
        </InputDefault>
      )
    }
    default:
      return (
        <InputDefault
          className={className}
          {...restProps}
        />
      )
  }
}

export default memo(Input)