//this is where we are making the fetch request
// This code exports a function named getPosts that makes an asynchronous HTTP request to 
// retrieve a list of posts from an API, using the Axios library.The function takes no parameters but returns another function that takes in a dispatch function as a parameter.

// The returned function is a Redux action creator that wraps the Axios GET request with a 
// dispatch function, which dispatches an action to the Redux store when the request is successful.

// When called, the function sends a GET request to the URL / post / using Axios.

// If the request is successful, the.then() method is called, which dispatches an action 
// object to the Redux store.The action object has a type of GET_POSTS, which is imported from another file, and a payload of res.data, which is the response data returned by the API.

// If the request fails, the.catch() method is called, which logs the error to the console.

// Overall, this code sets up an action creator that can be dispatched to the Redux 
// store to retrieve a list of posts from an API and update the store's state with the returned data.

import axios from "axios";
import { GET_POSTS, DELETE_POSTS, ADD_POSTS } from "./types";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});


export const getPosts = () =>  dispatch => {
    client
    .get('/post/')
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

//DELETE POSTS
export const deletePosts = (id) => dispatch => {
    client
        .delete(`/post/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_POSTS,
                payload: id
            });
        })
        .catch(err => console.log(err));
        
}

//ADD POSTS CREATE
export const addPosts = (post) => dispatch => {
    client
        .post('/post/', post)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: ADD_POSTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}





