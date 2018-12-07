import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Products from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";


const App = createStackNavigator({
    Home: {screen: LoginScreen},
    Products: {screen: Products},
    Product: {screen: ProductScreen}
});

export default createAppContainer(App);
