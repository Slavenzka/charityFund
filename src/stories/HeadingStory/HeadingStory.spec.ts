import { ElementType, ReactNode } from "react"
import { HeadingTypes } from "components/atoms/Heading/Heading.spec"

export interface HeadingStoryProps {
  label?: ReactNode;
  className?: string;
  type?: HeadingTypes;
  tagName?: string | ElementType;
  isUnderlined?: boolean;
  extStyles?: {
    [key: string]: string
  };
}