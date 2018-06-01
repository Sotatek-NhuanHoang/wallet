import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar
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
import { CommonStyles } from '../../utils/CommonStyles';
const MenuIcon = require('../../../assets/common/ic_menu.png');
const LogoIcon = require('../../../assets/common/ic_logo.png');
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Header from './Header';

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
      headerTitle: titles[0],
      tabBarLabel: titles[0]
    }
  },
  Deposit: {
    screen: DepositScreen,
    navigationOptions: {
      headerTitle: titles[1],
      tabBarLabel: titles[1]
    }
  },
  Send: {
    screen: SendScreen,
    navigationOptions: {
      headerTitle: titles[2],
      tabBarLabel: titles[2]
    }
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      headerTitle: titles[3],
      tabBarLabel: titles[3]
    }
  }
}

let AppTabNavigator;

class MainScreen extends BaseScreen {
  
  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'bitkoex@bitkoex.com',
      headerTitle: titles[0]
    }

    AppTabNavigator = this._renderTabNavigator();
  }

  render() {
    return (
      <View style = { styles.container }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
        <StatusBar barStyle = 'light-content'/>
        <Header
          title = { this.state.headerTitle }
          userEmail = { this.state.userEmail }
          onExportPrivateKey = { this._onExportPrivateKey.bind(this) }
          onLogout = { this._onLogout.bind(this) }/>
        <AppTabNavigator onNavigationStateChange = { this._onTabChange.bind(this) }/>
      </View>
    );
  }

  _renderTabNavigator() {
    return TabNavigator(
      TabRouteConfig,
      {
        navigationOptions: ({navigation}) => ({
          // headerLeft: this._renderHeaderLeft(),
          // headerRight: this._renderHeaderRight(),
          tabBarIcon: ({focused, route}) => {
            return null;
          }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showIcon: false,
          showLabel: true,
          activeTintColor: '#FFC000',
          inactiveTintColor: '#D9D9D9',
          style: {
            backgroundColor: 'black',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          }
        },
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'none'
      }
    )
  }

  _onTabChange(prevState, currentState, action) {
    let headerTitle = '';
    if (currentState.index < titles.length) {
      headerTitle = titles[currentState.index];
    }

    this.setState({ headerTitle });
  }

  // _renderHeaderLeft() {
  //   return (
  //     <View style = { styles.logoContainer }>
  //       <Image
  //         style = { styles.leftImage }
  //         source = { LogoIcon }/>
  //       <Text
  //         style = { styles.logoTitle }>
  //         { I18n.t('welcome.brand') }
  //       </Text>
  //     </View>
  //   )
  // }

  // _renderHeaderRight() {
  //   return (
  //     <Menu
  //       ref = { ref => this._menu = ref }
  //       button = { this._renderRightButton() }>
  //       <MenuItem>{ this.state.userEmail }</MenuItem>
  //       <MenuItem onPress={ this._onExportPrivateKey.bind(this) }>
  //         { I18n.t('menu.export_private_key') }
  //       </MenuItem>
  //       <MenuItem onPress={ this._onLogout.bind(this) }>
  //         { I18n.t('menu.logout') }
  //       </MenuItem>
  //     </Menu>
  //   )
  // }

  // _renderRightButton() {
  //   return (
  //     <TouchableOpacity
  //       style = { styles.rightButton }
  //       onPress = { this._onOpenMenu.bind(this) }>
  //       <Image
  //         style = { styles.rightButtonImage }
  //         source = { MenuIcon }/>
  //     </TouchableOpacity>
  //   )
  // }

  _onExportPrivateKey() {
    // this._menu.hide();
  }

  _onLogout() {
    this.replace('LoginScreen');
    // this._menu.hide();
  }

  // _onOpenMenu() {
  //   this._menu.show();
  // }
}

const styles = StyleSheet.create({
  background: CommonStyles.background,

  container: {
    flex: 1
  },
});

export default MainScreen;