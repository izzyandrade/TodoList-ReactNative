import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoListItem from './TodoListItem';
import { toggleDone, setEditingTodo, deleteTodo } from '../actions/';
import { connect } from 'react-redux';

const TodoList = ({ todos, dispatchToggleDone, dispatchSetEditingTodo, dispatchDeleteTodo }) => (
	<View>
		{todos.map(todo => <TodoListItem 
								key={todo.id} 
								todo={todo} 
								onPressTodo={() => dispatchToggleDone(todo.id)} 
								onLongPressTodo={() => dispatchSetEditingTodo(todo)}
								onPressDeleteTodo={() => dispatchDeleteTodo(todo)}
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
		dispatchSetEditingTodo: setEditingTodo,
		dispatchDeleteTodo: deleteTodo,
	}
)(TodoList);