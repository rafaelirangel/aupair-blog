import {GET_POSTS, DELETE_POSTS} from '../actions/types.js';


// This is a reducer function for handling the posts state in a Redux store.The reducer is responsible for updating the state based on the actions dispatched to the store.

// The reducer initializes the posts state as an empty array in the initialState object.
// The reducer exports a default function that accepts two arguments: state and action.
// The state argument is initialized with the initialState object as its default value.This means that if no state is provided, the reducer will use the initialState.
// The action argument is an object that has a type property and a payload property(if applicable).
// The reducer uses a switch statement to determine which action was dispatched and how to update the state accordingly.
// In this case, the reducer is handling the GET_POSTS action type, which is defined in a separate file as a string constant.
// When the GET_POSTS action is dispatched, the reducer creates a new object with the spread operator that includes all the properties of the current state, and then updates the posts property with the new posts data from the payload of the action object.
// If none of the defined action types match the dispatched action, the reducer simply returns the current state object.


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

    //its returning the current state and filtering through and return the ones that is not the id we deleted
        case DELETE_POSTS:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            };
        default:
            return state;
    }
}