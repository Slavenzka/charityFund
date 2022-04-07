import { PropsFormElement, PropsWithClassName } from 'specs/index.spec'
import { ElementType, ReactNode } from 'react'
import { InputVariants } from 'components/atoms/Input/Input.spec'

export interface DateRangePickerValueType {
  from: number | null,
  to: number | null
}

export interface DateRangePickerControlProps {
  /*
  * State update function
  */
  onChange: (newValue: DateRangePickerValueType) => void,
  /*
  * Actual value from state
  */
  value: DateRangePickerValueType,
}

export interface DateRangePickerProps extends
  PropsWithClassName,
  PropsFormElement<DateRangePickerValueType,DateRangePickerValueType>,
  DateRangePickerControlProps {
  /*
  * Toggles render of dropdown lists for quick selection of a year and a month
  */
  areDropdownsRequired?: boolean;
  /*
  * A way to pass additional content to be rendered below calendars, e.g. controls from controller wrapper
  */
  extraContent?: ReactNode,
  /*
  * Optional component to replace default input field for indicating selected range and toggling range picker
  */
  CustomTrigger?: ElementType,
  /*
  * Error message from form state manager
  */
  error?: string,
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
  * Style variant of default input component
  */
  variant?: InputVariants;
}