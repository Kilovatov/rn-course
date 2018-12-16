import React, {Component} from 'react';
import {FlatList, Text, View, RefreshControl} from 'react-native';
import products from '../products';
import styles from '../styles/styles'
import {ProductRow} from "../components/ProductRow";

export default class Products extends Component {
    state = {products: products, error: '', enableScrollViewScroll: true, productsNumber: 15};
    _onRefresh = () => {
        this.setState({refreshing: true});
        fetch('http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=' + this.state.productsNumber)
            .then((response) => response.json())
            .then((products) => {
                this.setState({
                    products: products.map(product => {
                        return {
                            name: product.name,
                            description: product.price,
                            logo: "thumbs-o-up"
                        };
                    }),
                    refreshing: false
                });
            }).catch(error => {
            this.setState({
                error: error.message,
                refreshing: false
            });
        });
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text style={styles.welcome}>Products</Text>
                <FlatList
                    keyExtractor={(item) => item.id}
                    initialNumToRender={13}
                    data={products.items}
                    renderItem={
                        ({item}) =>
                            <ProductRow item={item} onPress={() => navigate('Product', {product: item})}/>
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    onEndReached={() => {
                        this.setState({productsNumber: this.state.productsNumber + 13});
                        this._onRefresh();
                    }}
                />
                <View style={{...styles.longButton}}>
                    <Text style={styles.buttonText}>
                        {this.state.error}
                    </Text>
                </View>
            </View>
        );
    }
}
