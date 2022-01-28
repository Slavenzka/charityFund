import { TOGGLE_MODAL } from 'store/actions/actionTypes'

export const toggleModal = (content, options) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      content,
      options
    }
  }
}