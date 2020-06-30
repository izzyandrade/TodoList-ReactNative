import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import InputForm from './InputForm.js';
import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component {

	onChangeText(text){
		this.props.dispatchSetTodoText(text);
	}

	onPress(){
		const { todo } = this.props;
		if(todo.id){
			this.props.dispatchUpdateTodo(todo);
		}else{
			const { text } = todo;
			this.props.dispatchAddTodo(text);
		}
	}

	render(){
		const {text, id} = this.props.todo;
		return(
			<View style={style.formContainer}>
				<View style={style.inputContainer}>
					<InputForm 
						value={text}
						onChangeText={text => this.onChangeText(text)}
					/>
				</View>
				<View style={style.buttonContainer}>
					<Button 
						title={id ? "Editar" : "Add"}
						onPress={() => this.onPress()} 
					/>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	formContainer: {
		flexDirection: 'row',
		paddingRight: 10,
		paddingLeft: 10
	},
	inputContainer: {
		flex: 4,
		paddingRight: 10
	},
	buttonContainer: {
		flex: 1
	}
});

const mapDispatchToProps = {
	dispatchAddTodo: addTodo,
	dispatchSetTodoText: setTodoText,
	dispatchUpdateTodo: updateTodo
}

const mapStateToProps = state => {
	return {
		todo: state.editingTodo
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);