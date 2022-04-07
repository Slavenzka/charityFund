import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import css from './Datepicker.module.scss'
import Input from 'components/atoms/Input/Input'
import classnames from 'classnames'
import Timepicker from 'components/organisms/Datepicker/Timepicker/Timepicker'
import { generateTimeOptions, getFormattedDate } from 'utils'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import { DateInputType, DatepickerProps } from 'components/organisms/Datepicker/Datepicker.spec'
import CalendarHeader from 'components/molecules/CalendarHeader/CalendarHeader'

const Datepicker = forwardRef(({
  areDropdownsRequired = true,
  className,
  error,
  extraBlock,
  InputComponent,
  isCloseOnSelect = true,
  isCloseOnClickOutside = true,
  isDisabled,
  isHoursPickRequired = true,
  isMinutesPickRequired = true,
  inputValueFormatter,
  isRequired,
  label,
  onChange,
  value,
  ...props
}: DatepickerProps, ref: ForwardedRef<Dispatch<SetStateAction<boolean>>>) => {
  const [open, setOpen] = useState(false)

  const isSingleTimepicker = isHoursPickRequired && !isMinutesPickRequired
  const isNotTimepicker = !isHoursPickRequired

  const inputValue = useMemo(() => {
    if (inputValueFormatter) return inputValueFormatter(value)

    return getFormattedDate(value, !isNotTimepicker)
  }, [value, inputValueFormatter, isNotTimepicker])

  const DateInput: DateInputType = useCallback(({value, onClick}) => {
    const inputProps = {
      error,
      onClick,
      value,
    }

    if (InputComponent === Fragment) return <Fragment />
    
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
    if (value) {
      const selectedDate = new Date(value)
      selectedDate.setHours(evt.value)
      onChange(+selectedDate)
    }
  }, [value, onChange])
  
  const handleChangeMinutes = useCallback(evt => {
    if (value) {
      const selectedDate = new Date(value)
      selectedDate.setMinutes(evt.value)
      onChange(+selectedDate)
    }
  }, [value, onChange])

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
    // ref is used to lift the setOpenStatus function for DateRangePickerWithControls
    if (ref && typeof ref === `function`) {
      ref(setOpen)
    }
  }, [ref])

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
            setOpen(prevState => !prevState)
          }}
          value={inputValue}
        />
      </InputLabel>
      <DatePicker
        open={open}
        selected={value ? new Date(value) : new Date()}
        customInput={<Fragment />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={(evt: Date) => {
          onChange(+evt)
          isCloseOnSelect && setOpen(false)
        }}
        onClickOutside={() => {
          isCloseOnClickOutside && setOpen(false)
        }}
        renderCustomHeader={props => (
          <CalendarHeader
            areDropdownsRequired={areDropdownsRequired}
            {...props}
          />
        )}
        showPopperArrow={false}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: ({ placement }) => {
                const isTopPosition = placement === 'top' || placement === `top-start` || placement === `top-end`

                if (isTopPosition) {
                  return [0, 30];
                }

                return [0, 0];
              },
            },
          },
        ]}
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
            {extraBlock}
          </>
        )}
      </DatePicker>
    </div>
  )
})

export default Datepicker