import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import HTMLView from 'react-native-htmlview';
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

class CreateWalletScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'bitkoex@bitkoex.com',
      editable: true,
      secretCode: null
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior = 'position' style = { styles.container } >
        <Text style = { styles.email }>
          { this.state.userEmail }
        </Text>
        <Text style = { styles.subTitle }>
          { I18n.t('start.no_account').toUpperCase() }
        </Text>

        <HTMLView
          style = { styles.description }
          value = { I18n.t('create_wallet.description_html') }
          stylesheet = { htmlStyles }/>

        <View style = { styles.inputContainer }>
          <Text style = {{ color: 'white', fontSize: 11, marginEnd: 10, width: 40, textAlign: 'center' }}>
            { I18n.t('common.secret_code').toUpperCase() }
          </Text>

          {this._renderInputCode()}
          
          <TouchableOpacity
            style = { styles.buttonOk }
            onPress = { this._onOkPress.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { this.state.editable ? I18n.t('common.ok').toUpperCase() : I18n.t('common.edit').toUpperCase() }
            </Text>
          </TouchableOpacity>
        </View>
        
        {this._renderMakeAccountButton()}
        
      </KeyboardAvoidingView>
    )
  }

  _onOkPress() {
    this.setState({
      editable: !this.state.editable
    })
  }

  _onBack() {

  }

  _onMakeAccount() {

  }

  _onTextChanged(text) {
    this.setState({
      secretCode: text
    })
  }

  _renderInputCode() {
    if (this.state.editable) {
      return (
      <TextInput 
        style = { styles.input }
        keyboard
        multiline = { false }
        editable = { this.state.editable }
        onChangeText = { this._onTextChanged.bind(this) }
        value = { this.state.secretCode } />
      )
    }
    else {
      return (
        <Text style = { styles.inputDisable }>
          { this.state.secretCode }
        </Text>
      )
    }
  }

  _renderMakeAccountButton() {
    if (!this.state.editable) {
      return (
        <View style = { styles.bottomButtonContainer }>
          <TouchableOpacity
            style = { styles.buttonBack }
            onPress = { this._onBack.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { I18n.t('common.back').toUpperCase() }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = { styles.buttonMakeAccount }
            onPress = { this._onMakeAccount.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { I18n.t('common.make_account') }
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (<View style = {{ marginTop: 20, height: 40 }}/>);
    }
  }
}

const htmlStyles = StyleSheet.create({
  div: {
    paddingStart: 30,
    paddingEnd: 30,
    color: 'white',
    fontSize: 14
  },

  span: {
    color: '#FFC000',
    fontSize: 14
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  email: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },

  subTitle: {
    marginTop: 15,
    fontSize: 12,
    color: 'white',
    alignSelf: 'center'
  },

  description: {
    marginTop: 30
  },

  buttonOk: {
    backgroundColor: '#FFC000',
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10
  },

  buttonBack: {
    backgroundColor: '#00B0F0',
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonMakeAccount: {
    flex: 1,
    backgroundColor: '#F7931A',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10
  },

  buttonTitle: {
    fontSize: 14,
    color: 'white'
  },

  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 30,
    paddingEnd: 30
  },

  bottomButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 50,
    paddingEnd: 50
  },

  input: {
    backgroundColor: 'white',
    flex: 1,
    height: 40,
    color: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  inputDisable: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default CreateWalletScreen;