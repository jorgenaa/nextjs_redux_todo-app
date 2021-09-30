import { combineReducers } from "redux";
//import entitiesReducer from './entities'; //For storing multiples reducers
import todoReducer from './todoSlice';

export default combineReducers({
    //entities: entitiesReducer
    todos: todoReducer,
})