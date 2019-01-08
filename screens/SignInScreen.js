import React, { Component } from 'react';
import { AsyncStorage, Button, StyleSheet, View, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { ApolloConsumer } from 'react-apollo';

import GET_USER from '../components/gql/query/user';

export default class SignInScreen extends Component {
	state = {
		email: '',
		password: ''
	};
	render() {
		return (
			<ApolloConsumer>
				{(client) => (
					<View style={styles.container}>
						<Image
							style={styles.logo}
							source={{ uri: 'https://img15.androidappsapk.co/300/e/c/c/com.hmmg.forja.png' }}
						/>
						<TextInput
							underlineColorAndroid="transparent"
							placeholder="Numéro de téléphone, e-mail ou nom d'utilisateur"
							style={styles.inputs}
							placeholderStyle={styles.inputsplaceholder}
							onChangeText={(email) => this.setState({ email })}
							value={this.state.email}
						/>
						<TextInput
							underlineColorAndroid="transparent"
							placeholder="Mot de passe"
							style={styles.inputs}
							secureTextEntry={true}
							onChangeText={(password) => this.setState({ password })}
							value={this.state.password}
						/>
						<TouchableOpacity
							onPress={async () => {
								const { email, password } = this.state;
								const { data } = await client.query({
									query: GET_USER,
									variables: { email, password }
								});
								this._signInAsync(data);
							}}
							style={styles.buttons}
						>
							<Text style={styles.loginTxt}> CONNEXION </Text>
						</TouchableOpacity>
					</View>
				)}
			</ApolloConsumer>
		);
	}

	_signInAsync = async ({ user }) => {
		const { navigate } = this.props.navigation;
		if (user.name) {
			await AsyncStorage.setItem('superUserToken', user.name);
			navigate('App');
		} else {
			this.setState({
				email: '',
				password: ''
			});
			Alert.alert('Auth error', 'Whooops  :) \ntry again');
		}
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: '#777'
	},
	inputs: {
		margin: 10,
		width: 350,
		height: 50,
		borderColor: '#fff',
		backgroundColor: '#666',
		borderWidth: 1,
		borderRadius: 2,
		fontSize: 15,
		color: '#fff',
		textAlign: 'center'
	},
	inputsplaceholder: {
		margin: 5
	},
	buttons: {
		backgroundColor: 'grey',
		color: 'black',
		fontSize: 15,
		width: 350,
		height: 50,
		borderColor: '#fff',
		backgroundColor: '#666',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 180,
		height: 180
	},
	loginTxt: {
		color: '#fff',
		textAlign: 'center'
	}
});
