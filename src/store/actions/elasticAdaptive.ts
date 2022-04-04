import {
  SET_CURRENT_FONT_SIZE, SET_USER_DEVICE_TYPE,
} from 'store/actions/actionTypes'
import { DeviceTypes } from 'specs/enum.spec'

export const setFontSize = (data: number) => {
  return {
    type: SET_CURRENT_FONT_SIZE,
    payload: data
  }
}

export const setDeviceType = (type: DeviceTypes) => {
  return {
    type: SET_USER_DEVICE_TYPE,
    payload: type
  }
}
