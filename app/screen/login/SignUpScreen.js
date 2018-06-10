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
  Button,
  PixelRatio,
  Modal,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
import { CommonStyles, CommonSize, CommonColors } from '../../utils/CommonStyles';
import ActionSheet from 'react-native-actionsheet';
import _ from 'lodash';

const Background = require('../../../assets/common/background.png');
const Logo = require('../../../assets/common/logo.png');
const DownArrowIcon = require('../../../assets/common/ic_down_arrow.png');

export default class SignUpScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      alertVisibility: false,
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      phone: '',
      code: '',
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
      },


    };
    this.focusNextField = this._focusNextField.bind(this);
    this.inputs = {};
  }


  _checkEmail(email) {
    let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(email);
  }

  _focusNextField(id) {
    this.inputs[id].focus();
  }

  _onPressSignUp() {

  }

  _goBackLogin() {
    this.goBack();
  }

  _onGetCode() {
    this.setState({ showModal: true });
    this._showAlert(true)
  }

  _showAlert(visible) {
    this.setState({ alertVisibility: visible });
  }

  renderModal() {
    if (this.state.showModal) {
      return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Modal
            animationType = "fade"
            transparent={true}
            visible={this.state.alertVisibility}
            onRequestClose={() => {
              this._showAlert(!this.state.alertVisibility)
            }}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }} >
              <View style={styles.modalContent}>
                <View style={styles.noticeContainer}>
                  <Text style={styles.noticeText}>{I18n.t('alert.notice').toUpperCase()}</Text>

                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.modalText}>{I18n.t('alert.notice_msg')}</Text>
                </View>
                <View style={{ flex: 2 }} />

                <View>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                      this.setState({ showModal: false })
                      this._showAlert(false);
                    }}>
                    <Text style={styles.buttonText}>{I18n.t('common.ok').toUpperCase()}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} />
              </View>
            </View>
          </Modal>
        </View>
      )
    }
    return (<View style={{ flex: 1 }}></View>);

  }

  _showActionSheet = () => {
    this._actionSheet.show()
  }
  render() {
    const actionSheetOptions = [
      _.capitalize(I18n.t('common.cancel')),
      'Korea',
      'USA',
      'Japan',
      'Vietnam',
    ];
    return (
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}
        style={ styles.screen }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
        <StatusBar barStyle='light-content' />
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={Keyboard.dismiss}
          accessible={false}>
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }} />

            <View style={styles.containerLogo}>
              <Image
                style={styles.imageView}
                source={ Logo }
              />
              <Text
                style = { styles.welcome } >
                <Text style = {{ fontSize: 44, fontWeight: 'bold' }}>{ 'WWW' }</Text>
                <Text>{'\n'}</Text>
                <Text style = {{ fontSize: 24 }}>{ 'coin wallet' }</Text>
              </Text>
            </View>

            <View style={{ flex: 1 }} />

            <Text style={styles.title}>
              {I18n.t('common.sign_up').toUpperCase()}
            </Text>

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
                  placeholder={I18n.t('common.placeholder.enter_id')}
                  blurOnSubmit={false}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.focusNextField('two')}
                  returnKeyType={"next"}
                  onChangeText={(text) => this.setState({ email: text })}
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
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  placeholder={I18n.t('common.placeholder.enter_password')}
                  underlineColorAndroid='transparent'
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  onSubmitEditing={() => this.focusNextField('three')}
                  onChangeText={(text) => this.setState({ password: text })}
                  ref={input => this.inputs.two = input} />
              </View>

              <View style={styles.line} />
              <View style={styles.seperatorInput} />
              
              <View style={styles.inputRow}>
                <Text style={styles.titleInput}>
                  {I18n.t('sign_up.confirm_password').toUpperCase()}
                </Text>

                <TextInput
                  style={styles.input}
                  value={this.state.confirmPassword}
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  placeholder={I18n.t('common.placeholder.enter_password_again')}
                  underlineColorAndroid='transparent'
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  onSubmitEditing={() => this.focusNextField('four')}
                  onChangeText={(text) => this.setState({ confirmPassword: text })}
                  ref={input => this.inputs.three = input} />
              </View>
              <View style={styles.line} />
              <View style={styles.seperatorInput} />
              <View style={styles.inputRow}>
                <Text style={styles.titleInput}>
                  {I18n.t('sign_up.country').toUpperCase()}
                </Text>

                <View style={styles.dropdown}>
                  <ActionSheet
                    ref={ref => this._actionSheet = ref}
                    options={actionSheetOptions}
                    cancelButtonIndex={0}
                    onPress={(index) => {
                      if (index != 0)
                        this.setState({ country: actionSheetOptions[index] })
                    }}
                  />

                  <TouchableOpacity
                    onPress={this._showActionSheet.bind(this)}
                    style={styles.buttonDropArrow}>
                    <Text style={styles.countryText}>
                      {this.state.country}
                    </Text>
                    <Image
                      style={styles.downArrow}
                      source={ DownArrowIcon }
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.line} />
              <View style={styles.seperatorInput} />
              <View style={styles.inputRow}>
                <Text style={styles.titleInput}>
                  {I18n.t('sign_up.phone').toUpperCase()}
                </Text>

                <TextInput
                  style={styles.input}
                  value={this.state.phone}
                  secureTextEntry={false}
                  placeholderTextColor='gray'
                  placeholder={I18n.t('common.placeholder.enter_phone_number')}
                  underlineColorAndroid='transparent'
                  returnKeyType={"next"}
                  keyboardType='numeric'
                  blurOnSubmit={false}
                  onSubmitEditing={() => this.focusNextField('five')}
                  onChangeText={(text) => this.setState({ phone: text })}
                  ref={input => this.inputs.four = input} />
              </View>
              <View style={styles.line} />
              <View style={styles.seperatorInput} />
              <View style={styles.inputRow}>
                <TouchableOpacity
                  onPress={this._onGetCode.bind(this)}
                  style={styles.buttonGetCode} >
                  <Text style={styles.buttonGetCodeText}>
                    {I18n.t('sign_up.code').toUpperCase()}
                  </Text>
                </TouchableOpacity>
                <View style = {{ flex: 1 }} />
                <TextInput
                  style={styles.input}
                  value={this.state.code}
                  secureTextEntry={false}
                  placeholderTextColor='gray'
                  placeholder={I18n.t('common.placeholder.enter_code')}
                  keyboardType='numeric'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ code: text })}
                  ref={input => this.inputs.five = input} />
              </View>
              <View style={styles.line} />
            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={this._goBackLogin.bind(this)}
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
            {this.renderModal()}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: CommonStyles.background,

  scrollView: {
  },
  screen: CommonStyles.screen,

  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 30,
    marginEnd: 30
  },
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginStart: 30,
    marginEnd: 30
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
  downArrow: {
    width: 10,
    height: 16,
    resizeMode: 'contain'
  },
  buttonDropArrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: 1
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  titleInput: {
    width: '40%',
    color: 'white',
    fontWeight: 'bold',
  },
  countryText: {
    flex: 1,
    color: 'white',
    textAlign: 'right',
    alignItems: 'center',
    marginEnd: 5
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonLogin: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  buttonGetCode: {
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#f99b20',
    marginEnd: 5,
    paddingStart: 15,
    paddingEnd: 15
  },
  buttonGetCodeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },

  buttonSignup: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: CommonColors.bgSignUpColor
  },
  input: {
    height: 40,
    textAlign: 'right',
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    paddingLeft: 10,
    backgroundColor: 'transparent',
    width: '60%'
  },
  dropdown: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  dropdownText: {
    textAlign: 'right',
    alignSelf: 'center',
    color: 'white',
  },
  line: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  seperatorInput: {
    alignSelf: 'stretch',
    marginTop: 2,
    marginBottom: 2,
  },
  modalButton: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    height: 40,
    paddingStart: 15,
    paddingEnd: 15
  },

  modalContent: {
    backgroundColor: '#2b2a2a',
    borderRadius: 2,
    width: 2 * (width / 3),
    height: width / 2 + 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    marginStart: 10,
    marginEnd: 10,
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  noticeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  noticeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474545',
    height: 30,
    width: '100%',
    alignSelf: 'stretch'
  }
});
