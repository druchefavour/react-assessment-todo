import { combineReducers } from 'redux';
import  todoReducer from './todoReducer';
import  todoVisibility from './visibilityReducer';

export default combineReducers ({
    todoReducer,
    todoVisibility
})