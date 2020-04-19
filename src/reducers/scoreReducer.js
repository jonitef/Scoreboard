import * as ActionTypes from '../constants/actionTypes';

export default function scoreReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_SCORE:
            return [
                ...state,
                action.payload
            ]
        case ActionTypes.DELETE_SCORE:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
        default:
            return state
    }
}
