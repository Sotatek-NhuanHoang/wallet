import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';
import StartGetWalletScreen from './StartGetWalletScreen';
import CreateWalletScreen from './CreateWalletScreen';
import Transitions from '../../../utils/Transitions';
import ExportPrivateKeyScreen from './ExportPrivateKeyScreen';
import BaseScreen from '../../BaseScreen';
import { connect } from 'react-redux';

import I18n from '../../../res/i18n/i18n';
import ShowPrivateKeyScreen from './ShowPrivateKeyScreen';

const WalletStackNavigator = StackNavigator({
  Start: {
    screen: StartGetWalletScreen
  },
  CreateWallet: {
    screen: CreateWalletScreen
  },
  ExportPrivateKey: {
    screen: ExportPrivateKeyScreen
  },
  ShowPrivateKey: {
    screen: ShowPrivateKeyScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Start',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: Transitions.opacityTransition,
  cardStyle: {
    backgroundColor: 'transparent'
  }
});

class WalletScreen extends Component {
  render() {
    return (
      <WalletStackNavigator />
    )
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.exportPrivateKey) {
      WalletStackNavigator.replace('ExportPrivateKey');
      return false;
    }

    return true;
  }
}

function mapStateToProps (state) {
  return {
    exportPrivateKey: state.navigation.exportPrivateKey 
  }
}

export default connect(mapStateToProps)(WalletScreen);