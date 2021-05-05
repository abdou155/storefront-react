import { ActionTypes } from './category.constants'

export const setCategory = (categories) => {
    return {
        type: ActionTypes.LIST_CATEGORY,
        payload: categories
    }
}