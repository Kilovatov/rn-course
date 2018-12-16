import React, {Component} from "react";
import {Text, TouchableHighlight, View} from "react-native";
import styles from "../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome";

export class ProductRow extends Component {
    render() {
        return <View>
            <View  style={styles.row}>
            <Icon style={styles.iconBefore} name={this.props.item.logo} size={20} color="#000"/>
            <Text style={styles.buttonText}>
                {this.props.item.name}
            </Text>
            <TouchableHighlight style={styles.iconAfter} onPress={this.props.onPress}>
                <Icon name="arrow-circle-right" size={20} color="#000"/>
            </TouchableHighlight>
            </View>
        </View>;
    }
}
