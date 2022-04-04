import { combineReducers } from 'redux'
import { elasticAdaptiveReducer } from 'store/reducers/elasticAdaptive'
import { uiReducer } from 'store/reducers/ui'
import { tableReducer } from 'store/reducers/table'

const rootReducer = combineReducers({
  elastic: elasticAdaptiveReducer,
  ui: uiReducer,
  table: tableReducer
})

export default rootReducer