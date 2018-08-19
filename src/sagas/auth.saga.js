import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import { authSuccess, authFail } from '../actions/auth';
import { AUTH_START } from '../actions/types';

export function* authWatcher () {
    yield takeEvery(AUTH_START, authStarted)
}

function* authStarted(args) {
    try {
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCX06sWfcPHWm_MYtU98To7N796D5UvfqE";
        if(!args.payload.isSignip) {
            url  = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCX06sWfcPHWm_MYtU98To7N796D5UvfqE";
        }
        const data = yield call(axiosAuthReq, url, args.payload);

        yield put(authSuccess(data.idToken));
    } catch (e) {
        yield put(authFail())
    }
}

function axiosAuthReq(url, {email, password, returnSecureToken}) {
    const authData = {email, password, returnSecureToken};
    return axios.post(url, authData)
        .then(response => {
            console.log('INSIDE AXIOS REQ');
            console.log(response);
            localStorage.setItem('token', response.data.idToken);
            return {idToken: response.data.idToken}
        })
        .catch(err => ({error: err.response.data.error}));
}