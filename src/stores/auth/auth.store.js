import { combineReducers } from 'redux'
import { currentUser } from './auth.reducer'

const reducers = combineReducers({
    currentUser
})


export default reducers