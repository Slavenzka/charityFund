import React, { ElementType, ReactNode } from 'react'

// export type RefGetterType = <T = HTMLElement | SVGSVGElement | null>(node: T) => void
export type RefGetterType<T = SVGSVGElement | HTMLElement | null> = (node: T) => void

export type ButtonClickHandlerType = <T>(evt: T | React.MouseEvent<HTMLButtonElement>) => void

export interface PropsWithClassName {
  className?: string;
}

export interface PropsWithRefGetter {
  formRef?: <T>(node: T) => void;
  headerRef?: <T>(node: T) => void;
}

export interface PropsFormElement<ValueType, HandlerArgumentsType> {
  value: ValueType,
  onChange: (args: HandlerArgumentsType) => void;
  name: string;
}

export interface RestPropsType {
  [key: string]: string | number | Date | null | ElementType | ReactNode;
}