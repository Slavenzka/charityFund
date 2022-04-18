import { ElementType, memo } from 'react'
import Mission from 'Pages/HomePage/Mission/Mission'
import Container from 'components/templates/Container/Container'
import { useSelector } from 'react-redux'
import { RootReducerType } from 'store/spec/index.spec'
import { LanguageOptions } from 'utils/const'
import Goals from 'Pages/HomePage/Goals/Goals'
import Activity from 'Pages/HomePage/Activity/Activity'
import Supervisors from 'Pages/HomePage/Supervisors/Supervisors'
import Support from 'Pages/Support/Support'
import Contacts from 'Pages/HomePage/Contacts/Contacts'
import WaypointsController from 'components/organisms/controllers/WaypointsController/WaypointsController'
import PopupController from 'components/organisms/controllers/PopupController/PopupController'

function HomePage ({
  ContainerComponent = Container,
  onNavClick
}: {
  ContainerComponent?: ElementType,
  onNavClick: () => void
}) {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)

  return (
    <PopupController>
      <>
        <h1 className="visuallyHidden">
          {lang === LanguageOptions.UA
            ? `Благодійний фонд генерала Залужного`
            : `Charitable Foundation of general Zaluzhny`
          }
        </h1>
        <WaypointsController>
          {({saveWaypoint}) => (
            <>
              <ContainerComponent>
                <Mission
                  lang={lang}
                  saveWaypoint={saveWaypoint}
                  onClick={() => onNavClick()}
                />
                <Goals lang={lang} />
                <Activity lang={lang} />
                <Supervisors lang={lang} saveWaypoint={saveWaypoint} />
                <Support lang={lang} saveWaypoint={saveWaypoint} />
              </ContainerComponent>
              <Contacts lang={lang} saveWaypoint={saveWaypoint} />
            </>
          )}
        </WaypointsController>
      </>
    </PopupController>
  )
}

export default memo(HomePage)