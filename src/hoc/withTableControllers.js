import TableSelectionController
  from 'components/organisms/controllers/TableSelectionController/TableSelectionController'
import { emptyControllerWrapper } from 'utils'

function withTableControllers (WrappedComponent) {
  return function ({tableConfig = {}, data, ...props}) {
    const {
      columns = [],
      CustomController
    } = tableConfig
    
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