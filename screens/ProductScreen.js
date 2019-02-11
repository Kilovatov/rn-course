import React, {Component} from 'react';
import {View, Text, TouchableHighlight, LayoutAnimation} from "react-native";
import styles from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';

export default class ProductScreen extends Component {
    render() {
        const {navigation} = this.props;
        const {addToCart, amount} = this.props.screenProps;
        const product = navigation.getParam('product', {});
        PushNotification.configure({
            onNotification: function() {
                navigation.navigate('Cart');
            }
        });
        return (
            <View style={styles.flexContainer}>
                <View style={styles.productContainer}>
                    <Text style={styles.heading}>
                        <Icon name={"map"} size={40} color="#000"
                              onPress={() => navigation.navigate('Map', {product: product})}/>
                        <Text style={styles.productName}>{product.name}</Text>
                    </Text>
                    <TouchableHighlight onPress={() => {
                        addToCart(product);
                        PushNotification.localNotification({
                            title: `${product.name}`,
                            message: `${product.name} added to cart. You have ${amount+1} products in the cart.`,
                            smallIcon: product.logo
                        });
                    }}>
                        <View style={{...styles.longButton, ...styles.loginButton}}>
                            <Text style={styles.buttonText}>
                                <Icon name={"shopping-cart"} size={20} color="#000"/>
                                <Text>Add to cart </Text>
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.description}> {product.description} </Text>
                    <TouchableHighlight onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                        navigation.navigate('Products');
                    }
                    }>
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