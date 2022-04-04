import { ReactNode } from "react"

export interface ListItemProps {
  heading: string | ReactNode;
  component: ReactNode;
  code: ReactNode;
}

export interface ComponentRenderTemplateStoryProps {
  list: ListItemProps[];
  itemStyles?: {
    [key: string]: string;
  };
}