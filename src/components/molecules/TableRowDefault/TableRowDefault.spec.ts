import { ElementType } from 'react'
import { TableColumnItemType, TableRowItemDataType } from 'components/molecules/Table/Table.spec'
import { ButtonClickHandlerType } from 'specs/index.spec'

export interface TableRowDefaultProps {
  /*
  * External class name for each cell
  */
  cellClassName?: string;
  /*
  * Provides control over cell tag to render table with div cells or standard td cells
  */
  CellTag?: ElementType;
  /*
  * Config of every row
  */
  columns: Partial<TableColumnItemType>[];
  /*
  * Row click handler is applied to row wrapper and triggers application of special clickable row styles
  */
  onClick?: ButtonClickHandlerType;
  /*
  * External class name for row wrapper
  */
  rowClassName?: string;
  /*
  * Data for current row
  */
  rowData: TableRowItemDataType;
  /*
  * Default style for the row depends upon the number of columns to form basic CSS grid
  */
  rowDefaultStyle?: {
    gridTemplateColumns?: string;
    display?: string;
  };
  /*
  * Provides control over row tag to render table with div rows or standard tr cells
  */
  RowTag?: ElementType;
}