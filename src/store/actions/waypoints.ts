import { SET_ACTIVE_WAYPOINT, SET_WAYPOINTS_STATUS } from 'store/actions/actionTypes'

export function setActiveWaypoint (nodeID: string | null) {
  return {
    type: SET_ACTIVE_WAYPOINT,
    payload: nodeID
  }
}

export function setWaypointsStatus (status: boolean) {
  return {
    type: SET_WAYPOINTS_STATUS,
    payload: status
  }
}