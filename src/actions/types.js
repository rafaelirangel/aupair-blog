//ACTIONS FOR POSTS
export const GET_POSTS = 'GET_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const UPDATE_POSTS = 'UPDATE_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'

//ACTIONS FOR COMMENTS
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

//ACTIONS FOR LIKES
export const GET_LIKE = 'GET_LIKE'
export const ADD_LIKE = 'ADD_LIKE'

//ACTION FOR SIGNUP 
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

//ACTION FOR LOGIN
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" //it will be dispatched after successful login.
export const LOGIN_FAIL = "LOGIN_FAIL"
export const SET_CURRENT_USER_SUCCESS = "SET_CURRENT_USER_SUCCESS" //it will set the user obejct in the store.It will be called after successful request to the endpoint.
export const SET_CURRENT_USER_FAIL = "SET_CURRENT_USER_FAIL"


//ACTION FOR AUTHENTICATION
export const AUTHENTICATED_SUCCESS = "AUTHENTICATED_SUCCESS"
export const AUTHENTICATED_FAIL = "AUTHENTICATED_FAIL"

//ACTION FOR LOGOUT
export const LOGOUT = "LOGOUT" //will reset the state by setting its initial value.