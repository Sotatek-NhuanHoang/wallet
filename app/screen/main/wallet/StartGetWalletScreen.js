import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageView,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

class StartGetWalletScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'bitkoex@bitkoex.com'
    }
  }

  render() {
    return (
      <View style = { styles.container }>
        <Text style = { styles.email }>
          { this.state.userEmail }
        </Text>
        <Text style = { styles.subTitle }>
          { I18n.t('start.no_account').toUpperCase() }
        </Text>
        <TouchableOpacity
          style = { styles.button }
          onPress = { this._onGetStarted.bind(this) }>
          <Text style = { styles.buttonTitle }>
            { I18n.t('start.get_address').toUpperCase() }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onGetStarted() {
    this.replace('CreateWallet');
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
    color: 'white'
  },

  subTitle: {
    marginTop: 15,
    fontSize: 12,
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
  }
});

export default StartGetWalletScreen;