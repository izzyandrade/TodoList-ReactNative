import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackScreen from './navigation/StackScreen';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { PersistGate } from "redux-persist/es/integration/react";
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers/';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default class TodoApp extends React.Component {

	render(){
		return(
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavigationContainer>
						{StackScreen()}
					</NavigationContainer>
				</PersistGate>
			</Provider>
		);
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: 50,
		flex: 1,
	}
});

