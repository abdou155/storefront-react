import { createStore } from "redux";
import { combineReducers } from 'redux'
import { currentUser } from './auth/auth.reducer'
import { listCategories } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'
import { checkoutReducer } from './checkout/checkout.reducer'

const reducers = combineReducers({
    cartReducer,
    currentUser,
    listCategories,
    checkoutReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store