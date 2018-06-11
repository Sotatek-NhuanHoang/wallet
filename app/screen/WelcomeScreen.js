import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import BaseScreen from './BaseScreen';
import { CommonStyles } from '../utils/CommonStyles';

const Background = require('../../assets/common/background.png');
const Logo = require('../../assets/common/logo.png');

export default class WelcomeScreen extends BaseScreen {
  componentDidMount() {
    setTimeout(() => {
      // SplashScreen.hide();
      this.replace('LoginScreen');
    }, 1000);
  }
  
  render() {
    return (
      <ImageBackground
        style = { styles.rootView }
        source = { Background }>
        <View style = { styles.container }>
          <Image
            style = { styles.imageView }
            source = { Logo }/>
          <Text
            style = { styles.welcome } >
            <Text style = {{ fontSize: 44, fontWeight: 'bold' }}>{ 'WWW' }</Text>
            <Text>{'\n'}</Text>
            <Text style = {{ fontSize: 24 }}>{ 'coin wallet' }</Text>
          </Text>
        </View>
      </ImageBackground>
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
    color: 'white',
  },
  imageView: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  rootView: {
    flex: 1
  },
});