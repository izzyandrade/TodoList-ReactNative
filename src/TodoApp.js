import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/';

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<View style={style.container}>
					<TodoForm />
					<TodoList />
				</View>
			</Provider>
		);
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: 50,
		flex: 1,
	}
});

