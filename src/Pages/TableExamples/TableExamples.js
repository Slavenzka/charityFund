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
    ]
  }
  
  return (
    <section>
      <Container>
        <Heading style={{margin: `1.5rem 0`}}>
          Examples of application of Table component with various configs
        </Heading>
        <Table
          className={css.table}
          tableConfig={tableConfig}
          data={data}
          loadingStatus={LoadingStatuses.SUCCESS}
        />
      </Container>
    </section>
  )
}

export default memo(TableExamples)