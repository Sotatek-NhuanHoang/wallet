import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

class DepositScreen extends BaseScreen {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deposit!</Text>
      </View>
    )
  }
}

export default DepositScreen;