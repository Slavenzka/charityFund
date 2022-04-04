import React, { FC, memo } from 'react'
import css from './TableRowDefault.module.scss'
import classnames from 'classnames'
import { TableRowDefaultProps } from 'components/molecules/TableRowDefault/TableRowDefault.spec'
import { TableColumnItemType } from 'components/molecules/Table/Table.spec'

const TableRowDefault: FC<TableRowDefaultProps> = ({
  cellClassName,
  CellTag = `td`,
  columns = [],
  onClick,
  rowClassName,
  rowData,
  rowDefaultStyle,
  RowTag = `tr`,
  ...props
}) => {
  const rowCells = columns.map((column, index) => {
    const {
      adapter,
      value,
      className
    } = column as TableColumnItemType
    
    return (
      <CellTag
        className={classnames(css.cell, cellClassName, className)}
        onClick={onClick
          ? ({target}: React.MouseEvent<HTMLElement>) => {
            const isRowClicked = target instanceof HTMLElement
              ? Boolean(target.dataset?.tableCell)
              : false
          
            if (isRowClicked) {
              onClick(rowData)
            }
          }
          : null
        }
        data-table-cell="true"
        role="cell"
        key={index}
      >
        {adapter
          ? adapter.apply(column, [rowData, props])
          : rowData[value as string]
        }
      </CellTag>
    )
  })
  
  return (
    <RowTag
      className={classnames(css.row, rowClassName, {
        [css.rowClickable]: Boolean(onClick)
      })}
      style={rowDefaultStyle}
      role="row"
    >
      {rowCells}
    </RowTag>
  )
}

export default memo(TableRowDefault)