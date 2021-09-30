import { combineReducers } from 'redux';
import todoReducer from './todoSlice';

export default combineReducers({
    todos: todoReducer,
})
