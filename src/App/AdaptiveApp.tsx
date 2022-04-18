import { memo, useCallback } from 'react'
import HeaderAdaptive from 'components/organisms/Header/HeaderAdaptive'
import FooterAdaptive from 'components/organisms/Footer/FooterAdaptive'
import HomePage from 'Pages/HomePage/HomePage'
import ContainerAdaptive from 'components/templates/Container/ContainerAdaptive'
import { setActiveWaypoint, setWaypointsStatus } from 'store/actions'
import { NavigationData } from 'components/organisms/Navigation/_assets/data'
import { useDispatch } from 'react-redux'

function AdaptiveApp () {
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
      <HeaderAdaptive onNavClick={handleClickButton} />
      <main>
        <HomePage
          ContainerComponent={ContainerAdaptive}
          onNavClick={handleClickButton}
        />
      </main>
      <FooterAdaptive onNavClick={handleClickButton} />
    </>
  )
}

export default memo(AdaptiveApp)