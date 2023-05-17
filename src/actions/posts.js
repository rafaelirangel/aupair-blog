
// The returned function is a Redux action creator that wraps the Axios GET request with a 
// dispatch function, which dispatches an action to the Redux store when the request is successful.

// When called, the function sends a GET request to the URL / post / using Axios.

// If the request is successful, the.then() method is called, which dispatches an action 
// object to the Redux store.The action object has a type of GET_POSTS, which is imported from another file, and a payload of res.data, which is the response data returned by the API.

// If the request fails, the.catch() method is called, which logs the error to the console.

// Overall, this code sets up an action creator that can be dispatched to the Redux 
// store to retrieve a list of posts from an API and update the store's state with the returned data.

import axios from "axios";
import {
    GET_POSTS,
    ADD_POSTS,
    UPDATE_POSTS,
    DELETE_POSTS,
    GET_COMMENTS,
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    GET_LIKE,
    ADD_LIKE, } from "./types";


//Fetching data from the backend
const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

//GET POSTS
export const getPosts = () =>  dispatch => {
    client
    .get('/posts/')
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

// /ADD POSTS CREATE
export const addPosts = (post) => dispatch => {
    console.log(post)
    client
        .post('/posts/', post)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: ADD_POSTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

//DELETE POSTS
export const deletePosts = (postId) => dispatch => {
    client
        .delete(`/posts/${postId}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_POSTS,
                payload: postId
            });
        })
        .catch(err => console.log(err));
        
}

//UPDATE POST
export const updatePost = (id, updatedPost) => dispatch => {
    client
        .put(`/post/${id}/`, updatedPost)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: UPDATE_POSTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

//GET COMMENTS
export const getComments = (postId) => async (dispatch) => {
    try {
        const res = await client.get(`/posts/${postId}/comments/`);
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const addComment = (postId, comment) => async (dispatch) => {
    try {
        const res = await client.post(`/posts/${postId}/comments/`, comment);
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateComment = (postId, commentId, updatedComment) => async (
    dispatch
) => {
    try {
        const res = await client.put(
            `/posts/${postId}/comments/${commentId}/`,
            updatedComment
        );
        dispatch({
            type: UPDATE_COMMENT,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
    try {
        await client.delete(`/posts/${postId}/comments/${commentId}/`);
        dispatch({
            type: DELETE_COMMENT,
            payload: commentId
        });
    } catch (error) {
        console.log(error);
    }
};






