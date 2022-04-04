import TableSelectionController
  from 'components/organisms/controllers/TableSelectionController/TableSelectionController'
import { emptyControllerWrapper } from 'utils'
import { ElementType } from 'react'
import { TableConfigType, TableProps } from 'components/molecules/Table/Table.spec'

function withTableControllers (WrappedComponent: ElementType) {
  return function ({
    tableConfig,
    data,
    ...props
  }: TableProps) {
    const {
      columns = [],
      CustomController
    } = tableConfig as TableConfigType
    
    const isWithSelection = columns.some(item => item?.checkProperty)
  
    const SelectionController = isWithSelection
      ? TableSelectionController
      : emptyControllerWrapper
    
    const AdditionalController = CustomController ?? emptyControllerWrapper
  
    return (
      <AdditionalController
        render={controllerProps => (
          <SelectionController
            data={data}
            render={selectionProps => (
              <WrappedComponent
                tableConfig={tableConfig}
                {...selectionProps}
                {...controllerProps}
                {...props}
              />
            )}
          />
        )}
      />
    )
  }
}

export default withTableControllers