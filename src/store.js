// find something to replace createStore bc its repricated

import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//keeps information about application state (data)
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;