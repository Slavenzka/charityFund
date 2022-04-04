import { PropsWithClassName } from 'specs/index.spec'
import { ElementType, PropsWithChildren } from 'react'

export interface TemplateProps extends PropsWithChildren<PropsWithClassName> {
  TagName?: ElementType;
}