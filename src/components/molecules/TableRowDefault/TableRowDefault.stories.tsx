import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import TableRowDefault from 'components/molecules/TableRowDefault/TableRowDefault'
import TableCheckbox from 'components/atoms/TableCheckbox/TableCheckbox'
import { nanoid } from 'nanoid'
import css from 'stories/styles/modules/TableRowDefault.module.scss'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { FC } from 'react'
import StoriesStoreProvider from 'stories/providers/StoriesStoreProvider'

const data: {
  [key: string]: string | number;
} = {
  id: nanoid(7),
  name: `John Doe`,
  email: `john@doe.com`,
  phone: `11111111111`,
  status: `OK`
}

const list: ListItemProps[] = [
  {
    heading: `Row with default styles`,
    component: (
      <StoriesStoreProvider>
        {({store}) => (
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
                    return tableSelection && handleClick
                      ? (
                        <TableCheckbox
                          dataLength={1}
                          isToggleAll
                          property={checkProperty}
                          tableSelection={tableSelection}
                          handleClick={handleClick}
                        />
                      )
                      : label
                  },
                  checkProperty: `id`,
                  adapter: function (rowData, {tableSelection = store.table.selection, handleClick = () => {console.log(`Update value`)}}) {
                    console.log(tableSelection)
                    return tableSelection && handleClick
                      ? (
                        <TableCheckbox
                          property={this.checkProperty}
                          dataLength={1}
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
                    return <span style={{color: `brown`}}>{rowData[this.value as string]}</span>
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
                    return <a href={`mailto:${rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
                  }
                },
                {
                  label: `Телефон`,
                  value: `phone`,
                  adapter: function (rowData) {
                    return <a href={`tel:${rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
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
        )}
      </StoriesStoreProvider>
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
            return tableSelection && handleClick
              ? (
                <TableCheckbox
                  dataLength={1}
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
                  property={this.checkProperty}
                  dataLength={1}
                  rowData={rowData}
                  tableSelection={tableSelection}
                  handleClick={handleClick}
                />
              )
              : null
          }
        },
        {
          label: \`#\`,
          value: \`id\`,
          adapter: function (rowData) {
            return <span style={{color: \`brown\`}}>{rowData[this.value as string]}</span>
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
            return <a href={\`mailto:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
          }
        },
        {
          label: \`Статус\`,
          value: \`status\`
        }
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
                  return tableSelection && handleClick
                    ? (
                      <TableCheckbox
                        dataLength={1}
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
                  return tableSelection && handleClick ? (
                    <TableCheckbox
                      property={this.checkProperty}
                      dataLength={1}
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
                  return <span style={{color: `brown`}}>{rowData[this.value as string]}</span>
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
                  return <a href={`mailto:{rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
                }
              },
              {
                label: `Телефон`,
                value: `phone`,
                adapter: function (rowData) {
                  return <a href={`tel:{rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
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
            return tableSelection && handleClick
              ? (
                <TableCheckbox
                  dataLength={1}
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
            return tableSelection && handleClick ? (
              <TableCheckbox
                property={this.checkProperty}
                dataLength={1}
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
            return <span style={{color: \`brown\`}}>{rowData[this.value as string]}</span>
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
            return <a href={\`mailto:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
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
                      dataLength={1}
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
                      dataLength={1}
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
                  return <span style={{color: `brown`}}>{rowData[this.value as string]}</span>
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
                  return <a href={`mailto:{rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
                }
              },
              {
                label: `Телефон`,
                value: `phone`,
                adapter: function (rowData) {
                  return <a href={`tel:{rowData[this.value as string]}`}>{rowData[this.value as string]}</a>
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
      onClick={() => alert(\`Row is clicked!\`)}
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
                dataLength={1}
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
                dataLength={1}
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
            return <span style={{color: \`brown\`}}>{rowData[this.value as string]}</span>
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
            return <a href={\`mailto:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
          }
        },
        {
          label: \`Телефон\`,
          value: \`phone\`,
          adapter: function (rowData) {
            return <a href={\`tel:{rowData[this.value as string]}\`}>{rowData[this.value as string]}</a>
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

export const Default: FC = () => <ComponentRenderTemplateStory list={list} />

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
export interface TableRowDefaultProps {
  /*
  * External class name for each cell
  */
  cellClassName?: string;
  /*
  * Provides control over cell tag to render table with div cells or standard td cells
  */
  CellTag?: ElementType;
  /*
  * Config of every row
  */
  columns: Partial<TableColumnItemType>[];
  /*
  * Row click handler is applied to row wrapper and triggers application of special clickable row styles
  */
  onClick?: ButtonClickHandlerType;
  /*
  * External class name for row wrapper
  */
  rowClassName?: string;
  /*
  * Data for current row
  */
  rowData: TableRowItemDataType;
  /*
  * Default style for the row depends upon the number of columns to form basic CSS grid
  */
  rowDefaultStyle?: {
    gridTemplateColumns?: string;
    display?: string;
  };
  /*
  * Provides control over row tag to render table with div rows or standard tr cells
  */
  RowTag?: ElementType;
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
} as StoriesExportObject