import { ButtonClickHandlerType, PropsWithClassName } from 'specs/index.spec'

export enum ButtonVariants {
  DEFAULT = `DEFAULT`
}

export enum ButtonHeights {
  SMALL = `SMALL`,
  REGULAR = `REGULAR`,
  LARGE = `LARGE`
}

export enum ButtonTypes {
  BUTTON = `button`,
  SUBMIT = `submit`
}

export interface ExtraButtonProps {
  type: string
}

interface ExtraRouterLinkProps {
  to: string
}

interface ExtraLinkProps {
  href: string;
  rel: `noopener norefferer`,
  target: `_blank`
}

export type ExtraProps = ExtraButtonProps | ExtraRouterLinkProps | ExtraLinkProps

export interface ButtonAsButtonProps {
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
  /*
  * Definition of button type
  */
  type?: string;
  /*
  * Button click handler
  */
  onClick?: ButtonClickHandlerType;
}

export interface ButtonAsLinkProps {
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  * and react router link otherwise.
  */
  url?: string;
}

export interface DefaultButtonProps extends PropsWithClassName {
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
}

export interface ButtonProps extends PropsWithClassName, DefaultButtonProps, ButtonAsLinkProps, ButtonAsButtonProps {
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
}