import { ReactNode } from "react"

export interface StoryTemplateProps {
  componentName: string;
  componentDescription: ReactNode;
  references?: {
    label: string,
    url: string
  }[];
  proptypesString?: string;
  defaultPropsString?: string;
  story: () => JSX.Element;
}