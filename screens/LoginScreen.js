import React, { Component } from 'react';
import { TextInput, View, Text, TouchableHighlight, NetInfo, Animated, Easing, AsyncStorage, Vibration } from "react-native";
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import OfflineNote from '../components/OfflineNote';
import SplashScreen from 'react-native-splash-screen'
import { Sentry, SentrySeverity } from 'react-native-sentry';

const PATTERN = [100, 500, 500];

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        offline: false,
        fadeAnim: new Animated.Value(0),
        colorAnim: new Animated.Value(0),
        loggedIn: false
    };

    _storeData = async (email, token) => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('token', token);
        } catch (error) {}
    };

    _retrieveData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            const token = await AsyncStorage.getItem('token');
            if (email !== null && token !== null ) {
                this.setState({email: email, loggedIn: true});
                Sentry.setUserContext({
                    email: email,
                });
            }
        } catch (error) {}
    };

    proceed = () => this.props.navigation.navigate('Products');

    login = () => {
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 100,
                }
            ).start();
        const {navigate} = this.props.navigation;
        fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
            method: 'post',
            body: `{"username":"${this.state.email}", "password":"${this.state.password}"}`,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((token) => {
            if (typeof token === 'string') {
                this._storeData(this.state.email, token).then(
                    () => {
                        Sentry.setUserContext({
                            email: this.state.email,
                        });
                        navigate('Products');
                    }
                );
            } else {
                this.setState({error: token.message});
                Animated.sequence([
                    Animated.spring(
                        this.state.fadeAnim,
                        {
                            toValue: 1,
                        }
                    ),
                    Animated.timing(
                        this.state.colorAnim,
                        {
                            toValue: 300,
                            duration: 1500,
                            easing: Easing.inOut(Easing.ease),
                        }
                    )
                ]).start();
                Vibration.vibrate(PATTERN);
                Sentry.captureMessage(`login attempt failed: ${this.state.email} `, {
                    level: SentrySeverity.Warning
                });
            }
        }, (error) => {
            this.setState({error: error.message});
            Sentry.captureMessage(`fetch failed: ${this.state.email} `, {
                level: SentrySeverity.Warning
            });
            navigate('Products');
        });
    };
    handleConnectionChange = (isConnected) => {
        this.setState({ offline: !isConnected });
    };

    componentDidMount() {
        SplashScreen.hide();
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({ offline: !isConnected }); }
        );

        this._retrieveData();
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }

    render() {
        let { fadeAnim, colorAnim } = this.state;
        const color = colorAnim.interpolate({
            inputRange: [0, 100, 300],
            outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(255, 100, 100, 1)']
        });

        return (
            <View>
                {this.state.offline && <OfflineNote/>}
                <Icon style={styles.smile} name="smile-o" size={32} color="#000" />
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
                {this.state.loggedIn &&
                    <TouchableHighlight onPress={this.proceed}>
                        <View style={{...styles.longButton, ...styles.continueButton}}>
                            <Text style={styles.buttonText}>
                                Continue as {this.state.email}
                            </Text>
                        </View>
                    </TouchableHighlight>
                }
                <Animated.View style={{...styles.longButton, opacity: fadeAnim}}>
                    <Animated.Text style={{...styles.buttonText, color: color}}>
                        {this.state.error}
                    </Animated.Text>
                </Animated.View>
            </View>

        );
    }
}