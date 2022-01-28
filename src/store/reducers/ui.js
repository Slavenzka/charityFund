import produce from 'immer'
import { TOGGLE_MODAL } from 'store/actions/actionTypes'

const INITIAL_STATE = {
  modal: {
    content: null,
    options: {},
  },
}

export const uiReducer = produce((draft = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case TOGGLE_MODAL: {
      draft.modal = payload
      return draft
    }
    default:
      return draft
  }
})