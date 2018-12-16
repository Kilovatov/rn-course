import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import products from '../products';
import styles from '../styles/styles'
import {ProductRow} from "../components/ProductRow";

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
                        <ProductRow item={item} onPress={() => navigate('Product', {product: item})}/>
                    }
                />
            </View>
        );
    }
}
