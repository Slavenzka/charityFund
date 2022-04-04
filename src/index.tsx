import React from 'react'
import ReactDOM from 'react-dom'
import ViewSwitcher from 'components/organisms/ViewSwitcher/ViewSwitcher'
import GlobalServicesProvider from 'components/organisms/GlobalServicesProvider/GlobalServicesProvider'

const application = (
  <React.StrictMode>
    <GlobalServicesProvider>
      <ViewSwitcher />
    </GlobalServicesProvider>
  </React.StrictMode>
)

ReactDOM.render(application, document.getElementById('root'))