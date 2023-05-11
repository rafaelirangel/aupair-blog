//here is where im gonna hold all the reducers file

// In Redux, a reducer is a pure function that takes in the current state and an action and returns a new state.
// Reducers are responsible for handling state updates in response to actions dispatched to the Redux store.

// A reducer file typically contains the definition of the reducer function(s) for a particular slice of the 
// application state.It defines how the state should be updated when a specific action is dispatched.



import { combineReducers } from "redux";
import posts from './posts';

export default combineReducers({
    posts:posts 
})
