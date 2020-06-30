import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo, onPressDeleteTodo }) => (
	<TouchableOpacity 
		onPress={onPressTodo}
		onLongPress={onLongPressTodo}			  	
	>
		<View style={style.line}>
			<Text style={style.lineMarking}>{todo.done ? '[X]' : '[ ]' }</Text>
			<View style={style.textContainer}>
				<Text style={[
			    		style.lineText,
			    		todo.done ? style.textMarked : null
			    	]}>{ `${todo.text}` }
			    </Text>
			    { todo.description !== ''
			    	? <Text style={style.lineDescription}>{`Descrição: ${todo.description}`}</Text>
			    	: <Text style={style.lineDescription}>{"Sem descrição"}</Text>
			    }
			</View>
		    <View style={style.buttonStyle}>
		   		<Button color='red' onPress={onPressDeleteTodo} title="Excluir"/>
		    </View>
		</View>     
	</TouchableOpacity>
);

const style = StyleSheet.create({
	line: {
		//padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row'
	},

	textContainer: {
		flexDirection: 'column', 
		flex: 6, 
		padding: 20
	},

	lineText: {
		fontSize: 20,
		color: 'blue'
	},

	lineDescription: {
		fontSize: 15,
		color: 'black'
	},

	lineMarking: {
		fontSize: 20,
		paddingLeft: 15,
		color: 'black'
	},

	textMarked: {
		textDecorationLine: 'line-through',
		color: 'red'
	},

	buttonStyle: {
		flex: 2,
		paddingRight: 10
	}

})

export default TodoListItem;