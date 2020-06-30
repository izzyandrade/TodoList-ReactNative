import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
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
		if(this.props.user !== undefined){
			console.log(this.props.user);
			if(this.state.text  === this.props.user[0].text){
				console.log("Entrou no app");
				this.props.navigation.navigate('Main');
			}else{
				console.log("Senha incorreta");
			}
		}else{
			this.props.dispatchSetUserText(this.state.text);
		}
	}

	render(){
		const { user } = this.props
		return(
			<View>
				{ user 
					? <Text style={{textAlign: 'center', fontSize: 20}}>Por favor, entre com seus dados:</Text>
					: <Text style={{textAlign: 'center', fontSize: 20}}>Por favor, cadastre-se no sistema:</Text>
				}
				<FormRow first>
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
		paddingLeft: 40,
		paddingRight: 40,
		paddingBottom: 150,
		flex: 1,
		justifyContent: 'center',
	},
	textInput: {
		//height: 40, 
		borderColor: 'gray', 
		borderBottomWidth: 1,
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
