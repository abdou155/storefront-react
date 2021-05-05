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

export const setLogin = (customer) => {
    return {
        type: ActionTypes.USER_LOGIN,
        payload: customer
    }
}


export const setLoginSuccess = (token) => {
    localStorage.setItem("accesToken" , token)
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload: token
    }
}

export const setLoginFailed = (errors) => {
    return {
        type: ActionTypes.USER_LOGIN_ERROR,
        payload: errors
    }
}

export const setLogout = (customer) => {
    localStorage.removeItem("accesToken")
    return {
        type: ActionTypes.USER_LOGOUT,
        payload: customer
    }
}

