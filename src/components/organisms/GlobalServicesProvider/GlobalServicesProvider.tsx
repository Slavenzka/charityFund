import Modal from 'components/organisms/Modal/Modal'
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
      <Modal>
        { children }
      </Modal>
    </Provider>
  )
}

export default GlobalServicesProvider