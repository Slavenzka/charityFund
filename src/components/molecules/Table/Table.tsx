import { Fragment, memo, useCallback, useMemo } from 'react'
import css from './Table.module.scss'
import classnames from 'classnames'
import IconSpinner from 'assets/icons/IconSpinner'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import withTableControllers from 'hoc/withTableControllers'
import { TableProps, TableVariants } from 'components/molecules/Table/Table.spec'
import { LoadingStatuses } from 'specs/enum.spec'

function Table ({
  className,
  data,
  loadingStatus = LoadingStatuses.SUCCESS,
  tableConfig,
  variant = TableVariants.DEFAULT,
  ...props
}: TableProps) {
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
    rowDefaultStyle,
    RowTag,
    HeadingCellTag
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

export default memo(withTableControllers(Table))