import { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react'
import css from 'components/organisms/DateRangePicker/DateRangePicker.module.scss'
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import Input from 'components/atoms/Input/Input'
import { getCalendarHighlightedDates, getCalendarRangeValue } from 'utils'
import OverlayClickOutside from 'components/templates/OverlayClickOutside/OverlayClickOutside'
import { DateRangePickerProps } from 'components/organisms/DateRangePicker/DateRangePicker.spec'

function DateRangePicker ({
  className,
  CustomTrigger,
  error,
  onChange,
  label,
  inputValueFormatter,
  isRequired,
  value,
}: DateRangePickerProps) {
  const {
    from,
    to,
  } = value || {}
  
  const [isOpen, setOpenStatus] = useState(false)
  
  const highlightedDates = getCalendarHighlightedDates(value)
  
  const inputValue = useMemo(() => {
    if (inputValueFormatter) return inputValueFormatter(value)
    
    return getCalendarRangeValue(value)
  }, [value, inputValueFormatter])
  
  const handleChangeRange = useCallback((timestamp, rangePoint) => {
    onChange({
      ...value,
      [rangePoint]: timestamp
    })
  }, [onChange, value])
  
  const toggleOpenStatus = useCallback(() => {
    setOpenStatus(prevState => !prevState)
  }, [])
  
  useEffect(() => {
    onChange({
      from,
      to
    })
  }, [onChange, from, to])
  
  return (
    <OverlayClickOutside
      isActive={isOpen}
      handleClickOutside={toggleOpenStatus}
    >
      {({className: classNameFromOverlay}) => (
        <div
          className={classnames(css.wrapper, classNameFromOverlay, className, {
            [css.wrapperError]: Boolean(error)
          })}
        >
          {CustomTrigger
            ? (
              <CustomTrigger
                value={value}
                onClick={toggleOpenStatus}
                isRequired={isRequired}
                error={error}
              />
            )
            : (
              <Input
                value={inputValue}
                onClick={toggleOpenStatus}
                isRequired={isRequired}
                label={label}
                error={error}
                readOnly
              />
            )
          }
          <div
            className={classnames(css.calendars, {
              [css.calendarsOpen]: isOpen
            })}
          >
            <DatePicker
              selected={new Date(from)}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(evt: Date) => {
                handleChangeRange(+evt, `from`)
              }}
              highlightDates={highlightedDates}
              open
              inline
            />
            <DatePicker
              className={css.to}
              selected={new Date(to)}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(evt: Date) => {
                handleChangeRange(+evt, `to`)
              }}
              highlightDates={highlightedDates}
              open
              inline
            />
          </div>
        </div>
      )}
    </OverlayClickOutside>
  )
}

export default memo(DateRangePicker)