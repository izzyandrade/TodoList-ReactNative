import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import editingTodoReducer from './editingTodoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	todos: todoListReducer,
	editingTodo: editingTodoReducer,
	user: userReducer
});

export default rootReducer;

