import { memo, useCallback } from 'react'
import css from './SelectCustom.module.scss'
import classnames from 'classnames'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import Select from 'react-select'
import IconArrowDropdown from 'assets/icons/IconArrowDropdown'
import PropTypes from 'prop-types'
import IconSpinner from 'assets/icons/IconSpinner'

export const SelectVariants = {
  DEFAULT: `DEFAULT`
}

function SelectCustom ({
  className,
  label,
  isDisabled,
  isLoading,
  isRequired,
  formRef,
  renderCustomIndicator,
  renderCustomOption,
  Spinner = IconSpinner,
  variant = SelectVariants.DEFAULT,
  ...props
}) {
  const OptionComponent = useCallback(props => {
    const {
      children,
      innerProps,
    } = props
    
    if (renderCustomOption) {
      return renderCustomOption({
        className: css.option,
        props
      })
    }
    
    return (
      <div
        className={css.option}
        data-select-option="true"
        {...innerProps}
      >
        { children }
      </div>
    )
  }, [renderCustomOption])
  
  const CustomDropdownIndicator = useCallback(({innerProps}) => {
    if (renderCustomIndicator) {
      return renderCustomIndicator({
        className: css.icon,
        innerProps
      })
    }
    
    const ComponentName = isLoading
      ? Spinner
      : IconArrowDropdown
    
    return (
      <ComponentName {...innerProps} className={css.icon} />
    )
  }, [renderCustomIndicator, isLoading, Spinner])
  
  return (
    <InputLabel
      className={classnames(css.wrapper, className, {
        [css.wrapperDefault]: variant === SelectVariants.DEFAULT,
        [css.wrapperDisabled]: isDisabled,
        [css.wrapperLoading]: isLoading,
      })}
      label={label}
      isRequired={isRequired}
    >
      <Select
        className={css.select}
        classNamePrefix="select"
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          Option: OptionComponent
        }}
        ref={formRef}
        {...props}
      />
    </InputLabel>
  )
}

SelectCustom.propTypes = {
  /*
  * Optional external class name, that would be added to select label wrapper
  */
  className: PropTypes.string,
  /*
  * Select label text
  */
  label: PropTypes.string,
  /*
  * Applies "is disabled" styles
  */
  isDisabled: PropTypes.bool,
  /*
  * Applies "is loading" styles and replaces dropdown indicator with a spinner
  */
  isLoading: PropTypes.bool,
  /*
  * Applies "is required" styles
  */
  isRequired: PropTypes.bool,
  /*
  * Ref getter, e.g. from react-hook-form Controller
  */
  formRef: PropTypes.func,
  /*
  * Render function for the external icon to replace default one
  */
  renderCustomIndicator: PropTypes.func,
  /*
  * Render function for the external custom option component
  */
  renderCustomOption: PropTypes.func,
  /*
  * Spinner icon component for "is loading" state
  */
  Spinner: PropTypes.elementType,
  /*
  * Defines style presets
  */
  variant: PropTypes.oneOf(Object.values(SelectVariants)),
}

SelectCustom.defaultProps = {
  Spinner: IconSpinner,
  variant: SelectVariants.DEFAULT
}

export default memo(SelectCustom)