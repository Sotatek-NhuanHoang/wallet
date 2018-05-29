import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import I18n from '../../res/i18n/i18n';
import BaseScreen from '../BaseScreen';
import {
  TabRoute,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import WalletScreen from './wallet/WalletScreen';
import DepositScreen from './deposit/DepositScreen';
import SendScreen from './send/SendScreen';
import HistoryScreen from './history/HistoryScreen';

export default TabNavigator({
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('common.wallet').toUpperCase()
      }
    },
    Deposit: {
      screen: DepositScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('common.deposit').toUpperCase()
      }
    },
    Send: {
      screen: SendScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('common.send').toUpperCase()
      }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('common.history').toUpperCase()
      }
    }
  },

  {
    navigationOptions: ({
      navigation
    }) => ({}),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: false,
      upperCaseLabel: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none'
  }
)