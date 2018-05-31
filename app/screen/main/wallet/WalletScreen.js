import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import StartGetWalletScreen from './StartGetWalletScreen';
import CreateWalletScreen from './CreateWalletScreen';
import Transitions from '../../../utils/Transitions';

export default StackNavigator({
  Start: {
    screen: StartGetWalletScreen
  },
  CreateWallet: {
    screen: CreateWalletScreen
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
