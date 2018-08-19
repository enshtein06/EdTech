import {
    AUTH_START,
    AUTH_SUCCESS, 
    AUTH_FAIL,
    AUTH_LOGOUT
} from './types';

export const authStart = ( email, password, name, confirmPassword ) => {
    console.log("AUTH START ACTION")
    console.log(email, password, name, confirmPassword)
    let authData = {
        email,
        password,
        isSignup: false
    }
    if(name && confirmPassword) {
        authData.name = name;
        authData.confirmPassword = confirmPassword;
        authData.isSignup = true;
    }
    return {
        type: AUTH_START,
        payload: authData
    }
}

export const authSuccess = (token) => {
    console.log('AUTH_SUCCESS');
    console.log(token)
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}

export const authFail = () => ({type: AUTH_FAIL});

export const authLogout = () => {
    localStorage.removeItem('token');
    return {type: AUTH_LOGOUT};
}