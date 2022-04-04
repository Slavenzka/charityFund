import { FC } from 'react'
import { PropsWithClassName } from 'specs/index.spec'

export enum TabVariants {
  DEFAULT = `DEFAULT`,
}

export interface TabType {
  /*
  * Tab unique identifier
  */
  id: number | string;
  /*
  * Tab label
  */
  label: string;
  /*
  * Component relevant to actual tab
  */
  Component: FC;
}

export interface TabsProps extends PropsWithClassName {
  /*
  * Active tab data
  */
  activeTab: TabType;
  /*
  * Tab click handler that replaces active tab value with the data of the clicked tab
  */
  onTabClick: (item: TabType) => void;
  /*
  * An array with the data required to render and operate tabs
  */
  tabsConfig: TabType[];
  /*
  * Toggles application of style presets
  */
  variant?: TabVariants;
}