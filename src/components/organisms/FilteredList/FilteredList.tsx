import { memo, useCallback, useMemo, useState } from 'react'
import css from './FilteredList.module.scss'
import classnames from 'classnames'
import Input from 'components/atoms/Input/Input'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import useDebounce from 'hooks/useDebounce'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import { FilteredListProps } from 'components/organisms/FilteredList/FilteredList.spec'

function FilteredList<ValueType = string> ({
  className,
  CustomInput,
  CustomOption,
  options,
  ...props
}: FilteredListProps<ValueType>) {
  const [filterValue, setFilterValue] = useState(``)
  const debouncedFilterValue = useDebounce(filterValue)
  
  const handleChangeFilter = useCallback(({target}) => {
    setFilterValue(target.value)
  }, [])
  
  const processedOptions = useMemo(() => {
    return debouncedFilterValue
      ? options.filter(({label}) => label.toString().toUpperCase().includes(debouncedFilterValue.toUpperCase()))
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

export default memo(FilteredList)