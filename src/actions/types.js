
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



// CREATE_USER_SUBMITTED, which means that the request to create a new user was send and we are waiting for server response.After this action type is dispatched, we should disable Signup button till server responded.
// CREATE_USER_SUCCESS - the action is called after HTTP 201 CREATED response from server, which means that user was successfully created.
// CREATE_USER_ERROR - the action is called when there was an error during creation of the user and it was not created.

//ACTION FOR SIGNUP 
export const CREATE_USER_SUBMITTED = "CREATE_USER_SUBMITTED";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";


// SET_TOKEN - it will be dispatched after successful login.
// SET_CURRENT_USER - it will set the user obejct in the store.It will be called after successful request to /auth/v1/users/me/ endpoint.
// UNSET_CURRENT_USER - will reset the state by setting its initial value.

//ACTION FOR LOGIN
export const SET_TOKEN = "SET_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";
