import { combineReducers } from 'redux-immutable';

import authReducer from './auth';

export default combineReducers({
    auth: authReducer
});