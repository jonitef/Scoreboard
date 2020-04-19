import { combineReducers } from 'redux';

import scoreReducer from '../reducers/scoreReducer';
import sortReducer from '../reducers/sortReducer';

export default combineReducers({
    scoreReducer,
    sortReducer
});