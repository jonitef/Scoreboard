import * as ActionTypes from '../constants/actionTypes';

export function changeSortBy(sortBy) {
    return {
        type: ActionTypes.CHANGE_SORT_BY,
        payload: sortBy
    }
}

export function changeRange(range) {
    return {
        type: ActionTypes.CHANGE_RANGE,
        payload: range
    }
}