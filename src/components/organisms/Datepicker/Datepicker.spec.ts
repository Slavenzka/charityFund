import { PropsFormElement, PropsWithClassName } from 'specs/index.spec'
import { ElementType } from 'react'

export type DatepickerValueType = number

export interface DateInputType {
  ({
    value,
    onClick
  }: {
    value: string,
    onClick: () => void
  }): JSX.Element
}

interface RenderCustomControlsType {
  ({
    date,
    onChange,
    onSubmit,
    onCancel
  }: {
    date: DatepickerValueType,
    onChange: (evt: DatepickerValueType) => void,
    onSubmit: () => void,
    onCancel: () => void
  }): JSX.Element
}

export interface DatepickerProps extends PropsWithClassName, PropsFormElement<DatepickerValueType, DatepickerValueType> {
  /*
  * Error message from form state manager
  */
  error?: string;
  /*
  * A way to pass custom component that toggles visibility of datepicker and renders its current value
  */
  InputComponent?: ElementType;
  /*
  * Toggles calendar close on date select
  */
  isCloseOnSelect?: boolean;
  /*
  * Toggles "is disabled" class on component's wrapper
  */
  isDisabled?: boolean;
  /*
  * Toggles render of hour selector
  */
  isHoursPickRequired?: boolean;
  /*
  * Toggles render of minutes selector
  */
  isMinutesPickRequired?: boolean;
  /*
  * Toggles "is required" styles on label
  */
  isRequired?: boolean;
  /*
  * Label text for the trigger input
  */
  label?: string;
  /*
  * Render function for external controls over state. If provided datepicker component won't call onChange on every
  * update of the selected date and will pass {date, onChange, onSubmit, onCancel} to external component.
  */
  renderCustomControls?: RenderCustomControlsType,
}