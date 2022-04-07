import{ memo, useCallback } from 'react'
import css from './DatepickerControls.module.scss'
import { DatepickerControlsProps } from 'components/molecules/DatepickerControls/DatepickerControls.spec'
import Button from 'components/atoms/Button/Button'

function DatepickerControls ({
  onChange,
  handleConfirm,
  handleCancel,
  label
}: DatepickerControlsProps) {
  const setToday = useCallback(() => {
    onChange(Date.now())
  }, [onChange])

  return (
    <div className={css.wrapper}>
      {label && (
        <span className={css.label}>
          {label}
        </span>
      )}
      <Button
        onClick={setToday}
        className={css.buttonToday}
      >
        Today
      </Button>
      <button
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={handleConfirm}
        type="button"
      >
        Confirm
      </button>
    </div>
  )
}

export default memo(DatepickerControls)