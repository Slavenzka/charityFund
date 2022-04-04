import { ButtonClickHandlerType } from 'specs/index.spec'
import { ElementType } from 'react'
import { TabVariants } from 'components/molecules/Tabs/Tabs.spec'

export interface TabItemProps {
  /*
  * External class name
  */
  className?: string;
  /*
  * Triggers application of selected tab styles
  */
  isActive?: boolean;
  /*
  * Click handler for the non-active tab item
  */
  onClick: ButtonClickHandlerType;
  /*
  * Provides customization of wrapper tag of tab item
  */
  TagName?: ElementType;
  /*
  * Toggles application of style presets
  */
  variant?: TabVariants;
}