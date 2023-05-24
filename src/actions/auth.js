// import axios from "axios";
// import { toast } from "react-toastify";
// import { push } from "connected-react-router";
// import {  toastOnError } from "../Utils.js";
// import { isEmpty } from "../Utils.js"
// import{
//     SET_CURRENT_USER,
//     UNSET_CURRENT_USER,
//     SET_TOKEN,
// } from './types'
// import Cookies from 'js-cookie';


// const client = axios.create({
//     baseURL: "http://127.0.0.1:8000"
// });

// export const setAxiosAuthToken = token => {
//     if (typeof token !== "undefined" && token) {
//         // Apply for every request
//         axios.defaults.headers.common["Authorization"] = "Token " + token;
//     } else {
//         // Delete auth header
//         delete axios.defaults.headers.common["Authorization"];
//     }
// };


// // client.interceptors.request.use(config => {
// //     const csrfToken = '...'; // Retrieve CSRF token from cookie or any other source
// //     config.headers['X-XSRF-TOKEN'] = csrfToken;
// //     return config;
// // });


// //LOGIN ACTION
// export const login = (userData, redirectTo) => dispatch => {
//     const xsrfToken = Cookies.get("XSRF-TOKEN");
//     console.log(xsrfToken)
//     const headers = {
//         "Content-type": "application/json",
//         "X-XSRF-TOKEN": xsrfToken,
//     };
   
//     client
//         .post('auth/v1/token/login', userData, { headers }) // post to login REST API
//         .then(response => {
//             const { auth_token } = response.data;  // get auth_token
//             // localStorage.setItem('token', auth_token)
//             // console.log(localStorage)
//             setAxiosAuthToken(auth_token);        // set token in axios header
//             dispatch(setToken(auth_token));    // set token in reducer
//             dispatch(getCurrentUser(redirectTo));   // dispatch request to get user details
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());  // reset the state
//             toastOnError(error)              // raise toast error
//         })
// }

// export const getCurrentUser = (redirectTo) => dispatch => {
//     const xsrfToken = Cookies.get("XSRF-TOKEN");
//     const headers = {
//         "Content-type": "application/json",
//         "X-XSRF-TOKEN": xsrfToken,
//     };
    
//     client
//         .get('auth/v1/users/me/', { headers })  // This will GET user details 
//         .then(response => {
//             const user = {
//                 username: response.data.username,
//                 password: response.data.password
//             };
//             dispatch(setCurrentUser(user, redirectTo));
//         })
        
//         .catch(error => {
//             console.log(error)
//             dispatch(unsetCurrentUser());
//             toastOnError(error)
//         });
// };

// // This function set the user variable in the localStorage and in the auth store.
// // If the variable redirectTo is not empty, then a routing to its URL is dispatched(it is using push from connected - react - router library).
// export const setCurrentUser = (user, redirectTo) => dispatch => {
//     localStorage.setItem('user', JSON.stringify(user));
//     dispatch({
//         type: SET_CURRENT_USER,
//         payload: user
//     });

//     console.log('set user' + redirectTo);
//     if (redirectTo !== ''){
//         dispatch(push(redirectTo));
//     }
// }

// export const setToken = token => dispatch => {
 
//     setAxiosAuthToken(token);
//     localStorage.setItem('token', token);
//     dispatch({
//         type: SET_TOKEN,
//         payload: token
//     });
// }

// export const unsetCurrentUser = () => dispatch => {
//     setAxiosAuthToken('');
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     dispatch({
//         type: UNSET_CURRENT_USER
//     })
// }

// export const logout = () => dispatch => {
//     const xsrfToken = Cookies.get("XSRF-TOKEN");
//     const headers = {
//         "Content-type": "application/json",
//         "X-XSRF-TOKEN": xsrfToken,
//     };

//     client
//         .post('auth/v1/token/logout/', null, { headers })
//         .then(res => {
//             dispatch(unsetCurrentUser());
//             dispatch(push('/'));
//             toast.success('Logout successful');
//         })
//         .catch(err => {
//             dispatch(unsetCurrentUser());
//             toastOnError(err)
//         })
// }

// export default client;