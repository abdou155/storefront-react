import { createStore } from "redux";
import { combineReducers } from 'redux'
import { currentUser } from './auth/auth.reducer'
import { listCategories } from './categories/category.reducer'

const reducers = combineReducers({
    currentUser,
    listCategories
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store