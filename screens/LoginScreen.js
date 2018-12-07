import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from "react-native";
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Icon style={styles.smile}name="smile-o" size={32} color="#000" />
                <Text style={styles.welcome}>Friday's shop</Text>
                <TouchableHighlight>
                    <View style={{...styles.longButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            email
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{...styles.longButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            Text box
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('Products')}>
                    <View style={{...styles.shortButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}