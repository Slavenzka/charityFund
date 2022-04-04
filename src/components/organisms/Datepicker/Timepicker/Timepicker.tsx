import { memo, useCallback } from 'react'
import css from './Timepicker.module.scss'
import classnames from 'classnames'
import Select from 'react-select'
import { TimepickerProps } from 'components/organisms/Datepicker/Timepicker/Timepicker.spec'
import { SelectCustomClickHandlerType } from 'components/molecules/SelectCustom/SelectCustom.spec'

function Timepicker ({
  className,
  options,
  value,
  onChange,
  label
}: TimepickerProps) {
  const handleChangeSelect: SelectCustomClickHandlerType<number> = useCallback((evt) => {
    onChange && onChange(evt)
  }, [onChange])
  
  return (
    <div className={classnames(css.wrapper, className)}>
      {label && (
        <div className={css.header}>
          {label}
        </div>
      )}
      <div className={css.selectWrapper}>
        <Select
          value={value}
          defaultValue={value}
          onChange={handleChangeSelect}
          options={options}
          className={css.select}
          classNamePrefix='select'
          blurInputOnSelect
          menuIsOpen
        />
      </div>
    </div>
  )
}

export default memo(Timepicker)