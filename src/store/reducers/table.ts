import produce from 'immer'
import { UPDATE_TABLE_SELECTED_ITEMS } from 'store/actions/actionTypes'
import { StoreTableSlice } from 'store/spec/index.spec'

const INITIAL_STATE: StoreTableSlice = {
  selection: []
}

export const tableReducer = produce((draft = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case UPDATE_TABLE_SELECTED_ITEMS: {
      draft.selection = payload
      return draft
    }
    default:
      return draft
  }
})