import { memo } from 'react'
import css from './TableExamples.module.scss'
import Container from 'components/templates/Container/Container'
import Heading from 'components/atoms/Heading/Heading'
import Table from 'components/molecules/Table/Table'
import { tableData } from 'Pages/TableExamples/_assets/tableData'
import { LoadingStatuses } from 'utils/const'
import TableCheckbox from 'components/atoms/TableCheckbox/TableCheckbox'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import DummyController from 'components/organisms/DummyController/DummyController'
import Filter from 'components/organisms/Filter/Filter'
import { filterConfig } from 'Pages/TableExamples/_assets/filter'
import classnames from 'classnames'

function TableExamples () {
  const data = tableData
  
  const tableConfig = {
    CustomController: DummyController,
    row: {
      onClick (rowData) {
        alert(`You've clicked a row with id#${rowData.id}`)
      },
      className: null,
      cellClassName: css.cell,
      CustomRow: props => (
        <>
          <TableRowDefault {...props} />
          <span>This is extension of a TableRowDefault component</span>
        </>
      )
  
    },
    columns: [
      {
        labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
          return tableSelection && handleClick
            ? (
              <TableCheckbox
                data={data}
                isToggleAll
                property={checkProperty}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            )
            : label
        },
        checkProperty: `id`,
        adapter: function (rowData, {tableSelection, handleClick}) {
          return tableSelection && handleClick
            ? (
              <TableCheckbox
                property={this.checkProperty}
                data={data}
                rowData={rowData}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            )
            : null
        }
      },
      {
        label: `#`,
        value: `id`,
        adapter: function (rowData) {
          return <span style={{color: `brown`}}>{rowData[this.value]}</span>
        }
      },
      {
        label: `Имя`,
        value: `name`,
      },
      {
        label: `Email`,
        value: `email`,
        adapter: function (rowData) {
          return <a href={`mailto:${rowData[this.value]}`}>{rowData[this.value]}</a>
        }
      },
      {
        label: `Телефон`,
        value: `phone`,
        adapter: function (rowData) {
          return <a href={`tel:${rowData[this.value]}`}>{rowData[this.value]}</a>
        }
      },
      {
        label: `Статус`,
        value: `status`,
      },
      {
        label: `Пол`,
        value: `gender`,
      },
    ]
  }
  
  return (
    <section>
      <Container>
        <Heading style={{margin: `1.5rem 0`}}>
          Examples of application of Table component with various configs
        </Heading>
        <Filter
          data={data}
          config={filterConfig}
        >
          {({singleValueFilter, handleFilterSingleValue, filteredData, resetFilter}) => (
            <>
              {Object.entries(singleValueFilter).map(([field, queries]) => queries.map(({query, label, isApplied}) => (
                <button
                  onClick={() => handleFilterSingleValue({
                    value: query,
                    field
                  })}
                  className={classnames({
                    [css.buttonActive]: isApplied
                  })}
                  type="button"
                  key={query}
                >
                  {label}
                </button>
              )))}
              <button
                onClick={resetFilter}
                type="button"
              >
                Reset filter
              </button>
              <Table
                className={css.table}
                tableConfig={tableConfig}
                data={filteredData}
                loadingStatus={LoadingStatuses.SUCCESS}
              />
            </>
          )}
        </Filter>
      </Container>
    </section>
  )
}

export default memo(TableExamples)