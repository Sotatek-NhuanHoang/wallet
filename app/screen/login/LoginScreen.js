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
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />

        <KeyboardAvoidingView
          behavior={'position'}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}
          style={{ flex: 1, }}>
          <ImageBackground
            style = { styles.background }
            source = { Background }/>

          <TouchableWithoutFeedback
            style={{ flex: 1, }}
            onPress={ Keyboard.dismiss }
            accessible={false}>
            <View style={{ flex: 1, }}>
              <View style={{ flex: 1 }} />

              <View style={styles.containerLogo}>
                <Image
                  style={styles.imageView}
                  source={ Logo }
                />
                <Text style={styles.welcome}>{`WWW \n coin wallet`}</Text>
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
                    placeholder={'enter id'}
                    blurOnSubmit={false}
                    underlineColorAndroid='transparent'
                    onSubmitEditing={() => this.focusNextField('two')}
                    returnKeyType={"next"}
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({ email: text })}
                    ref={input => this.inputs['one'] = input}
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
                    placeholder={'enter password'}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ password: text })}
                    ref={input => this.inputs['two'] = input} />
                </View>
                <View style={styles.line} />

              </View>

              <View style={{ flex: 1 }} />

              <View style={styles.containerButton}>
                <TouchableOpacity
                  onPress={this._onPressLogin.bind(this)}
                  style={styles.buttonLogin} >
                  <Text style={styles.buttonText}>
                    {I18n.t('login.login').toUpperCase()}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this._onPressSignUp.bind(this)}
                  style={styles.buttonSignup} >
                  <Text style={styles.buttonText}>
                    {I18n.t('login.sign_up').toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }} />
            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: CommonStyles.background,

  scrollView: {
  },
  screen: {
    ...CommonStyles.screen,
    paddingLeft: 15,
    paddingRight: 15,
  },
  containerInput: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  containerLogo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30 * PixelRatio.getFontScale(),
    fontWeight: 'bold',
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
    marginTop: 0,
  },
  input: {
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    flex: 1,
    textAlign: 'right',
    color: 'white',
    fontSize: 15 * PixelRatio.getFontScale(),
    borderWidth: 1,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
    borderColor: CommonColors.screenBgColor,
    backgroundColor: CommonColors.screenBgColor,

  },
  buttonText: {
    color: 'white',
    fontSize: 15 * PixelRatio.getFontScale(),
    fontWeight: '300',
    textAlign: 'center',

  },
  buttonLogin: {
    flex: 1,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
    backgroundColor: CommonColors.bgLoginColor,
    borderWidth: 1,
    borderColor: CommonColors.bgLoginColor,

  },
  buttonSignup: {
    flex: 1,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
    backgroundColor: CommonColors.bgSignUpColor,
    borderWidth: 1,
    borderColor: CommonColors.bgSignUpColor,
  },
  seperator: {
    alignSelf: 'stretch',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  seperatorInput: {
    alignSelf: 'stretch',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  line: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  titleInput: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
  },
});