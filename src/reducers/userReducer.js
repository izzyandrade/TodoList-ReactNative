import { SET_USER_TEXT } from '../actions';

const userReducer = (state = [], action) => {
	
	switch(action.type){

		case SET_USER_TEXT:
			const newUser = {
				text: action.text,
			}
			console.log(newUser);
			return [...state, newUser];

		default:
			return state;

	}

}

export default userReducer;