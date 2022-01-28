import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import TableCheckbox from 'components/organisms/TableCheckbox/TableCheckbox'
import { nanoid } from 'nanoid'
import css from 'stories/styles/modules/TableRowDefault.module.scss'

const data = {
  id: nanoid(7),
  name: `John Doe`,
  email: `john@doe.com`,
  phone: `11111111111`,
  status: `OK`
}

const list = [
  {
    heading: `Row with default styles`,
    component: (
      <table style={{width: `100%`}}>
        <tbody>
          <TableRowDefault
            rowDefaultStyle={{
              display: `grid`,
              gridTemplateColumns: `repeat(6, 1fr)`
            }}
            rowData={{
              id: nanoid(7),
              name: `John Doe`,
              email: `john@doe.com`,
              phone: `11111111111`,
              status: `OK`
            }}
            columns={[
              {
                labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      data={data}
                      isToggleAll
                      property={checkProperty}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : label
                },
                checkProperty: `id`,
                adapter: function (rowData, {tableSelection, handleClick}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      property={this.checkProperty}
                      data={data}
                      rowData={rowData}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : null
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
            ]}
          />
        </tbody>
      </table>
    ),
    code: (
`
<table style={{width: \`100%\`}}>
  <tbody>
    <TableRowDefault
      rowDefaultStyle={{
        display: \`grid\`,
        gridTemplateColumns: \`repeat(6, 1fr)\`
      }}
      rowData={{
        id: nanoid(7),
        name: \`John Doe\`,
        email: \`john@doe.com\`,
        phone: \`11111111111\`,
        status: \`OK\`
      }}
      columns={[
        {
          labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                data={data}
                isToggleAll
                property={checkProperty}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : label
          },
          checkProperty: \`id\`,
          adapter: function (rowData, {tableSelection, handleClick}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                property={this.checkProperty}
                data={data}
                rowData={rowData}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : null
          }
        },
        {
          label: \`#\`,
          value: \`id\`,
          adapter: function (rowData) {
            return <span style={{color: \`brown\`}}>{rowData[this.value]}</span>
          }
        },
        {
          label: \`Имя\`,
          value: \`name\`,
        },
        {
          label: \`Email\`,
          value: \`email\`,
          adapter: function (rowData) {
            return <a href={\`mailto:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Статус\`,
          value: \`status\`,
        },
      ]}
    />
  </tbody>
</table>
`
    )
  },
  {
    heading: `Row with row className`,
    component: (
      <table style={{width: `100%`}}>
        <tbody>
          <TableRowDefault
            rowClassName={css.row}
            rowData={{
              id: nanoid(7),
              name: `John Doe`,
              email: `john@doe.com`,
              phone: `11111111111`,
              status: `OK`
            }}
            columns={[
              {
                labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      data={data}
                      isToggleAll
                      property={checkProperty}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : label
                },
                checkProperty: `id`,
                adapter: function (rowData, {tableSelection, handleClick}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      property={this.checkProperty}
                      data={data}
                      rowData={rowData}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : null
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
            ]}
          />
        </tbody>
      </table>
    ),
    code: (
`
<table style={{width: \`100%\`}}>
  <tbody>
    <TableRowDefault
      rowClassName={css.row}
      rowData={{
        id: nanoid(7),
        name: \`John Doe\`,
        email: \`john@doe.com\`,
        phone: \`11111111111\`,
        status: \`OK\`
      }}
      columns={[
        {
          labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                data={data}
                isToggleAll
                property={checkProperty}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : label
          },
          checkProperty: \`id\`,
          adapter: function (rowData, {tableSelection, handleClick}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                property={this.checkProperty}
                data={data}
                rowData={rowData}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : null
          }
        },
        {
          label: \`#\`,
          value: \`id\`,
          adapter: function (rowData) {
            return <span style={{color: \`brown\`}}>{rowData[this.value]}</span>
          }
        },
        {
          label: \`Имя\`,
          value: \`name\`,
        },
        {
          label: \`Email\`,
          value: \`email\`,
          adapter: function (rowData) {
            return <a href={\`mailto:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Статус\`,
          value: \`status\`,
        },
      ]}
    />
  </tbody>
</table>
`
    )
  },
  {
    heading: `Row with onClick handler`,
    component: (
      <table style={{width: `100%`}}>
        <tbody>
          <TableRowDefault
            onClick={() => alert(`Row is clicked!`)}
            rowDefaultStyle={{
              display: `grid`,
              gridTemplateColumns: `repeat(6, 1fr)`
            }}
            rowData={{
              id: nanoid(7),
              name: `John Doe`,
              email: `john@doe.com`,
              phone: `11111111111`,
              status: `OK`
            }}
            columns={[
              {
                labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      data={data}
                      isToggleAll
                      property={checkProperty}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : label
                },
                checkProperty: `id`,
                adapter: function (rowData, {tableSelection, handleClick}) {
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      property={this.checkProperty}
                      data={data}
                      rowData={rowData}
                      tableSelection={tableSelection}
                      handleClick={handleClick}
                    />
                  ) : null
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
            ]}
          />
        </tbody>
      </table>
    ),
    code: (
`
<table style={{width: \`100%\`}}>
  <tbody>
    <TableRowDefault
      rowClassName={css.row}
      rowData={{
        id: nanoid(7),
        name: \`John Doe\`,
        email: \`john@doe.com\`,
        phone: \`11111111111\`,
        status: \`OK\`
      }}
      columns={[
        {
          labelAdapter: function ({checkProperty, tableSelection, handleClick, label}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                data={data}
                isToggleAll
                property={checkProperty}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : label
          },
          checkProperty: \`id\`,
          adapter: function (rowData, {tableSelection, handleClick}) {
            return tableSelection && handleClick ? (
              <TableCheckbox
                property={this.checkProperty}
                data={data}
                rowData={rowData}
                tableSelection={tableSelection}
                handleClick={handleClick}
              />
            ) : null
          }
        },
        {
          label: \`#\`,
          value: \`id\`,
          adapter: function (rowData) {
            return <span style={{color: \`brown\`}}>{rowData[this.value]}</span>
          }
        },
        {
          label: \`Имя\`,
          value: \`name\`,
        },
        {
          label: \`Email\`,
          value: \`email\`,
          adapter: function (rowData) {
            return <a href={\`mailto:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value]}\`}>{rowData[this.value]}</a>
          }
        },
        {
          label: \`Статус\`,
          value: \`status\`,
        },
      ]}
    />
  </tbody>
</table>
`
    )
  },
]

export const Default = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Molecules/TableRowDefault`,
  component: TableRowDefault,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`TableRowDefault`}
      componentDescription={(
        <>
          Renders table row typically as a part of Table component.
        </>
      )}
      proptypesString={(
`
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
`
      )}
      defaultPropsString={(
`
TableRowDefault.defaultProps = {
  CellTag: \`td\`,
  RowTag: \`tr\`
}
`
      )}
    />
  )]
}