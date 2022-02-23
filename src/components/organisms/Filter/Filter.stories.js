import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Filter from 'components/organisms/Filter/Filter'
import Table from 'components/molecules/Table/Table'
import css from 'Pages/TableExamples/TableExamples.module.scss'
import { LoadingStatuses } from 'utils/const'
import { nanoid } from 'nanoid'
import classnames from 'classnames'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import { getFormattedDate } from 'utils'
import { Fragment } from 'react'
import Heading, { HeadingTypes } from 'components/atoms/Heading/Heading'
import Input, { InputVariants } from 'components/atoms/Input/Input'
import Datepicker from 'components/organisms/Datepicker/Datepicker'

const tableData = [
  {
    id: nanoid(7),
    name: `John Doe`,
    email: `john@doe.com`,
    phone: `11111111111`,
    status: `OK`,
    gender: `Male`,
    createdAt: Date.now()
  },
  {
    id: nanoid(7),
    name: `Jane Doe`,
    email: `jane@doe.com`,
    phone: `22222222222222`,
    status: `FAIL`,
    gender: `Female`,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
  },
  {
    id: nanoid(7),
    name: `Billy Bob`,
    email: `billy@bob.com`,
    phone: `333333333`,
    status: `OK`,
    gender: `Male`,
    createdAt: Date.now() + 2 * 1000 * 60 * 60 * 24 * 30
  },
]

const tableConfig = {
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
      label: `Состояние`,
      value: `status`
    },
    {
      label: `Пол`,
      value: `gender`
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

// const singleValueFilterStory = {
//   singleValueFilterConfig: {
//     status: [
//       {
//         label: `Status OK`,
//         query: [`OK`],
//       },
//       {
//         label: `Status FAILED`,
//         query: [`FAIL`],
//       },
//     ],
//     gender: [
//       {
//         label: `Мужчины`,
//         query: [`Male`],
//       },
//       {
//         label: `Женщины`,
//         query: [`Female`],
//       },
//     ]
//   },
// }

const list = [
  {
    heading: `Table example w/o filtering`,
    component: (
      <Table
        className={css.table}
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
              label: `Состояние`,
              value: `status`
            },
            {
              label: `Пол`,
              value: `gender`
            },
            {
              label: `Дата рождения`,
              value: `createdAt`,
              adapter: function (rowData) {
                return getFormattedDate(rowData[this.value])
              }
            },
          ]
        }}
        data={[
          {
            id: nanoid(7),
            name: `John Doe`,
            email: `john@doe.com`,
            phone: `11111111111`,
            status: `OK`,
            gender: `Male`,
            createdAt: Date.now()
          },
          {
            id: nanoid(7),
            name: `Jane Doe`,
            email: `jane@doe.com`,
            phone: `22222222222222`,
            status: `FAIL`,
            gender: `Female`,
            createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
          },
          {
            id: nanoid(7),
            name: `Billy Bob`,
            email: `billy@bob.com`,
            phone: `333333333`,
            status: `OK`,
            gender: `Male`,
            createdAt: Date.now() + 2 * 1000 * 60 * 60 * 24 * 30
          },
        ]}
        loadingStatus={LoadingStatuses.SUCCESS}
      />
    ),
    code: (
`
<Table
  className={css.table}
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
        label: \`Состояние\`,
        value: \`status\`
      },
      {
        label: \`Пол\`,
        value: \`gender\`
      },
      {
        label: \`Дата рождения\`,
        value: \`createdAt\`,
        adapter: function (rowData) {
          return getFormattedDate(rowData[this.value])
        }
      }
    ]
  }}
  data={[
    {
      id: nanoid(7),
      name: \`John Doe\`,
      email: \`john@doe.com\`,
      phone: \`11111111111\`,
      status: \`OK\`,
      gender: \`Male\`,
      createdAt: Date.now()
    },
    {
      id: nanoid(7),
      name: \`Jane Doe\`,
      email: \`jane@doe.com\`,
      phone: \`22222222222222\`,
      status: \`FAIL\`,
      gender: \`Female\`,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
    },
    {
      id: nanoid(7),
      name: \`Billy Bob\`,
      email: \`billy@bob.com\`,
      phone: \`333333333\`,
      status: \`OK\`,
      gender: \`Male\`,
      createdAt: Date.now() + 2 * 1000 * 60 * 60 * 24 * 30
    }
  ]}
  loadingStatus={LoadingStatuses.SUCCESS}
/>
`
    )
  },
  {
    heading: `Table example w/ single value filters`,
    component: (
      <Filter
        data={tableData}
        config={{
          singleValueFilterConfig: {
            status: [
              {
                label: `Status OK`,
                query: [`OK`],
              },
              {
                label: `Status FAILED`,
                query: [`FAIL`],
              },
            ],
            gender: [
              {
                label: `Мужчины`,
                query: [`Male`],
              },
              {
                label: `Женщины`,
                query: [`Female`],
              },
            ]
          },
        }}
      >
        {
          ({
            filteredData,
            singleValueFilter,
            updateSingleValueFilter,
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
              <Table
                className={css.table}
                tableConfig={tableConfig}
                data={filteredData}
                loadingStatus={LoadingStatuses.SUCCESS}
              />
            </>
        )}
      </Filter>
    ),
    code: (
`
<Filter
  data={tableData}
  config={{
    singleValueFilterConfig: {
      status: [
        {
          label: \`Status OK\`,
          query: [\`OK\`]
        },
        {
          label: \`Status FAILED\`,
          query: [\`FAIL\`]
        }
      ],
      gender: [
        {
          label: \`Мужчины\`,
          query: [\`Male\`]
        },
        {
          label: \`Женщины\`,
          query: [\`Female\`]
        }
      ]
    }
  }}
>
  {
    ({
      filteredData,
      singleValueFilter,
      updateSingleValueFilter,
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
        <Table
          className={css.table}
          tableConfig={tableConfig}
          data={filteredData}
          loadingStatus={LoadingStatuses.SUCCESS}
        />
      </>
  )}
</Filter>
`
    )
  },
  {
    heading: `Table example w/ date range filter`,
    component: (
      <Filter
        data={tableData}
        config={{
          dateRangeFilterConfig: {
            field: `createdAt`,
            from: null,
            to: null
          },
        }}
      >
        {
          ({
            filteredData,
            dateRangeFilter,
            updateDateRangeFilter,
            resetFilter
          }) => (
            <>
              <div>
                <DateRangePicker
                  value={dateRangeFilter}
                  onChange={updateDateRangeFilter}
                  label="Filter date range"
                />
              </div>
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
    ),
    code: (
`
<Filter
  data={tableData}
  config={{
    dateRangeFilterConfig: {
      field: \`createdAt\`,
      from: null,
      to: null
    }
  }}
>
  {
    ({
      filteredData,
      dateRangeFilter,
      updateDateRangeFilter,
      resetFilter
    }) => (
      <>
        <div>
          <DateRangePicker
            value={dateRangeFilter}
            onChange={updateDateRangeFilter}
            label="Filter date range"
          />
        </div>
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
`
    )
  },
  {
    heading: `Table example w/ single date filter`,
    component: (
      <Filter
        data={tableData}
        config={{
          dateRangeFilterConfig: {
            field: `createdAt`,
            isSingleDate: true,
            date: new Date(2022, 0, 17)
          },
        }}
      >
        {
          ({
            filteredData,
            dateRangeFilter,
            updateDateRangeFilter,
            resetFilter
          }) => (
            <>
              <div>
                <Datepicker
                  value={dateRangeFilter.date}
                  onChange={updateDateRangeFilter}
                />
              </div>
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
    ),
    code: (
`
<Filter
  data={tableData}
  config={{
    dateRangeFilterConfig: {
      field: \`createdAt\`,
      isSingleDate: true,
      date: null
    }
  }}
>
  {
    ({
      filteredData,
      dateRangeFilter,
      updateDateRangeFilter,
      resetFilter
    }) => (
      <>
        <div>
          <Datepicker
            value={dateRangeFilter.date}
            onChange={updateDateRangeFilter}
          />
        </div>
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
`
    )
  },
  {
    heading: `Table example w/ multi value filter`,
    component: (
      <Filter
        data={tableData}
        config={{
          multiValueFilterConfig: [
            {
              label: `Search by status`,
              field: `status`
            },
            {
              label: `Search by email`,
              field: `email`
            },
          ],
        }}
      >
        {
          ({
            filteredData,
             multiValueFilter,
             updateMultiValueFilter,
            resetFilter
          }) => (
            <>
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
    ),
    code: (
`
<Filter
  data={tableData}
  config={{
    multiValueFilterConfig: [
      {
        label: \`Search by status\`,
        field: \`status\`
      },
      {
        label: \`Search by email\`,
        field: \`email\`
      }
    ]
  }}
>
  {
    ({
      filteredData,
       multiValueFilter,
       updateMultiValueFilter,
      resetFilter
    }) => (
      <>
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
`
    )
  },
]

export const Usage = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Organisms/Filter`,
  component: Filter,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Filter`}
      componentDescription={(
        <>
          The concept of this component is to transform simple config object into filtering logic that can further be used
          according to any user requirements. Tested case is filtering data for tables. There are three filtering variant:
          single value filtering, multi value filtering and date range filtering.
        </>
      )}
      proptypesString={(
`
Filter.propTypes = {
  /*
  * An object that describes current status of field filter
  * @typedef {Object} singleValueFilterItem
  * @property {string} label - label text for the filter trigger button
  * @property {Array<string>} query - array of valid values for the filtered field
  * @property {Array<string>} value - array of selected values to be used for filtering
  */
  
  /*
  * An object, that contains filter status for every required field with field name as keys and config arrays as values
  * @typedef {Object} singleValueFilter
  * @property {Array<singleValueFilterItem>} fieldName - data processed by all filter components
  */
  
  /*
  * @typedef {function} updateSingleValueFilter
  * @param {{field: string, value: Array<string>}} - and object that contains field name to update and actual new values to filter
  */
  
  /*
  * An object, that contains filter status
  * @typedef {Object} dateRangeFilter
  * @property {string} field - name of field of an object inside data array to be used for filtering
  * @property {number} from - timestamp of start point of time interval
  * @property {number} to - timestamp of end point of time interval
  */
  
  /*
  * @typedef {function} updateDateRangeFilter
  * @param {{from: number, to: number}} - updated start and end points for date range filter
  */
  
  /*
  * An object, that contains filter status
  * @typedef {Object} multiValueFilterItem
  * @property {Array<string>} value - array of selected values
  * @property {Array<string>} query - array of all possible values based on received data
  * @property {string} label - text label to name the filtering group
  */
  
  /*
  * An object, that contains filter status
  * @typedef {Object} multiValueFilter
  * @property {multiValueFilterItem} field - an object defining the filtering status for every field
  */
  
  /*
  * @typedef {function} updateMultiValueFilter
  * @param {{addedValueItem: string, field: string}}
  */
  
  /*
  * @typedef {Object} filterChildrenArgs
  * @property {Array} filteredData - data processed by all filter components
  * @property {singleValueFilter} singleValueFilter - actual state of single value filter
  * @property {updateSingleValueFilter} updateSingleValueFilter - function to update single value filter state
  * @property {dateRangeFilter} dateRangeFilter - actual state of date range filter
  * @property {updateDateRangeFilter} updateDateRangeFilter - function to update date range filter state
  * @property {multiValueFilter} multiValueFilter - actual state of multi value filter
  * @property {updateMultiValueFilter} updateMultiValueFilter - function to update multi value filter state
  * @property {function} resetFilter - filter reset function w/o arguments
  */
  /*
  * Render function for child components
  * @function renderFilterChildren
  * @param {filterChildrenArgs} - provides filtered data and filter logic
  */
  children: PropTypes.func,
  /*
  * Filter config object
  */
  config: PropTypes.shape({
    singleValueFilterConfig: PropTypes.shape({
      fieldName: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        query: PropTypes.arrayOf(PropTypes.string)
      }))
    }),
    multiValueFilterConfig: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      field: PropTypes.string
    })),
    dateRangeFilterConfig: PropTypes.shape({
      field: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number
    })
  }),
  /*
  * Array of data to be processed by filter
  */
  data: PropTypes.array
}
`
      )}
    />
  )]
}