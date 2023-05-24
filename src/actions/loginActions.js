import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_CURRENT_USER_FAIL,
    SET_CURRENT_USER_SUCCESS,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT
} from './types'
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});



export const checkAuthenticated = () => async dispatch => {
    
}


//LOAD/LOGIN the user after the token is ok
export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await client.get('/auth/v1/home/', config)

            dispatch({
                type: SET_CURRENT_USER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: SET_CURRENT_USER_FAIL
            })
        }  
    }
    else{
        dispatch({
            type: LOGIN_FAIL
        })
    }
}


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await client.post('/auth/v1/login/', body, config)
   
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user())

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL  
        })

    }
};


