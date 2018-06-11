import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import StartGetWalletScreen from './StartGetWalletScreen';
import CreateWalletScreen from './CreateWalletScreen';
import Transitions from '../../../utils/Transitions';
import ExportPrivateKeyScreen from './ExportPrivateKeyScreen';
import { connect } from 'react-redux';

import ShowPrivateKeyScreen from './ShowPrivateKeyScreen';
import BaseNavigatorWrapperScreen, { mapStateToProps } from '../../BaseNavigatorWrapperScreen';

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
  transitionConfig: Transitions.opacityTransition
});

class WalletScreen extends BaseNavigatorWrapperScreen {
  render() {
    return (
      <WalletStackNavigator ref = { this.navigationRef } />
    )
  }
}

export default connect(mapStateToProps)(WalletScreen);