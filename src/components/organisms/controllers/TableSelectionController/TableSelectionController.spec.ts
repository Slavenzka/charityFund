import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'
import { ButtonClickHandlerType } from 'specs/index.spec'

export interface TableSelectionControllerProps {
  data: TableRowItemDataType[];
  isResetOnUnmount?: boolean;
  render: ({
    tableSelection,
    handleClick,
    data
  }: {
    tableSelection: string[],
    handleClick: ButtonClickHandlerType,
    data: TableRowItemDataType[]
  }) => JSX.Element;
}