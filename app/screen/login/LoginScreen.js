import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  PixelRatio,
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
import { CommonStyles, CommonSize, CommonColors } from '../../utils/CommonStyles';
const Background = require('../../../assets/common/background.png');
const Logo = require('../../../assets/common/logo.png');

export default class LoginScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      email: 'bitkoex@bitkoex.com',
      password: '123123',
      errEmail: {
        isShow: false,
        message: ''
      },
      errPassword: {
        isShow: false,
        message: ''
      },
      errMessage: {
        isShow: false,
        message: ''
      }
    };
    this.focusNextField = this._focusNextField.bind(this);
    this.inputs = {};
  }

  _focusNextField(id) {
    this.inputs[id].focus();
  }

  _checkEmail(email) {
    let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(email);
  }

  _onPressLogin() {
    console.log(this.state.email, this.state.password);
    this.replace('MainScreen');
  }

  _onPressSignUp() {
    this.navigate('SignUpScreen', {})
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior = 'position'
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}
        style={ styles.screen }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
        <StatusBar barStyle='light-content' />
        <TouchableWithoutFeedback
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          onPress={ Keyboard.dismiss }
          accessible={false}>
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }} />

            <View style={styles.containerLogo}>
              <Image
                style={styles.imageView}
                source={ Logo }/>
              <Text
                style = { styles.welcome } >
                <Text style = {{ fontSize: 44, fontWeight: 'bold' }}>{ 'WWW' }</Text>
                <Text>{'\n'}</Text>
                <Text style = {{ fontSize: 24 }}>{ 'coin wallet' }</Text>
              </Text>
            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.containerInput}>
              <View style={styles.inputRow}>
                <Text style={styles.titleInput}>
                  {I18n.t('login.id').toUpperCase()}
                </Text>

                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  keyboardType='email-address'
                  placeholderTextColor='gray'
                  placeholder={I18n.t('placeholder.enter_id')}
                  blurOnSubmit={false}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.focusNextField('two')}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  onChangeText = {email => this.setState({ email })}
                  ref={input => this.inputs.one = input}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.seperatorInput} />
              <View style={styles.inputRow}>
                <Text style={styles.titleInput}>
                  {I18n.t('login.password').toUpperCase()}
                </Text>

                <TextInput
                  style={styles.input}
                  value={this.state.password}
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  placeholder={I18n.t('placeholder.enter_password')}
                  underlineColorAndroid='transparent'
                  onChangeText = {password => this.setState({ password })}
                  ref={input => this.inputs.two = input} />
              </View>
              <View style={styles.line} />

            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={this._onPressLogin.bind(this)}
                style={styles.buttonLogin} >
                <Text style={styles.buttonText}>
                  {I18n.t('common.login').toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style = {{ width: 10 }} />
              <TouchableOpacity
                onPress={this._onPressSignUp.bind(this)}
                style={styles.buttonSignup} >
                <Text style={styles.buttonText}>
                  {I18n.t('common.sign_up').toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }} />
          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  background: CommonStyles.background,

  scrollView: {
  },
  screen: CommonStyles.screen,
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 50,
    marginEnd: 50
  },
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginStart: 50,
    marginEnd: 50
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginStart: 10,
    textAlign: 'center',
    color: 'white',
  },
  imageView: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    textAlign: 'right',
    color: 'white',
    fontSize: 14,
    paddingLeft: 10,
    backgroundColor: 'transparent',
    width: '60%'
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },

  buttonLogin: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: CommonColors.bgLoginColor,
  },

  buttonSignup: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: CommonColors.bgSignUpColor,
  },
  seperator: {
    alignSelf: 'stretch',
    marginTop: 15,
    marginBottom: 7,
  },
  seperatorInput: {
    alignSelf: 'stretch',
    marginTop: 2,
    marginBottom: 2,
  },
  line: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  titleInput: {
    width: '40%',
    color: 'white',
    fontWeight: 'bold',
  },
});