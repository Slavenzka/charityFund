import { ReactNode } from 'react'

export interface InputLabelProps {
  /*
  * External class name
  */
  className?: string;
  /*
  * Toggles application of "required" styles
  */
  isRequired?: boolean;
  /*
  * Toggles application of "required" styles
  */
  label?: string | ReactNode;
}