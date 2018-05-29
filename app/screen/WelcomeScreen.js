import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    PixelRatio
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './login/LoginScreen';
import BaseScreen from './BaseScreen';
export default class WelcomeScreen extends BaseScreen {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
            this.navigate('Login');
        }, 1000);
    }
    render() {

        return (
            <View style={styles.rootView}>
                <View style={styles.container}>
                    <Image
                        style={styles.imageView}
                        source={{ uri: 'https://olm.vn/images/avt/avt3/avt666223_256by256.jpg' }}
                    />
                    <Text style={styles.welcome}>{`WWW \n coin wallet`}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        welcome: {
            textAlign: 'center',
            fontSize: 30 * PixelRatio.getFontScale(),
            fontWeight: 'bold',
            color: 'black',
        },
        imageView: {
            width: 300,
            height: 300,
            resizeMode: 'contain',
        },
        rootView: {
            flex: 1,
            backgroundColor: 'darkgray',

        },
       
    }
);