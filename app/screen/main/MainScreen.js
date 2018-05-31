import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
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
import Header from './Header';
import { CommonStyles } from '../../utils/CommonStyles';

const Background = require('../../../assets/common/background.png');

const titles = [
  I18n.t('common.wallet').toUpperCase(),
  I18n.t('common.deposit').toUpperCase(),
  I18n.t('common.send').toUpperCase(),
  I18n.t('common.history').toUpperCase()
]

const TabRouteConfig = {
  Wallet: {
    screen: WalletScreen,
    navigationOptions: {
      tabBarLabel: titles[0]
    }
  },
  Deposit: {
    screen: DepositScreen,
    navigationOptions: {
      tabBarLabel: titles[1]
    }
  },
  Send: {
    screen: SendScreen,
    navigationOptions: {
      tabBarLabel: titles[2]
    }
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarLabel: titles[3]
    }
  }
}

const AppTabNavigator = TabNavigator(
  TabRouteConfig,
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: false,
      activeTintColor: 'yellow',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'black'
      }
    },
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none'
  }
)

class MainScreen extends BaseScreen {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      headerTitle: titles[0]
    }
  }

  render() {
    return (
      <View style = { styles.container }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
        <Header title = { this.state.headerTitle } onOpenMenu = { this._openMenu.bind(this) }/>
        <AppTabNavigator onNavigationStateChange = { this._onTabChange.bind(this) }/>
      </View>
    );
  }

  _onTabChange(prevState, currentState, action) {
    let headerTitle = '';
    if (currentState.index < titles.length) {
      headerTitle = titles[currentState.index];
    }

    this.setState({ headerTitle });
  }

  _openMenu() {

  }
}

const styles = StyleSheet.create({
  background: CommonStyles.background,

  container: {
    flex: 1,
    flexDirection: 'column'
  },
});

export default MainScreen;