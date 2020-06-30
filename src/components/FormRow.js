import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FormRow = props => {
	const { children, first, last } = props;
	return (
		<View style={[
			style.container, 
			first ? style.first : null, 
			last ? style.last : null]}>
				{children}
		</View>
	)
};

const style = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		elevation: 3,
		width: '100%'
	},
	first: {
		marginTop: 10
	},
	last: {
		marginBottom: 10
	}
});

export default FormRow;