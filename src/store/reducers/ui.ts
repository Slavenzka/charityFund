import produce from 'immer'
import { SET_LANG, TOGGLE_MODAL } from 'store/actions/actionTypes'
import { StoreUISlice } from 'store/spec/index.spec'
import { LanguageOptions } from 'utils/const'

const INITIAL_STATE: StoreUISlice = {
  modal: {
    content: null,
    options: {},
  },
  lang: LanguageOptions.UA
}

export const uiReducer = produce((draft = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case TOGGLE_MODAL: {
      draft.modal = payload
      return draft
    }
    case SET_LANG: {
      draft.lang = payload
      return draft
    }
    default:
      return draft
  }
})