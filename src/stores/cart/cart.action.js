import { ActionTypes } from './cart.constants'

export const setCart = (cartId) => {
    return {
        type: ActionTypes.CREATE_CART,
        payload: cartId
    }
}


export const createCustomerCart = (cart) => {
    return {
        type: ActionTypes.CREATE_CUSTOMER_CART,
        payload: cart
    }
}
