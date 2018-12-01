import React, { Component } from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import products from '../products';
import styles from '../styles/styles'
import Icon from "react-native-vector-icons/FontAwesome";

export default class Products extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={styles.welcome}>Products</Text>
                <FlatList
                    data={Object.keys(products)
                        .map(productName =>
                         Object.assign({key: productName}, products[productName]))
                    }
                    renderItem={
                        ({item}) =>
                        <View style={styles.row}>
                            <Icon style={styles.iconBefore} name={item.logo} size={20} color="#000" />
                            <Text style={styles.buttonText}>
                                {item.key}
                            </Text>
                            <TouchableHighlight style={styles.iconAfter} onPress={() => navigate('Product', {product: item})}>
                                <Icon name="arrow-circle-right" size={20} color="#000"/>
                            </TouchableHighlight>
                        </View>
                    }
                />
            </View>
        );
    }
}
