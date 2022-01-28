import produce from 'immer'
import { DeviceTypes } from 'utils/const'
import { SET_CURRENT_FONT_SIZE, SET_USER_DEVICE_TYPE } from 'store/actions/actionTypes'

const INITIAL_STATE = {
  deviceType: null,
  config: {
    [DeviceTypes.DESKTOP]: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_DESKTOP,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_DESKTOP
    },
    [DeviceTypes.ADAPTIVE]: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_ADAPTIVE,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_ADAPTIVE
    }
  },
  curFontSize: 10
}

export const elasticAdaptiveReducer = produce((draft = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_FONT_SIZE: {
      draft.curFontSize = payload
      return draft
    }
    case SET_USER_DEVICE_TYPE: {
      draft.deviceType = payload
      return draft
    }
    default:
      return draft
  }
})