import * as ActionTypes from '../constants/actionTypes';

export function addScore(score) {
    return {
        type: ActionTypes.ADD_SCORE,
        payload: score
    }
}

export function deleteScore(index) {
    return {
        type: ActionTypes.DELETE_SCORE,
        payload: index
    }
}

export function filterScore(searchString) {
    return {
        type: ActionTypes.FILTER_SCORE,
        payload: searchString
    }
}