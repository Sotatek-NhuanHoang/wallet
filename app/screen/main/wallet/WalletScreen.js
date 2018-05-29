import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import StartGetWalletScreen from './StartGetWalletScreen';
import CreateWalletScreen from './CreateWalletScreen';

export default StackNavigator({
  Start: {
    screen: StartGetWalletScreen
  },
  Create: {
    screen: CreateWalletScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Start'
});
