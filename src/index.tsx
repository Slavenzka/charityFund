import React from 'react'
import ReactDOM from 'react-dom'
import ViewSwitcher from 'components/organisms/ViewSwitcher/ViewSwitcher'
import GlobalServicesProvider from 'components/organisms/GlobalServicesProvider/GlobalServicesProvider'
import DynamicHelmet from 'components/organisms/DynamicHelmet/DynamicHelmet'

const application = (
  <GlobalServicesProvider>
    <>
      <DynamicHelmet />
      <ViewSwitcher />
    </>
  </GlobalServicesProvider>
)

ReactDOM.render(application, document.getElementById('root'))