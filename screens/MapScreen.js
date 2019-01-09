import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React, {Component} from "react";
import {View} from "react-native";
import styles from '../styles/styles';
import call from 'react-native-phone-call';


export default class MapScreen extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        callArgs: {
            number: '9093900003',
            prompt: true
        }
    };

    render() {
        const { navigation } = this.props;
        const product = navigation.getParam('product', {});
        return (
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE}
                region={this.state.region}
                style={styles.map}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78,
                        longitude: -122.43,
                    }}
                    title={`You can buy ${product.name} here`}
                    description={'Click to call the store'}
                    onCalloutPress={() => call(this.state.callArgs)}
                />
            </MapView>
            </View>
        );
    }
}