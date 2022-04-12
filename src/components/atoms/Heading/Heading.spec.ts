import { PropsWithClassName } from 'specs/index.spec'
import { PropsWithChildren } from 'react'

export enum HeadingTypes {
  H1 = `h1`,
  H2 = `h2`,
  H3 = `h3`,
  H4 = `h4`,
}

export interface HeadingProps extends PropsWithChildren<PropsWithClassName> {
  /*
  * Applies heading type
  */
  headingType?: HeadingTypes;
  /*
  * Applies heading style that is decoupled from type
  */
  headingStyle?: HeadingTypes;
  dangerouslySetInnerHTML?: {
    __html: string
  };
}