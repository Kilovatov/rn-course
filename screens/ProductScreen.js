import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from "react-native";
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductScreen extends Component {
    render() {
        const { navigation } = this.props;
        const product = navigation.getParam('product', {});
        return (
            <View style={styles.flexContainer}>
                <View style={styles.productContainer}>
                <Text style={styles.heading}>
                        <Icon name={"map"} size={40} color="#000" onPress={() => navigation.navigate('Map',  {product: product})}/>
                    <Text style={styles.productName}>{product.name}</Text>
                </Text>
                <Text style={styles.description}> {product.description} </Text>
                <TouchableHighlight onPress={() => navigation.navigate('Products')}>
                    <View style={{...styles.productsButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            All products
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
            </View>

        );
    }
}