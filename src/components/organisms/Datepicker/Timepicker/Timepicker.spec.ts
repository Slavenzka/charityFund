import { PropsWithClassName } from 'specs/index.spec'
import {
  SelectCustomClickHandlerType,
  SelectCustomOptionType
} from 'components/molecules/SelectCustom/SelectCustom.spec'
import { ReactNode } from 'react'

export interface TimepickerProps extends PropsWithClassName {
  // List of standard react-select type options
  options: SelectCustomOptionType<number>[];
  // Actual value from state manager
  value: SelectCustomOptionType<number>;
  // Select change handler
  onChange: SelectCustomClickHandlerType<number>;
  // Optional label to render
  label?: ReactNode;

}