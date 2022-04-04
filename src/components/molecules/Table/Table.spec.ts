import { ButtonClickHandlerType, PropsWithClassName } from 'specs/index.spec'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { TableRowDefaultProps } from 'components/molecules/TableRowDefault/TableRowDefault.spec'

export type TableCellType = string | number | boolean | Date | ReactNode | null;

export interface LabelAdapterArgs {
  /*
  * Custom label content
  */
  label: string | JSX.Element;
  /*
  * Contains the key of the data property from row data object to be used as unique identification
  * for the row
  */
  checkProperty?: string;
  /*
  * Actual table selection array of row ids
  */
  tableSelection?: string[];
  /*
  * Custom click handler for heading
  */
  handleClick?: ButtonClickHandlerType;
}

export type TableRowItemDataType = {
  [key: string]: TableCellType;
}

export interface CellAdapterProps {
  /*
  * Click handler for custom entity
  */
  handleClick?: ButtonClickHandlerType;
  /*
  * Actual table selection array of row ids
  */
  tableSelection?: string[];
}

export interface TableColumnItemType {
  /*
  * Class name for content cells in specific column
  */
  className?: string;
  /*
  * Contains the key of the data property from row data object to be used as unique identification
  * for the row
  */
  checkProperty?: string;
  /*
  * Heading for the column
  */
  label?: string;
  /*
  * Contains the key of the data property from row data object to be used for cell generation
  */
  value?: string;
  /*
  * Class name for heading cells specifically
  */
  headingClassName?: string;
  /*
  * Replaces the content of table cell heading with custom entity
  */
  labelAdapter?: ({
    label,
    checkProperty,
    tableSelection,
    handleClick
  }: LabelAdapterArgs) => JSX.Element | string;
  /*
  * Replaces the content of table cell with custom entity
  */
  adapter?: (
    rowData: TableRowItemDataType,
    {
      handleClick,
      tableSelection
    }: PropsWithChildren<CellAdapterProps>
  ) => JSX.Element | null;
}

export enum TableVariants {
  DEFAULT = `DEFAULT`,
}

export interface TableConfigType {
  /*
  * Configuration of rows
  */
  row?: {
    /*
    * Row class name for every row in the table including headings. Default row styling
    * (display: grid, gridTemplateColumns: repeat(columnsQty, 1fr) would be applied
    * if no className provided
    */
    className?: string;
    /*
    * Additional class name for every cell in the table for uniform styling of paddings, borders etc.
    */
    cellClassName?: string;
    /**
    * Click handler for row content. Triggers if evt.target.dataset.tableCell is existing to exclude
    * active elements inside cells etc.
    */
    onClick?: ButtonClickHandlerType;
    /*
    * React component that will be rendered instead of TableRowDefault with all TableRowDefault props. Table will be rendered
    * with divs instead of valid HTML table structure if this prop is provided.
    */
    CustomRow?: (props: TableRowDefaultProps) => JSX.Element;
  };
  /*
  * Customization of table status messages
  */
  statusMessages?: {
    error?: ReactNode;
    empty?: ReactNode;
  };
  /*
  * Configuration of table headings, order and scope of data to be rendered in table and description
  * of custom elements and their logic to be rendered inside cell instead of simple strings with values
  */
  columns: TableColumnItemType[];
  /*
  * Optional layer of custom logic that wraps the whole component through withTableControllers HOC.
  * Provides props inside table cells
  */
  CustomController?: FC;
}

export interface TableProps extends PropsWithClassName {
  /*
  * Main source of table customization and logic provision
  */
  tableConfig: TableConfigType;
  /*
  * Enum value that represents the state of data fetch to be used statusContent generation inside component
  */
  loadingStatus?: string;
  /*
  * Applies style presets
  */
  variant?: string;
  /*
  * An array of objects providing data for each row
  */
  data: TableRowItemDataType[];
}