import { Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react'
import css from 'components/organisms/DateRangePicker/DateRangePicker.module.scss'
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import Input from 'components/atoms/Input/Input'
import { getCalendarHighlightedDates, getCalendarRangeValue } from 'utils'
import OverlayClickOutside from 'components/templates/OverlayClickOutside/OverlayClickOutside'
import PropTypes from 'prop-types'

function DateRangePicker ({
  className,
  CustomTrigger,
  error,
  onChange,
  label,
  inputValueFormatter,
  isRequired,
  value,
}) {
  const {
    from,
    to
  } = value || {}
  
  const [isOpen, setOpenStatus] = useState(false)
  const [range, setRange] = useState({
    from: from ?? null,
    to: to ?? null
  })
  
  const highlightedDates = getCalendarHighlightedDates(range)
  
  const inputValue = useMemo(() => {
    if (inputValueFormatter) return inputValueFormatter(range)
    
    return getCalendarRangeValue(range)
  }, [range, inputValueFormatter])
  
  const handleChangeRange = useCallback((timestamp, rangePoint) => {
    setRange(prevState => ({
      ...prevState,
      [rangePoint]: timestamp
    }))
  }, [])
  
  const toggleOpenStatus = useCallback(() => {
    setOpenStatus(prevState => !prevState)
  }, [])
  
  useEffect(() => {
    onChange(range)
  }, [onChange, range])
  
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
                value={range}
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
              selected={range.from}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={evt => {
                handleChangeRange(+evt, `from`)
              }}
              highlightDates={highlightedDates}
              open
              inline
            />
            <DatePicker
              className={css.to}
              selected={range.to}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={evt => {
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

DateRangePicker.propTypes = {
  /*
  * External class name that will be applied to component's wrapper
  */
  className: PropTypes.string,
  /*
  * Error message from form state manager
  */
  error: PropTypes.string,
  /*
  * Label text for the trigger input
  */
  label: PropTypes.string,
  /*
  * State update function
  */
  onChange: PropTypes.func,
  /*
  * Received the {from, to} state and returns the string that becomes the value of trigger input
  */
  inputValueFormatter: PropTypes.func,
  /*
  * Actual value from state
  */
  value: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number
  }),
}

export default memo(DateRangePicker)