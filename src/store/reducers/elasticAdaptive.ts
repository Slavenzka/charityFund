import produce from 'immer'
import { DeviceTypes } from 'specs/enum.spec'
import { SET_CURRENT_FONT_SIZE, SET_USER_DEVICE_TYPE } from 'store/actions/actionTypes'
import { StoreElasticSlice } from 'store/spec/index.spec'

const INITIAL_STATE: StoreElasticSlice = {
  deviceType: null,
  config: {
    [DeviceTypes.DESKTOP]: {
      baseSize: 10,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      baseWidth: +process.env.REACT_APP_BASE_WIDTH_DESKTOP! as number,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      widthLimit: +process.env.REACT_APP_WIDTH_LIMIT_DESKTOP! as number
    },
    [DeviceTypes.ADAPTIVE]: {
      baseSize: 10,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      baseWidth: +process.env.REACT_APP_BASE_WIDTH_ADAPTIVE! as number,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      widthLimit: +process.env.REACT_APP_WIDTH_LIMIT_ADAPTIVE! as number
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