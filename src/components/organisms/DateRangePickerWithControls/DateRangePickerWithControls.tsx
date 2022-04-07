import { memo, useCallback, useMemo, useRef, useState } from 'react'
import {
  DateRangePickerProps,
  DateRangePickerValueType
} from 'components/organisms/DateRangePicker/DateRangePicker.spec'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import DateRangePickerControls from 'components/molecules/DateRangePickerControls/DateRangePickerControls'
import { getCalendarRangeValue } from 'utils'

function DateRangePickerWithControls ({
  onChange,
  value,
  ...props
}: DateRangePickerProps) {
  const {
    from,
    to
  } = value

  const toggleOpenedStatus = useRef<((newStatus: boolean) => void) | null>(null)
  const [range, setRange] = useState<DateRangePickerValueType>({
    from,
    to
  })

  const handleClickCancel = useCallback(() => {
    const defaultValue = {
      from: null,
      to: null
    }

    onChange(defaultValue)
    setRange(defaultValue)
  }, [onChange])

  const handleClickConfirm = useCallback(() => {
    onChange(range)

    toggleOpenedStatus.current && toggleOpenedStatus.current(false)
  }, [onChange, range])

  const controls = useMemo(() => (
    <DateRangePickerControls
      handleClickCancel={handleClickCancel}
      handleClickConfirm={handleClickConfirm}
      label={getCalendarRangeValue(range)}
    />
  ), [handleClickCancel, handleClickConfirm, range])

  const getToggleFunctionRef = useCallback(fn => {
    toggleOpenedStatus.current = fn
  }, [])

  return (
    <DateRangePicker
      onChange={setRange}
      value={range}
      extraContent={controls}
      inputValueFormatter={() => getCalendarRangeValue(value)}
      ref={getToggleFunctionRef}
      {...props}
    />
  )
}

export default memo(DateRangePickerWithControls)