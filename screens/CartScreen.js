import React, {Component} from 'react';
import {FlatList, Text, View, LayoutAnimation, TouchableHighlight} from 'react-native';
import styles from '../styles/styles'
import {CartRow} from "../components/CartRow";

export default class CartScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const {cart} = this.props.screenProps;
        return (
            <View style={{flex: 1}}>
                <Text style={styles.welcome}>Products in the cart</Text>
                <FlatList
                    keyExtractor={(item) => '' + item.id}
                    data={Object.keys(cart).map(key => ({name: key, amount: cart[key].amount}))}
                    renderItem={
                        ({item}) =>
                            <CartRow item={item} />
                    }
                />
                <TouchableHighlight onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    navigate('Products');
                }
                }>
                    <View style={{...styles.productsButton, ...styles.loginButton}}>
                        <Text style={styles.buttonText}>
                            All products
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
