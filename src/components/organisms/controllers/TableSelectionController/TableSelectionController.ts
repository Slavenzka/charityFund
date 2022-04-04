import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetTableSelection, updateTableSelectedAll, updateTableSelectedItem } from 'store/actions'
import { RootReducerType } from 'store/spec/index.spec'
import {
  TableSelectionControllerProps
} from 'components/organisms/controllers/TableSelectionController/TableSelectionController.spec'

function TableSelectionController ({
  data,
  render,
  isResetOnUnmount = true
}: TableSelectionControllerProps) {
  const tableSelection = useSelector((store: RootReducerType) => store.table.selection)
  const dispatch = useDispatch()
  
  const handleClickCheckbox = useCallback(({isToggleAll, rowData, property}) => {
    if (isToggleAll) {
      const allIDs = data.map(item => item[property] as string)
      dispatch(updateTableSelectedAll(allIDs))
      return null
    }
    
    if (!isToggleAll && rowData) {
      const itemID = rowData[property]
      dispatch(updateTableSelectedItem(itemID))
    }
  }, [data, dispatch])
  
  useEffect(() => {
    return function () {
      if (isResetOnUnmount) {
        dispatch(resetTableSelection())
      }
    }
  }, [dispatch, isResetOnUnmount])
  
  return render({
    tableSelection,
    handleClick: handleClickCheckbox,
    data
  })
}

export default memo(TableSelectionController)