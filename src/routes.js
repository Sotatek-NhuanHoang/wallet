import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@screens/HomeScreen/HomeScreen';

import SettingScreen from './screens/Setting/SettingScreen/SettingScreen';
import LanguageScreen from './screens/Setting/LanguageScreen/LanguageScreen';

import WalletInitialSettingScreen from '@screens/WalletInitialSetting/WalletInitialSettingScreen/WalletInitialSettingScreen';
import WalletInitialPasswordScreen from '@screens/WalletInitialSetting/WalletInitialPasswordScreen/WalletInitialPasswordScreen';
import WalletInitialKeystoreScreen from '@screens/WalletInitialSetting/WalletInitialKeystoreScreen/WalletInitialKeystoreScreen';
import WalletInitialImportScreen from '@screens/WalletInitialSetting/WalletInitialImportScreen/WalletInitialImportScreen';

import WalletScreen from '@screens/Wallet/WalletScreen/WalletScreen';
import DepositScreen from '@screens/Wallet/DepositScreen/DepositScreen';
import WithdrawScreen from '@screens/Wallet/WithdrawScreen/WithdrawScreen';
import TransactionScreen from '@screens/Wallet/TransactionScreen/TransactionScreen';

import HeaderStyle from '@styles/header';


const defaultNavigationOptions = {
    headerStyle: HeaderStyle.headerStyle,
    headerTintColor: HeaderStyle.headerTintColor,
    headerTitleStyle: HeaderStyle.headerTitleStyle,

    headerLeft: (<View />),
    headerRight: (<View />),
};

export const Routes = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        Setting: createStackNavigator(
            {
                SettingScreen: SettingScreen,
                LanguageScreen: LanguageScreen,
            },
            {
                initialRouteName: 'SettingScreen',
                navigationOptions: { ...defaultNavigationOptions },
            }
        ),
        WalletInitialSetting: createStackNavigator(
            {
                WalletInitialSettingScreen: WalletInitialSettingScreen,
                WalletInitialPasswordScreen: WalletInitialPasswordScreen,
                WalletInitialKeystoreScreen: WalletInitialKeystoreScreen,
                WalletInitialImportScreen: WalletInitialImportScreen,
            },
            {
                initialRouteName: 'WalletInitialSettingScreen',
                navigationOptions: { ...defaultNavigationOptions },
            }
        ),
        Wallet: createStackNavigator(
            {
                WalletScreen: WalletScreen,
                DepositScreen: DepositScreen,
                WithdrawScreen: WithdrawScreen,
                TransactionScreen: TransactionScreen,
            },
            {
                initialRouteName: 'TransactionScreen',
                navigationOptions: { ...defaultNavigationOptions },
            }
        ),
    },
    {
        initialRouteName: 'Wallet',
        navigationOptions: ({ navigation }) => {
            const options = { ...defaultNavigationOptions };

            switch (navigation.state.routeName) {
                case 'Setting':
                case 'WalletInitialSetting':
                case 'Wallet':
                    options.header = null;
                    break;
            }

            return options;
        },
    }
);


export default Routes;
