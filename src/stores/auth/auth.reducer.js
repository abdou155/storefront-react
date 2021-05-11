import { ActionTypes } from './auth.constant'

const initialState = {
    user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        adress: {}
    },
    isLogged: false,
    token: "",
    errors: []
}

export const currentUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USER_INFO:
            return { 
                ...state, 
                user : payload
            }
        case ActionTypes.USER_REGISTER:
            return { ...state, payload }
        case ActionTypes.USER_REGISTER_SUCCESS:
            state.errors = []
            return { ...state }

        case ActionTypes.USER_REGISTER_ERROR:
            return { ...state, errors: payload }

        case ActionTypes.USER_LOGIN:
            return { ...state, payload }

        case ActionTypes.USER_LOGIN_ERROR:
            return { ...state, errors: payload }

        case ActionTypes.USER_LOGIN_SUCCESS:
            state.isLogged = true
            state.token = payload
            state.errors = []
            return { ...state }

        case ActionTypes.USER_LOGOUT:
            return { ...state }

        default:
            return state
    }
}