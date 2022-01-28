import { Route, Routes } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import { useMemo } from 'react'
import Page404 from 'Pages/Page404/Page404'
import UseIntersectionObserver from 'Pages/UseIntersectionObserver/UseIntersectionObserver'
import TableExamples from 'Pages/TableExamples/TableExamples'

export const HOME_PAGE = `/`
export const INTERSECTION = `/intersection`
export const TABLES = `/tables`
const ALL_UNKNOWN = `*`

export const RoutesDescription = [
  {
    path: HOME_PAGE,
    Component: HomePage,
    label: `useRenderFormItems`
  },
  {
    path: TABLES,
    Component: TableExamples,
    label: `Tables`
  },
  {
    path: INTERSECTION,
    Component: UseIntersectionObserver,
    label: `useIntersectionObserver`
  },
  {
    path: ALL_UNKNOWN,
    Component: Page404
  }
]

function AppRoutes () {
  const routesList = useMemo(() => {
    return RoutesDescription.map(({path, Component}) => (
      <Route
        path={path}
        element={<Component />}
        key={path}
      />
    ))
  }, [])
  
  return (
    <Routes>
      { routesList }
    </Routes>
  )
}

export default AppRoutes