import { memo } from 'react'
import Routes from 'Pages/Routes'
import Header from 'components/molecules/Header/Header'
import useHeaderTypeController from 'hooks/useHeaderTypeController'

function DesktopApp () {
  const {className} = useHeaderTypeController()
  
  return (
    <>
      <Header
        className={className}
      />
      <main>
        <Routes />
      </main>
    </>
  )
}

export default memo(DesktopApp)