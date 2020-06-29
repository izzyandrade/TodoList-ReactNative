import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoListItem from './TodoListItem';
import { toggleDone, setEditingTodo } from '../actions/';
import { connect } from 'react-redux';

const TodoList = ({ todos, dispatchToggleDone, dispatchSetEditingTodo }) => (
	<View>
		{todos.map(todo => <TodoListItem 
								key={todo.id} 
								todo={todo} 
								onPressTodo={() => dispatchToggleDone(todo.id)} 
								onLongPressTodo={() => dispatchSetEditingTodo(todo)}
							/>
		)}
	</View>
);

const mapStateToProps = state => {
	const { todos } = state;
	return { todos };
}

export default connect(
	mapStateToProps,
	{ 
		dispatchToggleDone: toggleDone,
		dispatchSetEditingTodo: setEditingTodo
	}
)(TodoList);