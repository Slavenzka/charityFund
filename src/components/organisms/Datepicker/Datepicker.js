import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import css from './Datepicker.module.scss'
import Input from 'components/atoms/Input/Input'
import classnames from 'classnames'
import Timepicker from './Timepicker/Timepicker'
import { generateTimeOptions, getFormattedDate } from 'utils'
import Button from 'components/atoms/Button/Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import PropTypes from 'prop-types'

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
}) {
  const [date, setDate] = useState(value)
  const [open, setOpen] = useState(false)
  
  const isSingleTimepicker = isHoursPickRequired && !isMinutesPickRequired
  const isNotTimepicker = !isHoursPickRequired
  
  const inputValue = getFormattedDate(date, !isNotTimepicker)
  
  const DateInput = (({value, onClick}) => {
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
  })
  
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
    if (date !== value && !renderCustomControls) {
      onChange(date)
    }
  }, [date, value, onChange, renderCustomControls])
  
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
        selected={date}
        customInput={<Fragment />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={evt => {
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

Datepicker.propTypes = {
  /*
  * External class name that will be applied to component's wrapper
  */
  className: PropTypes.string,
  /*
  * Error message from form state manager
  */
  error: PropTypes.string,
  /*
  * Toggles calendar close on date select
  */
  isCloseOnSelect: PropTypes.bool,
  /*
  * Toggles "is disabled" class on component's wrapper
  */
  isDisabled: PropTypes.bool,
  /*
  * Toggles render of hour selector
  */
  isHoursPickRequired: PropTypes.bool,
  /*
  * Toggles render of minutes selector
  */
  isMinutesPickRequired: PropTypes.bool,
  /*
  * A way to pass custom component that toggles visibility of datepicker and renders its current value
  */
  InputComponent: PropTypes.elementType,
  /*
  * Toggles "is required" styles on label
  */
  isRequired: PropTypes.bool,
  /*
  * Label text for the trigger input
  */
  label: PropTypes.string,
  /*
  * State update function
  */
  onChange: PropTypes.func,
  /*
  * Actual value from state in the form of timestamp or null in no default value was provided
  */
  value: PropTypes.number,
  /*
  * Render function for external controls over state. If provided datepicker component won't call onChange on every
  * update of the selected date and will pass {date, onChange, onSubmit, onCancel} to external component.
  */
  renderCustomControls: PropTypes.func,
}

Datepicker.defaultProps = {
  isCloseOnSelect: true,
  isHoursPickRequired: true,
  isMinutesPickRequired: true,
  value: null,
}

export default Datepicker