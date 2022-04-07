import { SelectCustomOptionType } from "components/molecules/SelectCustom/SelectCustom.spec"
import { MouseEventHandler, ReactNode } from "react"
import { DatepickerValueType } from 'components/organisms/Datepicker/Datepicker.spec'

export interface StoreDataTypes {
  date: number;
  range: {
    from: number;
    to: number;
  };
  selectSync: {
    options: SelectCustomOptionType[];
    value: SelectCustomOptionType;
  };
  textarea: string;
  table: {
    selection: string[];
  };
  isVisible: boolean;
  filteredList: unknown;
}

type ActionCreatorType<T> = (argument: T) => void;

interface RenderFunctionArgTypes {
  store: StoreDataTypes;
  updateDate: (date: DatepickerValueType) => void;
  updateRange: ActionCreatorType<any>;
  updateSelectSync: ActionCreatorType<any>;
  updateTextarea: ActionCreatorType<string>
  toggleTargetVisibility: MouseEventHandler<HTMLButtonElement>;
  updateFilteredListSelection: ActionCreatorType<any>;

}

export interface StoriesStoreProviderProps {
  children: (arg: RenderFunctionArgTypes) => ReactNode
}