import { ActionTypes } from './category.constants'


const initialState = {
    categories: []
}

export const listCategories = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LIST_CATEGORY:
            state.categories = payload
            return { ...state }
        default:
            return state
    }

}