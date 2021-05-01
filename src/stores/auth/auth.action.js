import {ActionTypes} from './auth.constant'



export const setRegistred = (customer) => {
    return {
        type: ActionTypes.USER_REGISTER,
        payload: customer
    }
}

export const setRegistredSuccess = (customer) => {
    customer.errors = []
    return {
        type: ActionTypes.USER_REGISTER_SUCCESS,
        payload: customer
    }
}

export const setRegistredFailed = (errors) => {
    return {
        type: ActionTypes.USER_REGISTER_ERROR,
        payload: errors
    }
}

export const setLoginSuccess = (token) => {
    localStorage.setItem("accesToken" , token)
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload: token
    }
}

