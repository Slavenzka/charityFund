import { memo } from 'react'
import css from './TableRowDefault.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function TableRowDefault ({
  cellClassName,
  CellTag = `td`,
  columns,
  onClick,
  rowClassName,
  rowData,
  rowDefaultStyle,
  RowTag = `tr`,
  ...props
}) {
  const rowCells = columns.map((column, index) => {
    const {
      adapter,
      value,
      className
    } = column
    
    return (
      <CellTag
        className={classnames(css.cell, cellClassName, className)}
        onClick={onClick
          ? ({target}) => {
            const isRowClicked = Boolean(target.dataset?.tableCell)
          
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
          : rowData[value]
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

TableRowDefault.propTypes = {
  /*
  * External class name for each cell
  */
  cellClassName: PropTypes.string,
  /*
  * Provides control over cell tag to render table with div cells or standard td cells
  */
  CellTag: PropTypes.string,
  /*
  * Config of every row
  */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /*
    * Receives rowData and returns some custom entity to be rendered inside table cell
    */
    adapter: PropTypes.func,
    /*
    * Defines which row property would be used as an id for row selection management
    */
    checkProperty: PropTypes.string,
    /*
    * Label content of table heading relative to every column
    */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /*
    * Defines which row data value would be used for each column
    */
    value: PropTypes.string,
  })).isRequired,
  /*
  * Row click handler is applied to row wrapper div and triggers application of special clickable row styles
  */
  onClick: PropTypes.func,
  /*
  * External class name for row wrapper
  */
  rowClassName: PropTypes.string,
  /*
  * Data for current row
  */
  rowData: PropTypes.shape({}).isRequired,
  /*
  * Default style for the row depends upon the number of columns to form basic CSS grid
  */
  rowDefaultStyle: PropTypes.shape({
    gridTemplateColumns: PropTypes.string
  }),
  /*
  * Provides control over row tag to render table with div rows or standard tr cells
  */
  RowTag: PropTypes.string,
}

TableRowDefault.defaultProps = {
  CellTag: `td`,
  RowTag: `tr`
}

export default memo(TableRowDefault)