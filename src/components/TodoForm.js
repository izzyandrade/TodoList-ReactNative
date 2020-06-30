import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, TouchableHighlight, Modal } from 'react-native';
import InputForm from './InputForm.js';
import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo, setDefaultTodo, createNewTodo } from '../actions';

class TodoForm extends React.Component {

	constructor(props){
		super(props);
	}

	onChangeHandler(field, text){
		this.props.dispatchSetTodoText(field, text);
	}

	onPress(){
		const { todo } = this.props;
		if(todo.id){
			this.props.dispatchUpdateTodo(todo);
		}else{
			const { text, description } = todo;
			this.props.dispatchAddTodo(text, description);
			this.props.dispatchSetDefaultTodo();
		}
	}
	
	render(){
		//const [modalVisible, setModalVisible] = useState(false);
		const {text, description, id, modal} = this.props.todo;
		return(
			<View style={style.formContainer}>

				<TouchableHighlight
			        style={style.openButton}
			        onPress={() => {
			          this.props.dispatchCreateNewTodo();
			        }}
			    >
			        <Text style={style.modalTextStyle}>Adicionar nova tarefa</Text>
      			</TouchableHighlight>
      			<Text style={{textAlign: 'center'}}>Para editar uma tarefa, mantenha pressionada</Text>
      			<Modal
			        animationType="slide"
			        transparent={true}
			        visible={ modal ? true : false }
			        onRequestClose={() => {}}
			    >
			    	<View style={style.centeredView}>
			        	<View style={style.modalView}>
			            	<Text style={style.modalText}>{id ? "Editar" : "Adicionar"}:</Text>
							<View style={style.inputContainer}>
								<View style={style.inputBlock}>
									<Text style={style.inputTextLabel}>Nome da tarefa:</Text>
									<InputForm 
										value={text}
										onChangeText={text => this.onChangeHandler('nome', text)}
									/>
								</View>
								<View style={style.inputBlock}>
									<Text style={style.inputTextLabel}>Descrição da tarefa:</Text>
									<InputForm 
										value={description}
										onChangeText={text => this.onChangeHandler('description', text)}
									/>
								</View>
							</View>
							<View style={style.buttonContainer}>
								<TouchableHighlight 
									style={{ ...style.openButton, backgroundColor: "#0daaff" }}
									onPress={() => this.onPress()} 
								>
									<Text style={style.modalTextStyle}>{id ? "Editar" : "Add"}</Text>
								</TouchableHighlight>
							</View>
				            <TouchableHighlight
				             	style={{ ...style.openButton, backgroundColor: "#f5b0a6" }}
				              	onPress={() => {
				                	this.props.dispatchSetDefaultTodo();
				              	}}
				            >
				              <Text style={style.modalTextStyle}>Cancelar</Text>
				            </TouchableHighlight>
			          	</View>
			        </View>
			    </Modal>
			</View>
		);
	}
}

const style = StyleSheet.create({
	formContainer: {
		//flexDirection: 'row',
		padding: 25
	},
	inputContainer: {
		paddingBottom: 20
	},
	buttonContainer: {
		paddingBottom: 20
	},
	inputBlock: {
		paddingBottom: 30
	},
	openButton: {
	   backgroundColor: "#F194FF",
	   borderRadius: 20,
	   padding: 10,
	   elevation: 2
	}, 
	modalTextStyle: {
	   color: "white",
	   fontWeight: "bold",
	   textAlign: "center"
	},
	centeredView: {
	    flex: 1,
	    justifyContent: "center",
	    alignItems: "center",
	    marginTop: 22
  	},
  	modalView: {
	    margin: 40,
	    backgroundColor: "white",
	    borderRadius: 20,
	    padding: 35,
	    alignItems: "center",
	    shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 2
	    },
	    shadowOpacity: 0.25,
	    shadowRadius: 3.84,
	    elevation: 5
	},
	modalText: {
	    marginBottom: 30,
	    textAlign: "center",
	    fontWeight: 'bold',
	    fontSize: 20
 	},
 	inputTextLabel: {
 		paddingBottom: 10,
 		fontWeight: 'bold'
 	}
});

const mapDispatchToProps = {
	dispatchAddTodo: addTodo,
	dispatchSetTodoText: setTodoText,
	dispatchUpdateTodo: updateTodo,
	dispatchSetDefaultTodo: setDefaultTodo,
	dispatchCreateNewTodo: createNewTodo
}

const mapStateToProps = state => {
	return {
		todo: state.editingTodo
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);