import React, {
  Component
} from 'react';
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
import MainScreen from './main/MainScreen';
import BaseScreen from './BaseScreen';

const Logo = require('../../assets/common/logo.png');

export default class WelcomeScreen extends BaseScreen {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
      this.replace('MainScreen');
    }, 1000);
  }
  
  render() {
    return (
      <View style = { styles.rootView }>
        <View style = { styles.container }>
          <Image
            style = { styles.imageView }
            source = { Logo }/>
          <Text
            style = { styles.welcome } >
            <Text style = {{ fontSize: 44 }}>{ 'WWW' }</Text>
            <Text>{'\n'}</Text>
            <Text style = {{ fontSize: 24 }}>{ 'coin wallet' }</Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  imageView: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  rootView: {
    flex: 1,
    backgroundColor: 'darkgray',
  },
});