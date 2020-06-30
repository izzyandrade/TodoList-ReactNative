import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../components/MainScreen';
import LoginScreen from '../components/LoginScreen';

const Stack = createStackNavigator();

function StackScreen() {
  	return (
	    <Stack.Navigator
			screenOptions={{
				title: 'Tarefas',
				headerTintColor: 'white',
				headerStyle: {
                    backgroundColor: '#6ca2f7',
                    borderBottomWidth: 1,
                    borderBottomColor: '#c5c5c5',
                },
                headerTitleStyle: {
                        color: 'white',
                        fontSize: 25,
                        textAlign: 'center'
                },
			}}
	    >
            <Stack.Screen 
                name='Login'
                component={LoginScreen}
                options={{title: 'Login'}}
            />
            <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    headerLeft: null
                }}
            />
        </Stack.Navigator> 
  	);
}

export default StackScreen;