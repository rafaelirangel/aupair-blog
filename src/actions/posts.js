
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
     } from "./types";


// the source of information for the Store
//Fetching data from the backend
const client = axios.create({
    baseURL: "http://localhost:8000"
});

// GET POSTS
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
export const updatePost = (postId, updatedPost) => dispatch => {
    client
        .put(`/post/${postId}/`, updatedPost)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: UPDATE_POSTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}


export const getComments = postId => dispatch => {
    client
        .get(`/posts/${postId}/comments/`)
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            });
            console.log(res.data)
        })
        .catch(err => console.log(err));
  
}

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






