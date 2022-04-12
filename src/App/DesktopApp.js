import { memo } from 'react'
import Header from 'components/organisms/Header/Header'
import useHeaderTypeController from 'hooks/useHeaderTypeController'
import HomePage from 'Pages/HomePage/HomePage'
import Footer from 'components/organisms/Footer/Footer'

function DesktopApp () {
  const {className} = useHeaderTypeController()
  
  return (
    <>
      <Header
        className={className}
      />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default memo(DesktopApp)