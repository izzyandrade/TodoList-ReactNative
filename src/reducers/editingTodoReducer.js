import { SET_TODO_TEXT, ADD_TODO, SET_EDITING_TODO, UPDATE_TODO, SET_DEFAULT_TODO, CREATE_NEW_TODO } from '../actions';

const INITIAL_STATE =  {
	id: null,
	text: '',
	description: '',
	done: false,
	modal: false
}

const editingTodoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case SET_TODO_TEXT:
			if(action.field === 'nome'){
				return {
					...state,
					text: action.text
				};
			}else{
				return {
					...state,
					description: action.text
				}
			}
		case CREATE_NEW_TODO:
			return {...INITIAL_STATE, modal: true}
		case ADD_TODO:
		case UPDATE_TODO:
		case SET_DEFAULT_TODO:
			return INITIAL_STATE;
		case SET_EDITING_TODO:
			return {...action.todo, modal: true};
		default:
			return state;
	}
}

export default editingTodoReducer;