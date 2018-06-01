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
  PixelRatio,
  ImageBackground
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './login/LoginScreen';
import MainScreen from './main/MainScreen';
import BaseScreen from './BaseScreen';
import { CommonStyles } from '../utils/CommonStyles';

const Background = require('../../assets/common/background.png');
const Logo = require('../../assets/common/logo.png');

export default class WelcomeScreen extends BaseScreen {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
      this.replace('MainScreen');
    }, 1000);
  }
  
  render() {
    return (
      <View style = { styles.rootView }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: CommonStyles.background,

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