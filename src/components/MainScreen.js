import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class MainScreen extends React.Component {
	render(){
		return(
			<View style={{flexDirection: 'column', flex: 1}}>
				<TodoForm />
				<TodoList />
			</View>
		);
	}
}