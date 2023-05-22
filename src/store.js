// find something to replace createStore bc its repricated

import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { setCurrentUser, setToken } from './actions/auth';
import { isEmpty } from './Utils.js'

//keeps information about application state (data)
const initialState = {};

//
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

// check localStorage
if (!isEmpty(localStorage.getItem("token"))) {
    store.dispatch(setToken(localStorage.getItem("token")));
}
if (!isEmpty(localStorage.getItem("user"))) {
    const user = JSON.parse(localStorage.getItem("user"));
    store.dispatch(setCurrentUser(user, ""));
}


export default store;