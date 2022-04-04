import { ReactNode } from "react"

export interface CodeStoryProps {
  className?: string;
  code?: string;
  extStyles?: {
    [key: string]: string
  };
  component?: ReactNode;
}

export interface FindAndReplaceStringProps {
  (str: string, substrStart: string, substrEnd: string, classToAdd: string): string
}