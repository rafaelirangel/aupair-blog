import axios from "axios";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from './types'

export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    // //Get token from state
    // console.log(getState());
    // const token = getState().auth.token;


    // // Headers
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    // // If token, add to headers config
    // if (token) {
    //     config.headers['Authorization'] = `Token ${token}`;
    // }

    axios.get('auth/user', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

export const tokenConfig = (getState) => {
    // Get token from state
    console.log(getState())
    const token = getState()?.auth?.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};