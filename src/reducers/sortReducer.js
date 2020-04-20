import * as ActionTypes from '../constants/actionTypes';

const initialState = {
    sortBy: 'desc',
    range: {
        min: 0,
        max: Number.POSITIVE_INFINITY
    }
}

export default function sortReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case ActionTypes.CHANGE_RANGE:
            if (action.payload.max === '' || action.payload.max === null) {
                return {
                    ...state,
                    range: {
                        min: Number(action.payload.min),
                        max: Number.POSITIVE_INFINITY
                    }
                }
            }
            else {
                return {
                    ...state,
                    range: {
                        min: Number(action.payload.min),
                        max: Number(action.payload.max)
                    }
                }
            }
        default:
            return state
    }
}
