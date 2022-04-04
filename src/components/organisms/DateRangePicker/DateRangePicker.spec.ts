import { PropsFormElement, PropsWithClassName } from 'specs/index.spec'
import { ElementType } from 'react'

interface DateRangePickerValueType {
  from: number,
  to: number
}

export interface DateRangePickerProps extends PropsWithClassName, PropsFormElement<DateRangePickerValueType, DateRangePickerValueType>{
  /*
  * Optional component to replace default input field for indicating selected range and toggling range picker
  */
  CustomTrigger?: ElementType,
  /*
  * Error message from form state manager
  */
  error?: string,
  /*
  * State update function
  */
  onChange: (newValue: DateRangePickerValueType) => void,
  /*
  * Label text for the trigger input
  */
  label?: string,
  /*
  * Received the {from, to} state and returns the string that becomes the value of trigger input
  */
  inputValueFormatter?: (value: DateRangePickerValueType) => string,
  /*
  * Toggles application of "is required" properties
  */
  isRequired?: boolean,
  /*
  * Actual value from state
  */
  value: DateRangePickerValueType,
}