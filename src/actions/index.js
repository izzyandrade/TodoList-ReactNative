export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text, description) => ({
	type: ADD_TODO,
	text,
	description
});

export const TOGGLE_DONE = 'TOGGLE_DONE';
export const toggleDone = todoId => ({
	type: TOGGLE_DONE,
	todoId
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = (field, text) => ({
	type: SET_TODO_TEXT,
	field,
	text
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = todo => ({
	type: SET_EDITING_TODO,
	todo
})

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = todo => ({
	type: UPDATE_TODO,
	todo
})

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = todo => ({
	type: DELETE_TODO,
	todo
})

export const SET_USER_TEXT = 'SET_USER_TEXT';
export const setUserText = text => ({
	type: SET_USER_TEXT,
	text
});

export const SET_DEFAULT_TODO = 'SET_DEFAULT_TODO';
export const setDefaultTodo = () => ({
	type: SET_DEFAULT_TODO
});

export const CREATE_NEW_TODO = 'CREATE_NEW_TODO';
export const createNewTodo = () => ({
	type: CREATE_NEW_TODO
})