import { composeWithDevTools } from 'redux-devtools-extension';
import {  createStore, applyMiddleware } from 'redux';
import axios from "axios";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import combineReducers from "./Reducers/rootReducer";
import logger from 'redux-logger';

const middleware = applyMiddleware(promise(), thunk, logger);

const store = createStore(combineReducers, middleware);

store.dispatch({
    type: "GET_TODO",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

export default createStore(combineReducers, middleware);