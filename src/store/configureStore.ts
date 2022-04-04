import { applyMiddleware, createStore } from 'redux'
import rootReducer from 'store/reducers/_index'
import thunk from 'redux-thunk'

export default function configureStore () {
  return createStore(rootReducer, applyMiddleware(thunk))
}