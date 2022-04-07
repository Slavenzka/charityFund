import { HTMLProps, ReactNode } from 'react'

export enum InputVariants {
  DEFAULT = `DEFAULT`,
  CHECKBOX_DEFAULT = `CHECKBOX_DEFAULT`,
  SEARCH = `SEARCH`,
  CALENDAR_DEFAULT = `CALENDAR_DEFAULT`
}

export enum InputTypes {
  TEXTAREA = `textarea`,
  TEXT = `text`,
  NUMBER = `number`,
  TEL = `tel`,
  EMAIL = `email`,
  CHECKBOX = `checkbox`
}

export interface InputDefaultProps {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Cumulative class name form Input component
  */
  className?: string;
  /*
  * Error message to be rendered, e.g. from form state manager
  */
  error?: ReactNode;
  /*
  * Ref setter, e.g. from react-hook-form
  */
  formRef?: <T>(node: T) => void;
  /*
  * Applies styles to highlight a required field
  */
  isRequired?: boolean;
  /*
  * Provides text content for input's label wrapper
  */
  label?: string;
  /*
  * Defines the type of input element
  */
  inputType?: InputTypes;
}

export interface InputProps extends HTMLProps<HTMLInputElement>, InputDefaultProps {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Optional external class name, that would be added to input's label wrapper
  */
  className?: string;
  /*
  * Enum value to apply corresponding style and logic presets
  */
  variant?: InputVariants;
}