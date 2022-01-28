import produce from 'immer'
import { UPDATE_TABLE_SELECTED_ITEMS } from 'store/actions/actionTypes'

const INITIAL_STATE = {
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