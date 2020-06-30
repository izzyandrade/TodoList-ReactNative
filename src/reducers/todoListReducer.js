import { ADD_TODO, TOGGLE_DONE, UPDATE_TODO, DELETE_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
	switch(action.type){

		case ADD_TODO:
			if(action.text === ''){
				return state;
			}
			const newTodo = {
				id: state.length + 1,
				text: action.text,
				description: action.description,
				done: false
			}
			return [...state, newTodo];

		case TOGGLE_DONE:
			return state.map(todo => {
				if(todo.id === action.todoId){
					return {
						...todo,
						done: !todo.done
					}
				} else {
					return todo;
				}
			})

		case UPDATE_TODO:
			return state.map(todo => {
				if(todo.id === action.todo.id){
					return action.todo;
				}
				return todo;
			});

		case DELETE_TODO:
			return state.filter( todo => todo.id !== action.todo.id );

		default:
			return state;
	}
}

export default todoListReducer;