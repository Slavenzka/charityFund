import { memo } from 'react'
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

function HomePage () {
  const lang = useSelector((store: RootReducerType) => store.ui.lang)

  return (
    <>
      <h1 className="visuallyHidden">
        {lang === LanguageOptions.UA
          ? `Благодійний фонд генерала Залужного`
          : `Charitable Foundation of general Zaluzhny`
        }
      </h1>
      <Container>
        <Mission lang={lang} />
        <Goals lang={lang} />
        <Activity lang={lang} />
        <Supervisors lang={lang} />
        <Support lang={lang} />
      </Container>
      <Contacts lang={lang} />
    </>
  )
}

export default memo(HomePage)