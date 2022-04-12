import { SET_LANG, TOGGLE_MODAL } from 'store/actions/actionTypes'
import { LanguageOptions } from 'utils/const'
import { ModalOptionsType } from 'components/organisms/Modal/Modal.spec'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RootReducerType, StoreUISlice } from 'store/spec/index.spec'

export const toggleModal = (content?: JSX.Element | null, options?: ModalOptionsType | null) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      content,
      options
    }
  }
}

export function toggleLang () {
  return function (dispatch: ThunkDispatch<StoreUISlice, void, Action>, getState: () => RootReducerType) {
    const selectedLang = getState().ui.lang
    const langOptions = Object.keys(LanguageOptions)
    const availableOptions = langOptions.filter(lang => lang !== selectedLang)

    dispatch({
      type: SET_LANG,
      payload: availableOptions[0]
    })
  }
}