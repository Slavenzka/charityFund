import { memo } from 'react'
import css from './DateRangePickerControls.module.scss'
import { DateRangePickerControlsProps } from 'components/molecules/DateRangePickerControls/DateRangePickerControls.spec'

function DateRangePickerControls ({
  handleClickCancel,
  handleClickConfirm,
  label,
}: DateRangePickerControlsProps) {
  return (
    <div className={css.wrapper}>
      {label && (
        <span className={css.label}>
          {label}
        </span>
      )}
      <button
        onClick={handleClickCancel}
        type="button"
      >
        Отменить
      </button>
      <button
        onClick={handleClickConfirm}
        type="button"
      >
        Применить
      </button>
    </div>
  )
}

export default memo(DateRangePickerControls)