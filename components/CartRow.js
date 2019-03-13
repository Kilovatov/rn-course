import React, {Component} from "react";
import {Text, TouchableHighlight, View} from "react-native";
import styles from "../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome";

export class CartRow extends Component {
    render() {
        return <View>
            <View  style={styles.row}>
                <Icon style={styles.iconBefore} name={this.props.item.logo} size={20} color="#000"/>
                <Text style={styles.buttonText}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.iconAfter} onPress={this.props.onPress}>
                    {this.props.item.amount}
                </Text>
            </View>
        </View>;
    }
}
