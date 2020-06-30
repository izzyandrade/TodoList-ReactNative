import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import TodoListItem from './TodoListItem';
import { toggleDone, setEditingTodo, deleteTodo } from '../actions/';
import { connect } from 'react-redux';

const TodoList = ({ todos, dispatchToggleDone, dispatchSetEditingTodo, dispatchDeleteTodo }) => (
	<FlatList 
		data={todos}
		renderItem={({ item }) => (
			<TodoListItem 
        		todo={item} 
				onPressTodo={() => dispatchToggleDone(item.id)} 
				onLongPressTodo={() => {
					dispatchSetEditingTodo(item);
				}}
				onPressDeleteTodo={() => dispatchDeleteTodo(item)}
        	/> 
		)}
		keyExtractor={todo => todo.id.toString()}
	/>
);

const mapStateToProps = state => {
	const { todos } = state;
	return { todos };
}

export default connect(
	mapStateToProps,
	{ 
		dispatchToggleDone: toggleDone,
		dispatchSetEditingTodo: setEditingTodo,
		dispatchDeleteTodo: deleteTodo,
	}
)(TodoList);