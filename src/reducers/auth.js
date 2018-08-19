import { 
    AUTH_START, 
    AUTH_SUCCESS, 
    AUTH_FAIL, 
    AUTH_LOGOUT 
} from '../actions/types';
import { Map } from 'immutable';

const initial_state = Map ({
    token: localStorage.getItem('token'),
    error: null,
    loading: false
})

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case AUTH_START:
            console.log("AUTH REDUCER");
            console.log(action);
            const variable = state.set('loading', true); 
            console.log(variable.toJS());
            return variable
        case AUTH_SUCCESS:
            return state.set('loading', false).set('token', action.payload);
        case AUTH_FAIL:
            return state.set('loading', false).set('error', action.payload);
        case AUTH_LOGOUT:
            return state.set('token', null);
        default:
            return state;
    }
}

export default authReducer;