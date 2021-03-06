import { ActionTypes } from './checkout.constants'


const initialState = {
    isEmpty : true ,
    adressInfo: {},
    shipMethod: []
}

export const checkoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CREATE_ADRESS:
            return { ...state ,
                adressInfo : payload
            }
        case ActionTypes.ADD_SHIPPING_METHOD:
            return { ...state ,
                shipMethod : payload
            }
        default:
            return state
    }

}