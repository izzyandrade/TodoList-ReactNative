import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const InputForm = ({onChangeText, value}) => (
	<TextInput
		style={style.input}
		onChangeText={onChangeText}
		value={value}
		underlineColorAndroid='#000'
		placeholder="Adicione uma nova tarefa"
	/>
);

const style = StyleSheet.create({
	input: {
		paddingLeft: 20,
		paddingBottom: 15,
		paddingRight: 15,
	}
});

export default InputForm;