import produce from 'immer'
import { SET_ACTIVE_WAYPOINT, SET_WAYPOINTS_STATUS } from 'store/actions/actionTypes'

const INITIAL_STATE = {
  isActive: true,
  selectedWaypoint: null
}

export const waypointsReducer = produce((draft = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_ACTIVE_WAYPOINT: {
      draft.selectedWaypoint = payload
      return draft
    }
    case SET_WAYPOINTS_STATUS: {
      draft.isActive = payload
      return draft
    }
    default:
      return draft
  }
})