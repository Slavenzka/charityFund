import { PropsWithClassName } from 'specs/index.spec'

export interface ModalOptionsType extends PropsWithClassName {
  isCloseBtnRequired?: boolean;
  isClickOutsideHandled?: boolean;
  callbackOnClose?: <Arguments>(...args: Arguments[]) => void;
  isContentOnly?: boolean;
}