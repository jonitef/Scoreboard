import * as ActionTypes from '../constants/actionTypes';

const initialState = {
    scores: [],
    filteredScores: []
}

export default function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_SCORE:
            return {
                scores: [
                    ...state.scores,
                    action.payload
                ],
                filteredScores: [
                    ...state.scores,
                    action.payload
                ]
            }

        case ActionTypes.DELETE_SCORE:
            return {
                scores: [
                    ...state.scores.filter(score => score.id !== action.payload)
                ],
                filteredScores: [
                    ...state.scores.filter(score => score.id !== action.payload)
                ]
            }
        case ActionTypes.FILTER_SCORE:
            const filteredScores = state.scores.filter(score => {
                return (
                    score.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
                );
            });
            return {
                scores: [
                    ...state.scores
                ],
                filteredScores: [
                    ...filteredScores
                ]
            }
        default:
            return state
    }
}
