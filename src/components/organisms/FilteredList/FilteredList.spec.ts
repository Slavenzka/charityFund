import { PropsFormElement, PropsWithClassName, RestPropsType } from 'specs/index.spec'
import { ElementType } from 'react'
import {
  SelectCustomOptionType
} from 'components/molecules/SelectCustom/SelectCustom.spec'
import { ActionMeta, SingleValue } from 'react-select'

export interface FilteredListProps<ValueType = string> extends PropsWithClassName, RestPropsType {
  /*
  * Optional component to replace default filter value input
  */
  CustomInput?: ElementType,
  /*
  * Optional component to replace default option
  */
  CustomOption?: ElementType,
  /*
  * Complete list of available options
  */
  options: SelectCustomOptionType<ValueType>[],
}