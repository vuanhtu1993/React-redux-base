import todoReducer from './reducers'
import {combineReducers} from 'redux'

export default combineReducers({todos :todoReducer})
