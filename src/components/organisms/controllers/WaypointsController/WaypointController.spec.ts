interface WaypointRefGetterType {
  (node: HTMLElement | null): void
}

export interface SaveWaypointType {
  saveWaypoint: WaypointRefGetterType
}

interface RenderFunctionArgs extends SaveWaypointType {
  flag?: boolean
}

export interface WaypointControllerRenderFunction {
  ({
    saveWaypoint
   }: RenderFunctionArgs): JSX.Element
}