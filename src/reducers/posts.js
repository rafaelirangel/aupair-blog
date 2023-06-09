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
    ADD_LIKE,
    } from '../actions/types.js';


// The reducer is responsible for updating the state based on the actions dispatched to the store.
// The reducer initializes the posts state as an empty array in the initialState object.
// The reducer exports a default function that accepts two arguments: state and action.
// The state argument is initialized with the initialState object as its default value.This means that if no state is provided, the reducer will use the initialState.
// The action argument is an object that has a type property and a payload property(if applicable).
// The reducer uses a switch statement to determine which action was dispatched and how to update the state accordingly.
// In this case, the reducer is handling the GET_POSTS action type, which is defined in a separate file as a string constant.
// When the GET_POSTS action is dispatched, the reducer creates a new object with the spread operator that includes all the properties of the current state, and then updates the posts property with the new posts data from the payload of the action object.
// If none of the defined action types match the dispatched action, the reducer simply returns the current state object.


//Specify how the state is changed in response to actions
const initialState = {
    posts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };

    //its returning the current state and filtering through it and returning the ones that is not the id we deleted
        case DELETE_POSTS:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            };

        case ADD_POSTS:
            return{
                ...state,
                posts: [...state.posts, action.payload]
            };   

        case UPDATE_POSTS:
            return{
                ...state,
                posts: state.props.map((post) => 
                post.id == action.payload.id ? action.payload : post )
            };    

        case GET_COMMENTS:
            return{
                ...state,
                comments: action.payload
            };

        case ADD_COMMENT:
            return{
                ...state,
                comments: [...state, action.payload]
            }    

        case UPDATE_COMMENT:
            return{
                ...state,
                comments: state.props.map((comment) =>
                comment.id == action.payload.id ? action.payload : comment)
            };

        case DELETE_COMMENT:
            return{
                ...state,
                comments: state.comments.filter((comment) => comment.id !== action.payload),
            };

        default:
            return state;
    }
}