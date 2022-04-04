import { ElementType } from "react"

type decoratorsType = [
  (story: () => JSX.Element) => JSX.Element
]

export type StoriesListType = {
  // main heading of stories page
  heading: string;
  // example of component usage
  component: JSX.Element;
  // a string of code of component usage example
  code: string;
}[]

export interface StoriesExportObject {
  // name and location of the component Components/Type(Atoms, Molecules, Organisms or Templates)/ComponentName
  title: string;
  // Reference to component function
  component: ElementType;
  // An array containing a decorator to render the component stories with a specific template
  decorators: decoratorsType;
}

export interface StoriesComponentPropsTemplate {
  extStyles?: {
    [key: string]: string
  }
}