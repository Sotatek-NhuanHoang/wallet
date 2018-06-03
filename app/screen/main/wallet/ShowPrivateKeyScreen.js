import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Clipboard,
  Alert
} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

class ShowPrivateKeyScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'bitkoex@bitkoex.com',
      privateKey: 'a7cd5fd7dcb3ed17183f786ef7824fae431421'
    }
  }

  render() {
    return (
      <View style = { styles.container } >
        <Text style = { styles.email }>
          { this.state.userEmail }
        </Text>
        <Text style = { styles.subTitle }>
          { I18n.t('common.private_key').toUpperCase() }
        </Text>

        <View style = { styles.privateKeyContainer }>
          <Text
            style = { styles.privateKeyText }
            numberOfLines = {1}
            ellipsizeMode = 'tail'>
            { this.state.privateKey }
          </Text>

          <TouchableOpacity
            style = { styles.buttonCopy }
            onPress = { this._onCopy.bind(this) }>
            <Text style = { styles.buttonTitle }>
              { I18n.t('common.copy').toUpperCase() }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onCopy = async () => {
    await Clipboard.setString(this.state.privateKey);
    Alert.alert(I18n.t('app_name'), I18n.t('alert.done'));
  };
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
    marginTop: 50,
    fontSize: 12,
    color: 'white',
    alignSelf: 'center'
  },

  buttonCopy: {
    backgroundColor: '#FFC000',
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10
  },

  buttonTitle: {
    fontSize: 14,
    color: 'white'
  },

  privateKeyContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 30,
    paddingEnd: 30
  },

  privateKeyText: {
    flex: 1,
    color: 'white',
    fontSize: 16
  }
});

export default ShowPrivateKeyScreen;

