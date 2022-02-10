import { Fragment, memo, useCallback, useMemo } from 'react'
import css from './Table.module.scss'
import classnames from 'classnames'
import { LoadingStatuses } from 'utils/const'
import IconSpinner from 'assets/icons/IconSpinner'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import withTableControllers from 'hoc/withTableControllers'
import PropTypes from 'prop-types'

export const TableVariants = {
  DEFAULT: `DEFAULT`
}

function Table ({
  className,
  data,
  loadingStatus = LoadingStatuses.SUCCESS,
  tableConfig,
  variant = TableVariants.DEFAULT,
  ...props
}) {
  const {
    row: {
      className: rowExternalClass,
      cellClassName,
      onClick,
      CustomRow
    } = {},
    columns,
    statusMessages = {}
  } = tableConfig
  
  const isLoading = loadingStatus === LoadingStatuses.IN_PROGRESS
  const isLoaded = loadingStatus === LoadingStatuses.SUCCESS
  const isError = loadingStatus === LoadingStatuses.ERROR
  const isStandardTable = !CustomRow
  
  const TableTag = isStandardTable
    ? `table`
    : `div`
  
  const RowTag = isStandardTable
    ? `tr`
    : `div`
  
  const HeadingCellTag = isStandardTable
    ? `th`
    : `div`
  
  const CellTag = isStandardTable
    ? `td`
    : `div`
  
  const TableContentWrapper = isStandardTable
    ? `tbody`
    : Fragment
  
  const rowClassName = rowExternalClass ?? css.row
  const rowDefaultStyle = useMemo(() => {
    return rowExternalClass
      ? {}
      : {
        display: `grid`,
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`
      }
  }, [rowExternalClass, columns])
  
  const renderHeadings = useCallback(props => {
    const list = columns.map(({label, labelAdapter, headingClassName, ...restItem}, index) => (
      <HeadingCellTag
        className={classnames(css.heading, cellClassName, headingClassName)}
        key={index}
      >
        {labelAdapter
          ? labelAdapter({
            label,
            ...restItem,
            ...props
          })
          : label
        }
      </HeadingCellTag>
    ))
    
    return (
      <RowTag
        className={rowClassName}
        style={rowDefaultStyle}
      >
        { list }
      </RowTag>
    )
  }, [
    columns,
    rowClassName,
    cellClassName,
    rowDefaultStyle
  ])
  
  const renderRows = useCallback(props => {
    return data.map((rowData, index) => {
      const RowComponent = CustomRow ?? TableRowDefault
      
      return (
        <RowComponent
          rowData={rowData}
          columns={columns}
          onClick={onClick}
          rowDefaultStyle={rowDefaultStyle}
          cellClassName={cellClassName}
          rowClassName={rowClassName}
          RowTag={RowTag}
          CellTag={CellTag}
          key={index}
          {...props}
        />
      )
    })
  }, [
    cellClassName,
    CellTag,
    columns,
    CustomRow,
    data,
    onClick,
    rowClassName,
    rowDefaultStyle,
    RowTag
  ])
  
  const statusContent = useMemo(() => {
    const {
      empty,
      error
    } = statusMessages
    
    if (isLoaded && Array.isArray(data) && data.length > 0) return null
    
    if (isError) return error ?? `An error has occurred!`
    
    if (isLoaded && (!data || data.length === 0)) return empty ?? `No data was received from the server. Try again later.`

    if (isLoading) {
      return <IconSpinner className={css.spinner} />
    }
  }, [isLoading, isLoaded, isError, data, statusMessages])
  
  return (
    <>
      <TableTag
        className={classnames(className, {
          [css.wrapper]: variant === TableVariants.DEFAULT
        })}
        role="table"
      >
        <TableContentWrapper>
          <>
            {renderHeadings({
              ...props
            })}
            {!statusContent && renderRows(props)}
          </>
        </TableContentWrapper>
      </TableTag>
      {statusContent &&
        <div className={css.rowStatus}>
          { statusContent }
        </div>
      }
    </>
  )
}

Table.propTypes = {
  /*
  * External class name
  */
  className: PropTypes.string,
  /*
  * An array of objects providing data for each row
  */
  data: PropTypes.arrayOf(PropTypes.object),
  /*
  * Enum value that represents the state of data fetch to be used statusContent generation inside component
  */
  loadingStatus: PropTypes.oneOf(Object.values(LoadingStatuses)),
  /*
  * Main source of table customization and logic provision
  */
  tableConfig: PropTypes.shape({
    /*
    * Optional layer of custom logic that wraps the whole component through withTableControllers HOC.
    * Provides props inside table cells
    */
    CustomController: PropTypes.func,
    /*
    * Configuration of rows
    */
    row: PropTypes.shape({
      /**
      * Click handler for row content. Triggers if evt.target.dataset.tableCell is existing to exclude
      * active elements inside cells etc.
      * @function onClick
      * @param {{}} rowData - object with data for current row
      *
      */
      onClick: PropTypes.func,
      /*
      * Row class name for every row in the table including headings. Default row styling
      * (display: grid, gridTemplateColumns: repeat(columnsQty, 1fr) would be applied
      * if no className provided
      */
      className: PropTypes.string,
      /*
      * Additional class name for every cell in the table for uniform styling of paddings, borders etc.
      */
      cellClassName: PropTypes.string,
      /*
      * React component that will be rendered instead of TableRowDefault with all available props. Table will be rendered
      * with divs instead of valid HTML table structure if this prop is provided.
      */
      CustomRow: PropTypes.elementType,
      /*
      * Customization of table status messages
      */
      statusMessages: PropTypes.shape({
        empty: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }),
    }),
    /*
    * Configuration of table headings, order and scope of data to be rendered in table and description
    * of custom elements and their logic to be rendered inside cell instead of simple strings with values
    */
    columns: PropTypes.arrayOf(PropTypes.shape({
        /**
        * Replaces the content of table cell with custom entity
        * @function adapter
        * @param {{}} rowData - object with data for current row
        * @param {{tableSelection: Function, handleClick: Function}} selectionControllerProps - properties received from withTableControllers HOC
        * @returns {Component|node|string|number|null} - some custom component or value
        */
      adapter: PropTypes.func,
      /*
      * Contains the key of the data property from row data object to be used as unique identification
      * for the row
      */
      checkProperty: PropTypes.string,
      /*
      * Heading for the column
      */
      label: PropTypes.string,
      /**
       * Replaces the content of table cell heading with custom entity
       * @function labelAdapter
       * @param {{tableSelection: Function, handleClick: Function, checkProperty: string, label: string}} objectArgument - properties received from withTableControllers HOC
       * @returns {Component|node|string|number|null} - some custom component or value
       */
      labelAdapter: PropTypes.func,
      /*
      * Contains the key of the data property from row data object to be used for cell generation
      */
      value: PropTypes.string,
    })).isRequired
  }),
  /*
  * Applies style presets
  */
  variants: PropTypes.oneOf(Object.values(TableVariants))
}

Table.defaultProps = {
  loadingStatus: LoadingStatuses.SUCCESS,
  variants: TableVariants.DEFAULT
}

export default memo(withTableControllers(Table))