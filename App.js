import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Products from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import MapScreen from "./screens/MapScreen";


const App = createStackNavigator({
    Home: {screen: LoginScreen},
    Products: {screen: Products},
    Product: {screen: ProductScreen},
    Map: {screen: MapScreen}
});

export default createAppContainer(App);
