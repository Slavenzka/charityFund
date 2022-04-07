import { PropsFormElement, PropsWithClassName, RestPropsType } from 'specs/index.spec'
import { ElementType, ReactNode } from 'react'

export type DatepickerValueType = number | null

export interface DateInputType {
  ({
    value,
    onClick
  }: {
    value: string,
    onClick: () => void
  }): JSX.Element
}

// interface RenderCustomControlsType {
//   ({
//     date,
//     onChange,
//     onSubmit,
//     onCancel
//   }: {
//     date: DatepickerValueType,
//     onChange: (evt: DatepickerValueType) => void,
//     onSubmit: () => void,
//     onCancel: () => void
//   }): JSX.Element
// }

export interface DatepickerProps extends
  PropsWithClassName,
  PropsFormElement<DatepickerValueType, DatepickerValueType>,
  RestPropsType {
  /*
  * Toggles render of dropdown selects in calendar header for quick selection of month and year
  */
  areDropdownsRequired?: boolean;
  /*
  * Error message from form state manager
  */
  error?: string;
  /*
  * A way to pass custom component that toggles visibility of datepicker and renders its current value
  */
  InputComponent?: ElementType;
  /*
  * Custom function to modify the content rendered inside datepicker input field
  */
  inputValueFormatter?: (timestamp: DatepickerValueType) => string;
  /*
  * Toggles calendar close on date select
  */
  isCloseOnSelect?: boolean;
  /*
  * Toggles calendar close on click outside of calendar or calendar input area
  */
  isCloseOnClickOutside?: boolean;
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
  * A way to pass additional content to be rendered below calendar
  */
  extraBlock?: ReactNode,
}