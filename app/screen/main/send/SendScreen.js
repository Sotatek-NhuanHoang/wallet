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
  TouchableWithoutFeedback

} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';
import ActionSheet from 'react-native-actionsheet';
import { CommonStyles, CommonSize, CommonColors } from '../../../utils/CommonStyles';
import _ from 'lodash';

class SendScreen extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      alertVisibility: false,
      coin: 'WWW',
      address: '0x4cb1ca7cd5fd7dcb3',
      amount: '123.1234',
      secretCode: ''
    };
    this.focusNextField = this._focusNextField.bind(this);
    this.inputs = {};
  }

  _focusNextField(id) {
    this.inputs[id].focus();
  }


  _showActionSheet = () => {
    this._actionSheet.show()
  }

  _onPressCancel() {
    this.setState({ showModal: false });
    this._showAlert(false);
  }

  _onPressOk() {
    this.setState({ showModal: false });
    this._showAlert(false);
    //TODO: click ok -> move to HistoryScreen

  }

  _onPressSend() {
    this.setState({ showModal: true });
    this._showAlert(true);
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
            animationType= 'fade'
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
                <View style={styles.secretCodeContainer}>
                  <Text style={styles.secretCodeText}>{I18n.t('alert.secret_code').toUpperCase()}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ marginTop: PixelRatio.getPixelSizeForLayoutSize(5), }}>
                  <TextInput
                    style={styles.inputScretCode}
                    value={this.state.scretCode}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder={I18n.t('send.placeholder.enter_secret_code')}
                    blurOnSubmit={false}
                    underlineColorAndroid='transparent'
                    returnKeyType={"done"}
                    onChangeText={(text) => this.setState({ secretCode: text })}
                  />
                </View>
                <View style={styles.seperatorInput} />
                <View>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {
                      this._onPressOk();
                    }}>
                    <Text style={styles.buttonText}>{I18n.t('alert.ok').toUpperCase()}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} />
              </View>
            </View>
          </Modal>
        </View>
      );
    }
    return null;
  }

  render() {
    const listCoin = [
      _.capitalize(I18n.t('common.cancel')),
      'WWW',
      'WW',
      'W'
    ];
    return (
        <KeyboardAvoidingView
          behavior = 'position'
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}
          style={ styles.screen }>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
            accessible={false}>

            <View style={{ flex: 1, }}>
              <View style={{ flex: 1, }} />

              {this.renderModal()}

              <View style={styles.containerInput}>
                <View style={styles.inputRow}>
                  <Text style={styles.titleInput}>
                    {I18n.t('send.coin').toUpperCase()}
                  </Text>
                  <View style={styles.dropdown}>

                    <ActionSheet
                      ref={ref => this._actionSheet = ref}
                      //title={'Coin?'}
                      options={listCoin}
                      cancelButtonIndex={0}
                      onPress={(index) => {
                        if (index != 0)
                          this.setState({ coin: listCoin[index] })
                      }}
                    />
                    <TouchableOpacity
                      onPress={this._showActionSheet}
                      style={styles.buttonDropArrow}>
                      <Text style={styles.coinText}>
                        {this.state.coin}
                      </Text>
                      <Image
                        style={styles.downArrow}
                        source={require('../../../../assets/common/ic_down_arrow.png')}
                      />
                    </TouchableOpacity>

                  </View>
                </View>

                <View style={styles.line} />

                <View style={styles.inputRow}>
                  <Text style={styles.titleInput}>
                    {I18n.t('send.address').toUpperCase()}
                  </Text>

                  <TextInput
                    style={styles.inputAddress}
                    value={this.state.address}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder={I18n.t('send.placeholder.enter_address')}
                    blurOnSubmit={false}
                    underlineColorAndroid='transparent'
                    onSubmitEditing={() => this.focusNextField('two')}
                    returnKeyType={"next"}
                    onChangeText={(text) => this.setState({ address: text })}
                    ref={input => this.inputs.one = input}
                  />
                </View>

                <View style={styles.line} />

                <View style={styles.inputRow}>

                  <Text style={styles.titleInput}>
                    {I18n.t('send.amount').toUpperCase()}
                  </Text>

                  <TextInput
                    style={styles.input}
                    value={this.state.amount}
                    secureTextEntry={false}
                    placeholderTextColor='gray'
                    placeholder={I18n.t('send.placeholder.enter_amount')}
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ amount: text })}
                    ref={input => this.inputs.two = input} />
                </View>

                <View style={styles.line} />
              </View>

              <View style={styles.seperatorInput} />

              <View style={styles.containerButton}>
                <TouchableOpacity
                  onPress={() => { this._onPressCancel.bind(this) }}
                  style={styles.buttonCancel} >
                  <Text style={styles.buttonText}>
                    {I18n.t('common.cancel').toUpperCase()}
                  </Text>
                </TouchableOpacity>

                <View style = {{ width: 10 }} />

                <TouchableOpacity
                  onPress={this._onPressSend.bind(this)}
                  style={styles.buttonSend} >
                  <Text style={styles.buttonText}>
                    {I18n.t('common.send').toUpperCase()}
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

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollView: {
  },
  screen: CommonStyles.screen,
  containerButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginStart: 50,
    marginEnd: 50
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 50,
    marginEnd: 50
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleInput: {
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
  },
  downArrow: {
    width: 10,
    height: 16,
    resizeMode: 'contain'
  },
  dropdown: {
    justifyContent: 'flex-end',
    flex: 3,
    flexDirection: 'row',
    height: 40,
  },
  buttonDropArrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: 1
  },
  coinText: {
    flex: 1,
    color: 'white',
    textAlign: 'right',
    alignItems: 'center',
    marginEnd: 5
  },
  input: {
    height: 40,
    textAlign: 'right',
    color: 'white',
    fontSize: 14,
    paddingLeft: 10,
    marginTop: 5,
    backgroundColor: 'transparent',
    width: '60%'
  },

  inputAddress: {
    height: 40,
    textAlign: 'left',
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  line: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  buttonCancel: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'gray'
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonSend: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: CommonColors.bgSendColor,
  },
  seperatorInput: {
    alignSelf: 'stretch',
    marginTop: 7,
    marginBottom: 2,
  },
  modalButton: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92D050',
    height: 15,
    width: 70
  },
  inputScretCode: {
    height: 40,
    width: 70,
    textAlign: 'left',
    color: 'black',
    fontSize: 15,
    paddingLeft: 6,
    backgroundColor: 'white',
    borderRadius: 5
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
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  secretCodeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  secretCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474545',
    height: 15,
    width: '100%',
    alignSelf: 'stretch'
  }
});
export default SendScreen;