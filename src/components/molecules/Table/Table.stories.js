import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Table, { TableVariants } from 'components/molecules/Table/Table'
import { nanoid } from 'nanoid'
import css from 'stories/styles/modules/Table.module.scss'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import { LoadingStatuses } from 'utils/const'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import TableCheckbox from 'components/organisms/TableCheckbox/TableCheckbox'

const store = configureStore()

const data = [
  {
    id: nanoid(7),
    name: `John Doe`,
    email: `john@doe.com`,
    phone: `11111111111`,
    status: `OK`
  },
  {
    id: nanoid(7),
    name: `Jane Doe`,
    email: `jane@doe.com`,
    phone: `22222222222222`,
    status: `FAIL`
  },
  {
    id: nanoid(7),
    name: `Billy Bob`,
    email: `billy@bob.com`,
    phone: `333333333`,
    status: `OK`
  },
]

const list = [
  {
    heading: `Default state w/o modifications`,
    component: (
      <Table
        data={[
          {
            id: nanoid(7),
            name: `John Doe`,
            email: `john@doe.com`,
            phone: `11111111111`,
            status: `OK`
          },
          {
            id: nanoid(7),
            name: `Jane Doe`,
            email: `jane@doe.com`,
            phone: `22222222222222`,
            status: `FAIL`
          },
          {
            id: nanoid(7),
            name: `Billy Bob`,
            email: `billy@bob.com`,
            phone: `333333333`,
            status: `OK`
          },
        ]}
        tableConfig={{
          columns: [
            {
              label: `ID`,
              value: `id`
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  data={[
    {
      id: nanoid(7),
      name: \`John Doe\`,
      email: \`john@doe.com\`,
      phone: \`11111111111\`,
      status: \`OK\`
    },
    {
      id: nanoid(7),
      name: \`Jane Doe\`,
      email: \`jane@doe.com\`,
      phone: \`22222222222222\`,
      status: \`FAIL\`
    },
    {
      id: nanoid(7),
      name: \`Billy Bob\`,
      email: \`billy@bob.com\`,
      phone: \`333333333\`,
      status: \`OK\`
    }
  ]}
  tableConfig={{
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Default state w/ custom global cell class`,
    component: (
      <Table
        data={data}
        tableConfig={{
          row: {
            cellClassName: css.cellRed
          },
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    row: {
      cellClassName: css.cellRed
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Default state w/ custom individual cell class`,
    component: (
      <Table
        className={css.wrapper}
        data={data}
        tableConfig={{
          columns: [
            {
              label: `ID`,
              value: `id`,
              className: css.cellGreen
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  className={css.wrapper}
  data={data}
  tableConfig={{
    columns: [
      {
        label: \`ID\`,
        value: \`id\`,
        className: css.cellGreen
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Default state w/ custom individual heading class`,
    component: (
      <Table
        data={data}
        tableConfig={{
          columns: [
            {
              label: `ID`,
              value: `id`,
              headingClassName: css.cellRed
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    columns: [
      {
        label: \`ID\`,
        value: \`id\`,
        headingClassName: css.cellRed
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Individual heading class name w/ higher specificity vs global cell className`,
    component: (
      <Table
        className={css.wrapper}
        data={data}
        tableConfig={{
          row: {
            cellClassName: css.cellRed
          },
          columns: [
            {
              label: `ID`,
              value: `id`,
              headingClassName: css.cellGreen
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  className={css.wrapper}
  data={data}
  tableConfig={{
    row: {
      cellClassName: css.cellRed
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`,
        headingClassName: css.cellGreen
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Custom row class name`,
    component: (
      <Table
        data={data}
        tableConfig={{
          row: {
            className: css.row
          },
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    row: {
      className: css.row
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Custom row component`,
    component: (
      <Table
        data={data}
        tableConfig={{
          row: {
            className: css.row,
            CustomRow: props => (
              <>
                <TableRowDefault {...props} />
                <span>This is extension of a TableRowDefault component</span>
              </>
            )
        },
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        CustomRow={props => (
          <>
            <TableRowDefault {...props} />
            <span>This is extension of a TableRowDefault component</span>
          </>
        )}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    row: {
      className: css.row,
      CustomRow: props => (
        <>
          <TableRowDefault {...props} />
          <span>This is extension of a TableRowDefault component</span>
        </>
      )
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
/>
`
    )
  },
  {
    heading: `Data is fetching`,
    component: (
      <Table
        data={data}
        tableConfig={{
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        loadingStatus={LoadingStatuses.IN_PROGRESS}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
  loadingStatus={LoadingStatuses.IN_PROGRESS}
/>
`
    )
  },
  {
    heading: `Data fetch error`,
    component: (
      <Table
        data={data}
        tableConfig={{
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        loadingStatus={LoadingStatuses.ERROR}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
  loadingStatus={LoadingStatuses.ERROR}
/>
`
    )
  },
  {
    heading: `Data fetch custom error`,
    component: (
      <Table
        data={null}
        tableConfig={{
          statusMessages: {
            error: (
              <>
                Error while fetching clients. Please, try again later!
                <button
                  onClick={() => alert(`Fetch again!`)}
                  type="button"
                >
                  Repeat
                </button>
              </>
            )
          },
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        loadingStatus={LoadingStatuses.ERROR}
      />
    ),
    code: (
`
<Table
  data={null}
  tableConfig={{
    statusMessages: {
      error: (
        <>
          Couldn't fetch clients. Please, try again later!
          <button
            onClick={() => alert(\`Fetch again!\`)}
            type="button"
          >
            Repeat
          </button>
        </>
      )
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
  loadingStatus={LoadingStatuses.ERROR}
/>
`
    )
  },
  {
    heading: `Data fetch success, but data is empty`,
    component: (
      <Table
        data={[]}
        tableConfig={{
          statusMessages: {
            empty: (
              <>
                No data is available by your request. Try again later!
                <button
                  onClick={() => alert(`Fetch again!`)}
                  type="button"
                >
                  Repeat
                </button>
              </>
            )
          },
          columns: [
            {
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        loadingStatus={LoadingStatuses.SUCCESS}
      />
    ),
    code: (
`
<Table
  data={[]}
  tableConfig={{
    statusMessages: {
      empty: (
        <>
          No data is available by your request. Try again later!
          <button
            onClick={() => alert(\`Fetch again!\`)}
            type="button"
          >
            Repeat
          </button>
        </>
      )
    },
    columns: [
      {
        label: \`ID\`,
        value: \`id\`
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      }
    ]
  }}
  loadingStatus={LoadingStatuses.SUCCESS}
/>
`
    )
  },
  {
    heading: `Table with row selection`,
    component: (
      <Table
        data={data}
        tableConfig={{
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
                      property="id"
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
              label: `ID`,
              value: `id`,
            },
            {
              label: `Имя`,
              value: `name`
            },
            {
              label: `Почта`,
              value: `email`
            },
            {
              label: `Телефон`,
              value: `phone`
            },
            {
              label: `Статус`,
              value: `status`
            },
          ]
        }}
        loadingStatus={LoadingStatuses.SUCCESS}
      />
    ),
    code: (
`
<Table
  data={data}
  tableConfig={{
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
        checkProperty: \`id\`,
        adapter: function (rowData, {tableSelection, handleClick}) {
          return tableSelection && handleClick
            ? (
              <TableCheckbox
                property="id"
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
        label: \`ID\`,
        value: \`id\`,
      },
      {
        label: \`Имя\`,
        value: \`name\`
      },
      {
        label: \`Почта\`,
        value: \`email\`
      },
      {
        label: \`Телефон\`,
        value: \`phone\`
      },
      {
        label: \`Статус\`,
        value: \`status\`
      },
    ]
  }}
  loadingStatus={LoadingStatuses.SUCCESS}
/>
`
    )
  },
]

export const Default = () => (
  <Provider store={store}>
    <ComponentRenderTemplateStory list={list} />
  </Provider>
)

export default {
  title: `Components/Molecules/Table`,
  component: Table,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Table`}
      componentDescription={(
        <>
          Renders customizable table which main idea is to provide control over content via tableConfig prop that contains
          all
        </>
      )}
      proptypesString={(
`
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
  /*
  * Click handler for row content. Triggers if evt.target.dataset.tableCell is existing to exclude
  * active elements inside cells etc.
  * @function onClick
  * @param {{}} rowData - object with data for current row
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
  /*
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
  /*
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
    }))
  }),
  /*
  * Applies style presets
  */
  variants: PropTypes.oneOf([${Object.values(TableVariants)}])
}
`
      )}
      defaultPropsString={(
`
Table.defaultProps = {
  loadingStatus: LoadingStatuses.SUCCESS,
  variants: TableVariants.DEFAULT
}
`
      )}
    />
  )]
}