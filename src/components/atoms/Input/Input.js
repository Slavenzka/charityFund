import { memo } from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import FormItemError from 'components/atoms/FormItemError/FormItemError'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import IconCheck from 'assets/icons/IconCheck'
import IconSearch from 'assets/icons/IconSearch'

export const InputVariants = {
  DEFAULT: `DEFAULT`,
  CHECKBOX_DEFAULT: `CHECKBOX_DEFAULT`,
  SEARCH: `SEARCH`
}

export const InputTypes = {
  TEXTAREA: `textarea`,
  TEXT: `text`,
  NUMBER: `number`,
  TEL: `tel`,
  EMAIL: `email`,
  CHECKBOX: `checkbox`
}

const InputDefault = memo(({
  children,
  className,
  error,
  formRef,
  isRequired,
  label,
  type = InputTypes.TEXT,
  ...restProps
}) => {
  // console.log(type)
  const isTextArea = type === InputTypes.TEXTAREA
  const isInputHidden = type === InputTypes.CHECKBOX
  
  const TagName = isTextArea
    ? type
    : `input`
  
  const extraProps = isTextArea
    ? {}
    : {type}
  
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
      </InputLabel>
      {error && <FormItemError message={error} />}
    </>
  )
})

function Input ({
  checked,
  className,
  variant = InputVariants.DEFAULT,
  ...restProps
}) {
  switch (variant) {
    case InputVariants.CHECKBOX_DEFAULT: {
      return (
        <InputDefault
          checked={checked}
          className={classnames(css.checkboxDefault, className, {
            [css.checkboxDefaultChecked]: Boolean(checked)
          })}
          type={InputTypes.CHECKBOX}
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
  type: PropTypes.oneOf(Object.values(InputTypes)),
  /*
  * Applies styles preset associated with indicated variant from InputVariants enum
  */
  variant: PropTypes.oneOf(Object.values(InputVariants))
}

Input.defaultProps = {
  variant: InputVariants.DEFAULT
}

export default memo(Input)