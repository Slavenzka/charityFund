import { memo, useCallback, useMemo, useRef, useState } from 'react'
import Datepicker from 'components/organisms/Datepicker/Datepicker'
import { DatepickerProps, DatepickerValueType } from 'components/organisms/Datepicker/Datepicker.spec'
import DatepickerControls from 'components/molecules/DatepickerControls/DatepickerControls'
import { getFormattedDate } from 'utils'

function DatepickerWithControls ({
  onChange,
  value,
  ...props
}: DatepickerProps) {
  const toggleOpenedStatus = useRef<((newStatus: boolean) => void) | null>(null)
  const [date, setDate] = useState<DatepickerValueType>(value)

  const handleClickCancel = useCallback(() => {
    const defaultValue = null

    onChange(defaultValue)
    setDate(defaultValue)
    toggleOpenedStatus.current && toggleOpenedStatus.current(false)
  }, [onChange])

  const handleClickConfirm = useCallback(() => {
    onChange(date)

    toggleOpenedStatus.current && toggleOpenedStatus.current(false)
  }, [onChange, date])

  const getToggleFunctionRef = useCallback(fn => {
    toggleOpenedStatus.current = fn
  }, [])

  const controls = useMemo(() => {
    return (
      <DatepickerControls
        onChange={setDate}
        handleConfirm={handleClickConfirm}
        handleCancel={handleClickCancel}
        label={getFormattedDate(date, true)}
      />
    )
  }, [date, handleClickConfirm, handleClickCancel])

  return (
    <Datepicker
      value={date}
      onChange={setDate}
      extraBlock={controls}
      isCloseOnSelect={false}
      isCloseOnClickOutside={false}
      inputValueFormatter={() => getFormattedDate(value, true)}
      ref={getToggleFunctionRef}
      {...props}
    />
  )
}

export default memo(DatepickerWithControls)