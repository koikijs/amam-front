import { combineReducers } from 'redux'
import counter from './counter'
import absents from './absents'

const rootReducer = combineReducers({
  counter,
  absents
})

export default rootReducer
