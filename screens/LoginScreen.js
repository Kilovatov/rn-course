import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight } from "react-native";
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {
    state = {email: '', password: '', error: ''};
    login = () => {
        fetch(' http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
            method: 'post',
            body: `{"username":"${this.state.email}", "password":"${this.state.password}"}`,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((token) => {
            if (typeof token === 'string') {
                const {navigate} = this.props.navigation;
                navigate('Products');
            } else {
                this.setState({error: token.message})
            }
        });
    };
    render() {
        return (
            <View>
                <Icon style={styles.smile}name="smile-o" size={32} color="#000" />
                <Text style={styles.welcome}>Friday's shop</Text>
                <TouchableHighlight>
                    <View style={{...styles.longButton, ...styles.loginButton}}>
                        <TextInput
                            style={styles.buttonText}
                            placeholder={'email'}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{...styles.longButton, ...styles.loginButton}}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.buttonText}
                            placeholder={'password'}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.login}>
                    <View style={{...styles.shortButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={{...styles.longButton}}>
                    <Text style={styles.buttonText}>
                        {this.state.error}
                    </Text>
                </View>
            </View>

        );
    }
}