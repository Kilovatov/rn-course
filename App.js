import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Products from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import MapScreen from "./screens/MapScreen";

const AppNavigator = createAppContainer(createStackNavigator({
                Home: {screen: LoginScreen},
                Products: {screen: Products},
                Cart: {screen: CartScreen},
                Product: {screen: ProductScreen},
                Map: {screen: MapScreen}
            }));

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
            amount: 0
        }
    }

    addToCart = (product) => {
        const {cart, amount} = this.state;
        if (!cart[product.name]) {
            cart[product.name] = {logo: product.logo, amount: 1};
        } else {
            cart[product.name].amount++;
        }
        this.setState({amount: amount + 1, cart: cart});
    };

    render() {
        return (
            <AppNavigator
                screenProps={ {
                    cart: this.state.cart,
                    amount: this.state.amount,
                    addToCart: this.addToCart,
                } }
            />
        );
    }
}

