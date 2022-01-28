import { memo, useCallback } from 'react'
import css from './Timepicker.module.scss'
import classnames from 'classnames'
import Select from 'react-select'

function Timepicker ({
  className,
  options,
  value,
  onChange,
  label
}) {
  const handleChangeSelect = useCallback(evt => {
    onChange && onChange(evt)
  }, [onChange])
  
  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.header}>
        { label }
      </div>
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