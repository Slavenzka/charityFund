import { memo, useCallback, useMemo, useState } from 'react'
import css from './FilteredList.module.scss'
import classnames from 'classnames'
import Input, { InputVariants } from 'components/atoms/Input/Input'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import useDebounce from 'hooks/useDebounce'
import PropTypes from 'prop-types'

function FilteredList ({
  className,
  CustomInput,
  CustomOption,
  options,
  ...props
}) {
  const [filterValue, setFilterValue] = useState(``)
  const debouncedFilterValue = useDebounce(filterValue)
  
  const handleChangeFilter = useCallback(({target}) => {
    setFilterValue(target.value)
  }, [])
  
  const processedOptions = useMemo(() => {
    return debouncedFilterValue
      ? options.filter(item => item.label.toUpperCase().includes(debouncedFilterValue.toUpperCase()))
      : options
  }, [debouncedFilterValue, options])
  
  const renderCustomOption = useCallback(({props: {innerProps, isSelected, children}}) => {
    if (CustomOption) {
      return (
        <CustomOption
          data-select-option="true"
          isSelected={isSelected}
          {...innerProps}
        >
          {children}
        </CustomOption>
      )
    }
    
    return (
      <div
        className={css.option}
        data-select-option="true"
        {...innerProps}
      >
        <Input
          className={css.checkbox}
          checked={isSelected}
          variant={InputVariants.CHECKBOX_DEFAULT}
          label={children}
          readOnly
        />
      </div>
    )
  }, [CustomOption])
  
  const input = useMemo(() => {
    if (CustomInput) {
      return (
        <CustomInput
          value={filterValue}
          onChange={handleChangeFilter}
        />
      )
    }
    
    return (
      <Input
        value={filterValue}
        onChange={handleChangeFilter}
        variant={InputVariants.SEARCH}
      />
    )
  }, [CustomInput, filterValue, handleChangeFilter])
  
  return (
    <div className={classnames(css.wrapper, className)}>
      {input}
      <SelectCustom
        className={css.list}
        options={processedOptions}
        hideSelectedOptions={false}
        renderCustomOption={renderCustomOption}
        menuIsOpen
        isMulti
        {...props}
      />
    </div>
  )
}

FilteredList.propTypes = {
  /*
  * External classname for extra styling
  */
  className: PropTypes.string,
  /*
  * Optional component to replace default filter value input
  */
  CustomInput: PropTypes.elementType,
  /*
  * Optional component to replace default option
  */
  CustomOption: PropTypes.elementType,
  /*
  * Complete list of available options
  */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ).isRequired,
}

export default memo(FilteredList)