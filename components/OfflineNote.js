import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, NetInfo} from 'react-native';
import styles from "../styles/styles";

class OfflineNote extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    retry() {
        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({ modalVisible: !isConnected }); }
        );
    }

    render() {
        return (
            <View style={styles.offlineContainer}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.setModalVisible}>
                    <View>
                        <View>
                            <Text style={{...styles.buttonText, ...styles.offlineHeader}}>
                                There is no internet connection.
                                Please turn network connection on and try again.
                            </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.retry();
                                }}>
                                <View style={{...styles.longButton, ...styles.loginButton}}>
                                    <Text style={styles.buttonText}>Try again</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                            <View style={{...styles.longButton, ...styles.loginButton}}>
                                <Text style={styles.buttonText}>Hide Modal</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.offlineText}>NO INTERNET CONNECTION</Text>
                </TouchableHighlight>
            </View>
    );
    }
    }
    export default OfflineNote;