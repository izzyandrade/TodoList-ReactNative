import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo, onPressDeleteTodo }) => (
	<TouchableOpacity 
		onPress={onPressTodo}
		onLongPress={onLongPressTodo}			  	
	>
		<View style={style.line}>
			<Text style={style.lineMarking}>{todo.done ? '[X]' : '[ ]' }</Text>
		    <Text style={[
		    		style.lineText,
		    		todo.done ? style.textMarked : null
		    	]}>{ todo.text }
		    </Text>
		    <View>
		   		<Button color='red' onPress={onPressDeleteTodo} title="Excluir"/>
		    </View>
		</View>     
	</TouchableOpacity>
);

const style = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row'
	},

	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7,
		color: 'blue'
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

	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 15,
		borderRadius: 50
	}
})

export default TodoListItem;