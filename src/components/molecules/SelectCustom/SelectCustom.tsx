import { memo, useCallback } from 'react'
import css from './SelectCustom.module.scss'
import classnames from 'classnames'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import Select from 'react-select'
import IconArrowDropdown from 'assets/icons/IconArrowDropdown'
import IconSpinner from 'assets/icons/IconSpinner'
import {
  SelectCustomProps,
  SelectVariants
} from 'components/molecules/SelectCustom/SelectCustom.spec'

function SelectCustom<ValueType = string> ({
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
}: SelectCustomProps<ValueType>) {
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

export default memo(SelectCustom)