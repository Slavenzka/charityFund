import { memo, useCallback } from 'react'
import Header from 'components/organisms/Header/Header'
import useHeaderTypeController from 'hooks/useHeaderTypeController'
import HomePage from 'Pages/HomePage/HomePage'
import Footer from 'components/organisms/Footer/Footer'
import { useDispatch } from 'react-redux'
import { setActiveWaypoint, setWaypointsStatus } from 'store/actions'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'

function DesktopApp () {
  const {className} = useHeaderTypeController()
  const dispatch = useDispatch()

  const handleClickButton = useCallback((id?: string) => {
    if (id) {
      dispatch(setActiveWaypoint(id))
      dispatch(setWaypointsStatus(false))
    } else {
      dispatch(setActiveWaypoint(NavigationData.SUPPORT.id))
      dispatch(setWaypointsStatus(false))
    }
  }, [dispatch])
  
  return (
    <>
      <Header
        onNavClick={handleClickButton}
        className={className}
      />
      <main>
        <HomePage onNavClick={handleClickButton} />
      </main>
      <Footer />
    </>
  )
}

export default memo(DesktopApp)