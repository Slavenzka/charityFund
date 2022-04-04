import Modal from 'components/organisms/Modal/Modal'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import 'normalize.css'
import 'styles/common.scss'

function GlobalServicesProvider ({
  children
}: {
  children: JSX.Element
}) {
  const store = configureStore()
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Modal>
          { children }
        </Modal>
      </BrowserRouter>
    </Provider>
  )
}

export default GlobalServicesProvider