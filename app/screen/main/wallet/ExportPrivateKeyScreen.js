import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

class ExportPrivateKeyScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'bitkoex@bitkoex.com',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior = 'height' style = { styles.container } >
        <Text style = { styles.email }>
          { this.state.userEmail }
        </Text>
        <Text style = { styles.subTitle }>
          { I18n.t('export_private_key.input_description') }
        </Text>

        <View style = { styles.inputContainer }>
          <Text style = {{ color: 'white', fontSize: 11, marginEnd: 10, width: 40, textAlign: 'center' }}>
            { I18n.t('common.secret_code').toUpperCase() }
          </Text>

          <TextInput 
            ref = { ref => this._codeTextInput = ref }
            style = { styles.input }
            keyboard
            multiline = { false }
            value = { this.state.secretCode } />
        </View>

        <View style = { styles.bottomButtonContainer }>
          <TouchableOpacity
            style = { styles.buttonSubmit }
            onPress = { this._onSubmit.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { I18n.t('common.submit').toUpperCase() }
            </Text>
          </TouchableOpacity>
          <View style = { styles.spaceView } ></View>
          <TouchableOpacity
            style = { styles.buttonCancel }
            onPress = { this._onCancel.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { I18n.t('common.cancel').toUpperCase() }
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

  _onSubmit() {

  }

  _onCancel() {

  }
}

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
    marginTop: 30,
    fontSize: 14,
    color: 'white'
  },

  button: {
    marginTop: 30,
    backgroundColor: '#0065B8',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 60,
    paddingEnd: 60
  },

  buttonTitle: {
    fontSize: 14,
    color: 'white'
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

  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 50,
    paddingEnd: 50
  },

  bottomButtonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 50,
    paddingEnd: 50
  },

  buttonSubmit: {
    flex: 1,
    backgroundColor: '#00B0F0',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCancel: {
    flex: 1,
    backgroundColor: '#F7931A',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10
  },

  spaceView: {
    width: 5
  }
});

export default ExportPrivateKeyScreen;