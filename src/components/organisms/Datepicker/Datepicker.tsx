import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import css from './Datepicker.module.scss'
import Input from 'components/atoms/Input/Input'
import classnames from 'classnames'
import Timepicker from 'components/organisms/Datepicker/Timepicker/Timepicker'
import { generateTimeOptions, getFormattedDate } from 'utils'
import Button from 'components/atoms/Button/Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import { DateInputType, DatepickerProps } from 'components/organisms/Datepicker/Datepicker.spec'

function Datepicker ({
  className,
  error,
  InputComponent,
  isCloseOnSelect = true,
  isDisabled,
  isHoursPickRequired = true,
  isMinutesPickRequired = true,
  isRequired,
  label,
  onChange,
  renderCustomControls,
  value,
  ...props
}: DatepickerProps) {
  const [date, setDate] = useState(value)
  const [open, setOpen] = useState(false)
  const valueRef = useRef(value)
  
  const isFilterReset = valueRef.current && !value
  const isSingleTimepicker = isHoursPickRequired && !isMinutesPickRequired
  const isNotTimepicker = !isHoursPickRequired
  
  const inputValue = getFormattedDate(date, !isNotTimepicker)
  
  const DateInput: DateInputType = useCallback(({value, onClick}) => {
    const inputProps = {
      error,
      onClick,
      value,
    }
    
    if (InputComponent) {
      return (
        <InputComponent
          label={label}
          {...inputProps}
        />
      )
    }
    
    return (
      <Input
        {...inputProps}
        readOnly
      />
    )
  }, [InputComponent, error, label])

  const handleChangeHours = useCallback(evt => {
    const selectedDate = new Date(date)
    selectedDate.setHours(evt.value)
    setDate(+selectedDate)
  }, [date])
  
  const handleChangeMinutes = useCallback(evt => {
    const selectedDate = new Date(date)
    selectedDate.setMinutes(evt.value)
    setDate(+selectedDate)
  }, [date])
  
  const setToday = useCallback(() => {
    setDate(Date.now())
  }, [])
  
  const defaultHours = useMemo(() => {
    return {
      label: value
        ? new Date(value).getHours()
        : 0,
      value: value
        ? new Date(value).getHours()
        : 0,
    }
  }, [value])
  
  const defaultMinutes = useMemo(() => {
    return {
      label: value
        ? new Date(value).getMinutes()
        : 0,
      value: value
        ? new Date(value).getMinutes()
        : 0,
    }
  }, [value])
  
  useEffect(() => {
    if (!isFilterReset && date !== value && !renderCustomControls) {
      onChange(date)
    }
  }, [date, value, onChange, renderCustomControls, isFilterReset])
  
  useEffect(() => {
    if (isFilterReset) {
      setDate(value)
    }
    valueRef.current = value
  }, [isFilterReset, value])
  
  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperDisabled]: isDisabled,
        [css.wrapperSingleTimepicker]: isSingleTimepicker,
        [css.wrapperNoTimepicker]: isNotTimepicker
      })}
    >
      <InputLabel
        className={css.label}
        isRequired={isRequired}
        label={InputComponent ? null : label}
      >
        <DateInput
          onClick={() => {
            
            if (open && date !== value) {
              setDate(value)
            }
            
            setOpen(prevState => !prevState)
          }}
          value={inputValue}
        />
      </InputLabel>
      <DatePicker
        selected={new Date(date)}
        customInput={<Fragment />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={(evt: Date) => {
          setDate(+evt)
          isCloseOnSelect && !renderCustomControls && setOpen(false)
        }}
        onClickOutside={() => {
          setOpen(false)
          
          if (value !== date) {
            setDate(value)
          }
        }}
        open={open}
        disabledKeyboardNavigation
        {...props}
      >
        {!isNotTimepicker && (
          <>
            <div className={css.timepicker}>
              { isHoursPickRequired &&
                <Timepicker
                  value={defaultHours}
                  onChange={handleChangeHours}
                  options={generateTimeOptions(24)}
                  label={`hrs`}
                />
              }
              { isHoursPickRequired && isMinutesPickRequired &&
                <Timepicker
                  value={defaultMinutes}
                  onChange={handleChangeMinutes}
                  options={generateTimeOptions(60)}
                  label={`min`}
                />
              }
            </div>
            <div className={css.footer}>
              <Button
                onClick={setToday}
                className={css.buttonToday}
              >
                Today
              </Button>
              {renderCustomControls && renderCustomControls({
                date,
                onChange,
                onSubmit: () => {
                  setOpen(false)
                },
                onCancel: () => {
                  setOpen(false)
  
                  if (value !== date) {
                    setDate(value)
                  }
                }
              })}
            </div>
          </>
        )}
      </DatePicker>
    </div>
  )
}

export default Datepicker