import { ActionTypes } from './cart.constants'


const initialState = {
    customerCart : {}
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CREATE_CART:
            state.cartID = payload
            return { ...state }
        case ActionTypes.CREATE_CUSTOMER_CART:
            state.customerCart = payload
            return { ...state }
        default:
            return state
    }

}