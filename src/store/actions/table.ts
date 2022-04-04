import { UPDATE_TABLE_SELECTED_ITEMS } from 'store/actions/actionTypes'
import { Dispatch } from 'redux'
import { RootReducerType } from 'store/spec/index.spec'

export function updateTableSelectedItem (value: string) {
  return function (dispatch: Dispatch, getState: () => RootReducerType) {
    const storeData = getState().table.selection
    const selectedList = Array.isArray(storeData) ? getState().table.selection.slice() : []
    const existingIndex = selectedList.findIndex(item => item === value)
    const isItemExists = existingIndex >= 0
    
    if (isItemExists) {
      const updatedList = [...selectedList.slice(0, existingIndex), ...selectedList.slice(existingIndex + 1)]
      dispatch({
        type: UPDATE_TABLE_SELECTED_ITEMS,
        payload: updatedList
      })
      return null
    }
    
    selectedList.push(value)
    dispatch({
      type: UPDATE_TABLE_SELECTED_ITEMS,
      payload: selectedList
    })
  }
}

export function updateTableSelectedAll (data: string[]) {
  return function (dispatch: Dispatch, getState: () => RootReducerType) {
    const storeData = getState().table.selection
    const isSelectionExists = Array.isArray(storeData) && storeData.length < data.length
    
    dispatch({
      type: UPDATE_TABLE_SELECTED_ITEMS,
      payload: isSelectionExists
        ? data
        : []
    })
  }
}

export function resetTableSelection () {
  return {
    type: UPDATE_TABLE_SELECTED_ITEMS,
    payload: []
  }
}