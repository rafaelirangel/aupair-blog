//Its a const tha holds a string, a place to hold the types
// his is a code snippet in JavaScript that defines a Redux reducer, which is a function that takes in the current state and an action, and returns the new state based on the action.

// The first line defines a constant variable named GET_POSTS and assigns it a string value of 'GET_POSTS'.This variable is used to define an action type that can be dispatched to the reducer later on.

// The second line defines an initial state for the reducer, which is an object with a single property called posts that holds an empty array.

// The rest of the code defines the reducer function itself using a switch statement.When an action is dispatched to the reducer, the switch statement checks the action type to determine what action to take.

// In this case, if the action type is 'GET_POSTS', the reducer returns a new state object that is a copy of the previous state(...state) but with the posts property updated to the payload value of the action(which is expected to be an array of posts).

// If the action type is not recognized, the reducer simply returns the current state object.

// Overall, this code sets up a Redux reducer that can handle the 'GET_POSTS' action by updating the posts property of the state with the payload value of the action.


export const GET_POSTS = 'GET_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
