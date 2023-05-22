import axios from "axios";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { setAxiosAuthToken, toastOnError } from "../Utils.js";
// import { isEmpty } from "../Utils.js"
import{
    CREATE_USER_ERROR,
    CREATE_USER_SUBMITTED,
    CREATE_USER_SUCCESS,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    SET_TOKEN,
} from './types'


const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

axios.defaults.baseURL = "http://127.0.0.1:8000";


//SIGNUP ACTION
export const signupNewUser = userData => dispatch => {
    dispatch({ type: CREATE_USER_SUBMITTED }); // set submitted state
    client
        .post("/auth/v1/users/", userData)
        .then(response => {
            toast.success(
                "Account for " +
                userData.username +
                " created successfully. Please login."
            );
            dispatch({ type: CREATE_USER_SUCCESS });
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                toast.error(JSON.stringify(error.response.data));
                dispatch({
                    type: CREATE_USER_ERROR,
                    errorData: error.response.data
                });
            } else if (error.message) {
                // the error message is available,
                // let's display it on error toast
                toast.error(JSON.stringify(error.message));
            } else {
                // strange error, just show it
                toast.error(JSON.stringify(error));
            }
        });
};


//LOGIN ACTION
export const login = (userData, redirectTo) => dispatch => {
    client
        .post('auth/v1/token/login', userData) // post to login REST API
        .then(response => {
            const { auth_token } = response.data;  // get auth_token
            setAxiosAuthToken(auth_token);        // set token in axios header
            dispatch(setToken(auth_token));    // set token in reducer
            dispatch(getCurrentUser(redirectTo));   // dispatch request to get user details
        })
        .catch(error => {
            dispatch(unsetCurrentUser());  // reset the state
            toastOnError(error)              // raise toast error
        })
}

export const getCurrentUser = redirectTo => dispatch => {
    client
        .get('auth/v1/users/me/')  // This will GET user details 
        .then(response => {
            const user = {
                username: response.data.username,
                email: response.data.email
            };
            dispatch(setCurrentUser(user, redirectTo));
        })
        .catch(error => {
            dispatch(unsetCurrentUser());
            toastOnError(error)
        });
};

// This function set the user variable in the localStorage and in the auth store.
// If the variable redirectTo is not empty, then a routing to its URL is dispatched(it is using push from connected - react - router library).
export const setCurrentUser = (user, redirectTo) => dispatch => {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });

    console.log('set user' + redirectTo);
    if (redirectTo !== ''){
        dispatch(push(redirectTo));
    }
}

export const setToken = token => dispatch => {
    setAxiosAuthToken(token);
    localStorage.setItem('token', token);
    dispatch({
        type: SET_TOKEN,
        payload: token
    });
}

export const unsetCurrentUser = () => dispatch => {
    setAxiosAuthToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
        type: UNSET_CURRENT_USER
    })
}

export const logout = () => dispatch => {
    client
        .post('auth/v1/token/logout/')
        .then(res => {
            dispatch(unsetCurrentUser());
            dispatch(push('/'));
            toast.success('Logout successful');
        })
        .catch(err => {
            dispatch(unsetCurrentUser());
            toastOnError(err)
        })
}