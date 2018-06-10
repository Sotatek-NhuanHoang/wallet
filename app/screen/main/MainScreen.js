import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
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
import Header from './Header';
import { changeHeaderTitle } from '../../../redux/actions/Actions';

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
    navigationOptions: ({navigation}) => ({
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
);

class MainScreen extends BaseScreen {

  render() {
    return (
      <View style = { styles.container }>
        <ImageBackground
          style = { styles.background }
          source = { Background }/>
        <StatusBar barStyle = 'light-content'/>
        <Header />
        <AppTabNavigator onNavigationStateChange = { this._onTabChange.bind(this) }/>
      </View>
    );
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.isLogOut) {
      this.replace('LoginScreen');
      
      return false;
    }

    return super.shouldComponentUpdate(nextProps, nextStates);
  }

  _onTabChange(prevState, currentState, action) {
    let headerTitle = '';
    if (currentState.index < titles.length) {
      headerTitle = titles[currentState.index];
    }

    this.props.onTabChange(headerTitle);
  }
}

const styles = StyleSheet.create({
  background: CommonStyles.background,

  container: {
    flex: 1
  },
});

function mapDispatchToProps (dispatch) {
  return {
    onTabChange: (title) => dispatch(changeHeaderTitle(title))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(MainScreen);