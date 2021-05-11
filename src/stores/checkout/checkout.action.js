import { ActionTypes } from './checkout.constants'

export const setAdressForm = (adressForm) => {
    return {
        type: ActionTypes.CREATE_ADRESS,
        payload: adressForm
    }
}

export const setShipMethod = (method) => {
    return {
        type: ActionTypes.ADD_SHIPPING_METHOD,
        payload: method
    }
}
