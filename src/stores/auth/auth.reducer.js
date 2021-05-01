import { ActionTypes } from './auth.constant'

const initialState = {
    user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    },
    isLogged: false,
    token: "",
    errors: []
}

export const currentUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.USER_REGISTER:
            return { ...state, payload }
        case ActionTypes.USER_REGISTER_SUCCESS:
            return { ...state, payload }
        case ActionTypes.USER_REGISTER_ERROR:
            return { ...state, errors: payload }
        case ActionTypes.USER_LOGIN_SUCCESS:
            state.isLogged = true 
            state.token = payload
            return { ...state }
        default:
            return state
    }
}