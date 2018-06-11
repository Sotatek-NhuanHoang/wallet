import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import I18n from '../../res/i18n/i18n';
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import WalletScreen from './wallet/WalletScreen';
import DepositScreen from './deposit/DepositScreen';
import SendScreen from './send/SendScreen';
import HistoryScreen from './history/HistoryScreen';
import Header from './Header';
import { changeHeaderTitle } from '../../../redux/actions/Actions';
import BaseNavigatorWrapperScreen, { mapStateToProps } from '../BaseNavigatorWrapperScreen';

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

class MainScreen extends BaseNavigatorWrapperScreen {

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.navigationAction) {
      this.navigator.dispatch(NavigationActions.navigate({
        routeName: 'Wallet',
        params: {}
      }))
      return super.shouldComponentUpdate(nextProps, nextStates);
    }

    return true;
  }

  render() {
    return (
      <View style = { styles.container }>
        <StatusBar barStyle = 'light-content'/>
        <Header />
        <AppTabNavigator ref = { this.navigationRef } onNavigationStateChange = { this._onTabChange.bind(this) }/>
      </View>
    );
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
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);