import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import FormRow from './FormRow'
import { setUserText } from '../actions';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {	

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	onChangeText(text){
		this.setState({ text: text });
	}

	onPress(){
		//
		//console.log(this.props.user);
		if(this.props.user[0] !== undefined){
			if(this.state.text  === this.props.user[0].text){
				this.props.navigation.navigate('Main');
			}else{
				Alert.alert('Senha incorreta!', 'Tente novamente', [{ text: 'Ok', onPress: () => {} }]);
			}
		}else{
			this.props.dispatchSetUserText(this.state.text);
		}
	}

	render(){
		const { user } = this.props
		return(
			<View style={style.container}>
				{ user 
					? <Text style={style.infoText}>Você já está cadastrado no sistema, por favor, insira a sua senha:</Text>
					: <Text style={style.infoText}>Por favor, como é seu primeiro acesso, defina uma senha para entrar no sistema:</Text>
				}
				<View style={style.formContainer}>
					<FormRow>
					<TextInput 
						style={style.textInput} 
						placeholder="******" secureTextEntry 
						value={this.state.text}
						onChangeText={text => this.onChangeText(text)}
					/>
					</FormRow>
					<Button 
						title="Entrar" 
						onPress={() => this.onPress()}
					/>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = {
	dispatchSetUserText: setUserText
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const style = StyleSheet.create({
	container: {
		//paddingLeft: 40,
		//paddingRight: 40,
		paddingBottom: 150,
		flex: 1,
		justifyContent: 'center',
		//alignItems: 'center'
	},
	textInput: {
		//height: 40, 
		borderColor: 'gray', 
		borderBottomWidth: 1,
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5
	},
	infoText: {
		textAlign: 'center', 
		fontSize: 20, 
		paddingLeft: 80, 
		paddingRight: 80, 
		paddingTop: 30, 
		paddingBottom: 30
	},
	formContainer: {
		paddingLeft: 50,
		paddingRight: 50
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
