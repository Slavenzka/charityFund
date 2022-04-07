import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  Fragment,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import css from 'components/organisms/DateRangePicker/DateRangePicker.module.scss'
import classnames from 'classnames'
import Input from 'components/atoms/Input/Input'
import {
  getCalendarHighlightedDates,
  getCalendarRangeValue,
  getSimplifiedDate,
} from 'utils'
import OverlayClickOutside from 'components/templates/OverlayClickOutside/OverlayClickOutside'
import { DateRangePickerProps } from 'components/organisms/DateRangePicker/DateRangePicker.spec'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import Datepicker from 'components/organisms/Datepicker/Datepicker'

const DateRangePicker = forwardRef(({
  className,
  extraContent,
  CustomTrigger,
  error,
  onChange,
  label,
  inputValueFormatter,
  isRequired,
  value,
  variant = InputVariants.CALENDAR_DEFAULT,
  ...props
}: DateRangePickerProps, ref: ForwardedRef<Dispatch<SetStateAction<boolean>>>) => {
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
    const simplifiedDate = getSimplifiedDate(timestamp)
    const updatedValue = {
      ...value,
      [rangePoint]: +simplifiedDate
    }

    onChange(updatedValue)
  }, [onChange, value])
  
  const toggleOpenStatus = useCallback(() => {
    setOpenStatus(prevState => !prevState)
  }, [])

  const applyExtraDayClass = useCallback((date: Date) => {
    if (from && to && +date === +from) {
      return classnames(`react-datepicker__day--selected`, css.dateRangeStart)
    }

    if (from && to && +date === +to) {
      return classnames(`react-datepicker__day--selected`, css.dateRangeEnd)
    }

    return ``
  }, [from, to])
  
  useEffect(() => {
    onChange({
      from,
      to
    })
  }, [onChange, from, to])

  useEffect(() => {
    // ref is used to lift the setOpenStatus function for DateRangePickerWithControls
    if (ref && typeof ref === `function`) {
      ref(setOpenStatus)
    }
  }, [ref])
  
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
                className={css.input}
                isRequired={isRequired}
                error={error}
              />
            )
            : (
              <Input
                value={inputValue}
                onClick={toggleOpenStatus}
                className={css.input}
                isRequired={isRequired}
                label={label}
                error={error}
                variant={variant}
                readOnly
              />
            )
          }
          <div
            className={classnames(css.calendars, {
              [css.calendarsOpen]: isOpen
            })}
          >
            <Datepicker
              calendarClassName={css.calendar}
              value={from ? +new Date(from) : +getSimplifiedDate(Date.now())}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              peekNextMonth
              onChange={evt => {
                handleChangeRange(+(evt as number), `from`)
              }}
              highlightDates={highlightedDates}
              InputComponent={Fragment}
              formatWeekDay={name => name.slice(0, 1)}
              dayClassName={applyExtraDayClass}
              isHoursPickRequired={false}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              open
              inline
              disabledKeyboardNavigation
              {...props}
            />
            <Datepicker
              calendarClassName={css.calendar}
              value={to ? +new Date(to) : +getSimplifiedDate(Date.now())}
              dateFormat={`dd/MMM/yyyy HH:mm`}
              customInput={<Fragment />}
              onChange={(evt) => {
                handleChangeRange(+(evt as number), `to`)
              }}
              highlightDates={highlightedDates}
              InputComponent={Fragment}
              formatWeekDay={name => name.slice(0, 1)}
              dayClassName={applyExtraDayClass}
              isHoursPickRequired={false}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              peekNextMonth
              open
              inline
              disabledKeyboardNavigation
              {...props}
            />
            {extraContent}
          </div>
        </div>
      )}
    </OverlayClickOutside>
  )
})

export default memo(DateRangePicker)