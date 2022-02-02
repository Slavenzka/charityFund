import { Fragment, memo } from 'react'
import css from './TableExamples.module.scss'
import Container from 'components/templates/Container/Container'
import Heading, { HeadingTypes } from 'components/atoms/Heading/Heading'
import Table from 'components/molecules/Table/Table'
import { tableData } from 'Pages/TableExamples/_assets/tableData'
import { LoadingStatuses } from 'utils/const'
import TableCheckbox from 'components/atoms/TableCheckbox/TableCheckbox'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import DummyController from 'components/organisms/DummyController/DummyController'
import Filter from 'components/organisms/Filter/Filter'
import { filterConfig } from 'Pages/TableExamples/_assets/filter'
import classnames from 'classnames'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import { getFormattedDate } from 'utils'
import Input, { InputVariants } from 'components/atoms/Input/Input'

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
      {
        label: `Дата рождения`,
        value: `createdAt`,
        adapter: function (rowData) {
          return getFormattedDate(rowData[this.value])
        }
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
          {({
            filteredData,
            singleValueFilter,
            updateSingleValueFilter,
            dateRangeFilter,
            updateDateRangeFilter,
            multiValueFilter,
            updateMultiValueFilter,
            resetFilter
          }) => (
            <>
              {Object.entries(singleValueFilter).map(([field, queries]) => queries.map(({query, label, value}) => (
                <button
                  onClick={() => updateSingleValueFilter({
                    value: query,
                    field
                  })}
                  className={classnames({
                    [css.buttonActive]: Boolean(value)
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
              <div>
                <DateRangePicker
                  value={dateRangeFilter}
                  onChange={updateDateRangeFilter}
                  label="Filter date range"
                />
              </div>
              <div>
                {multiValueFilter && Object.entries(multiValueFilter).map(([field, {value, label, query}]) => (
                  <Fragment key={field}>
                    <Heading type={HeadingTypes.H3}>
                      { label }
                    </Heading>
                    {query.map(item => (
                      <Input
                        checked={Array.isArray(value) && value.length > 0 && value.includes(item)}
                        onChange={() => updateMultiValueFilter({
                          field,
                          addedValueItem: item
                        })}
                        label={item}
                        variant={InputVariants.CHECKBOX_DEFAULT}
                        key={item}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>
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