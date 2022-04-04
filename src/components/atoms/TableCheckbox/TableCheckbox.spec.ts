import { TableRowItemDataType } from 'components/molecules/Table/Table.spec'

interface TableCheckboxUsableProps<RowDataType = TableRowItemDataType> {
  // Property to be used as a unique identifier of the row
  property: keyof RowDataType;
  // Flag to turn checkbox into global column checkbox status manager
  isToggleAll: boolean;
  // Row data item from the data array
  rowData: RowDataType;
}

export interface TableCheckboxProps extends Partial<TableCheckboxUsableProps> {
  // Length of the array of data used for table rendering
  dataLength: number;
  // Array of id's if rows that are currently selected via TableSelectionController
  tableSelection: (string | number)[];
  // Checkbox click handler provided by TableSelectionController
  handleClick: (args: Partial<TableCheckboxUsableProps>) => void;
}