import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import StartGetWalletScreen from './StartGetWalletScreen';
import CreateWalletScreen from './CreateWalletScreen';
import Transitions from '../../../utils/Transitions';
import ExportPrivateKeyScreen from './ExportPrivateKeyScreen';
import BaseScreen from '../../BaseScreen';

import I18n from '../../../res/i18n/i18n';

export default StackNavigator({
  Start: {
    screen: StartGetWalletScreen
  },
  CreateWallet: {
    screen: CreateWalletScreen
  },
  ExportPrivateKey: {
    screen: ExportPrivateKeyScreen
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

// class WalletScreen extends BaseScreen {
//   render() {
//     return (
//       <SafeAreaView style = { styles.container } >
//         <WalletNavigator/>
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
// });

// export default WalletScreen;

// export const WalletNavigator;