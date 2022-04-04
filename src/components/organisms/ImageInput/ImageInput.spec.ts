import { PropsFormElement, PropsWithClassName } from 'specs/index.spec'
import { ElementType } from 'react'

export type ImageInputValueItem = {
  content: string;
  name?: string;
}

export interface CodeFilesType {
  (files: File[]): Promise<ImageInputValueItem[]>
}

export interface ImageInputProps extends PropsWithClassName, PropsFormElement<ImageInputValueItem[], ImageInputValueItem[]> {
  accept?: string;
  error?: string;
  ImagePreview?: ElementType;
  isMultiple?: true;
}