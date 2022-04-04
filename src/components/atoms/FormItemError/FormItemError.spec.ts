import { ReactNode } from "react"

export interface FormItemErrorProps {
  /*
  * External class name for styling
  */
  className?: string;
  /*
  * Error message text
  */
  message: ReactNode;
}