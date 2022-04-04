export enum HeadingTypes {
  H1 = `h1`,
  H2 = `h2`,
  H3 = `h3`,
  H4 = `h4`,
}

export interface HeadingProps {
  /*
  * Optional external class name, that would be added to heading
  */
  className: string;
  /*
  * Triggers application of class name according to its value from HeadingTypes enum
  */
  type: HeadingTypes;
}