import { ReactNode } from 'react'
import { PropsWithClassName } from 'specs/index.spec'

export interface CollapseControllerProps extends PropsWithClassName {
  /*
  * External classname for collapse content
  */
  classNameContent?: string;
  /*
  * Content of collapse trigger button
  */
  buttonContent: ReactNode;
  /*
  * Content of collapsable area
  */
  collapseContent: ReactNode;
  /*
  * External flag to disable collapse
  */
  isDisabled?: boolean;
}