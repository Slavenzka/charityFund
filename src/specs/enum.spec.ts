export enum LoadingStatuses {
  IDLE = `IDLE`,
  IN_PROGRESS = `IN_PROGRESS`,
  SUCCESS = `SUCCESS`,
  ERROR = `ERROR`
}

export enum DeviceTypes {
  DESKTOP = 'DESKTOP',
  ADAPTIVE = 'ADAPTIVE'
}

export type DisplayTypes = `block` | `flex` | `grid` | `none`