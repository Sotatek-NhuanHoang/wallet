import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from '@screens/SplashScreen/SplashScreen';
import CurrencyListScreen from '@screens/CurrencyListScreen/CurrencyListScreen';
import WebViewScreen from '@screens/WebViewScreen/WebViewScreen';

import SettingScreen from './screens/Setting/SettingScreen/SettingScreen';
import LanguageScreen from './screens/Setting/LanguageScreen/LanguageScreen';

import WalletInitialSettingScreen from '@screens/WalletInitialSetting/WalletInitialSettingScreen/WalletInitialSettingScreen';
import WalletInitialPasswordScreen from '@screens/WalletInitialSetting/WalletInitialPasswordScreen/WalletInitialPasswordScreen';
import WalletInitialPrivateKeyScreen from '@screens/WalletInitialSetting/WalletInitialPrivateKeyScreen/WalletInitialPrivateKeyScreen';
import WalletInitialImportScreen from '@screens/WalletInitialSetting/WalletInitialImportScreen/WalletInitialImportScreen';

import WalletScreen from '@screens/Wallet/WalletScreen/WalletScreen';
import ReceiveScreen from '@screens/Wallet/ReceiveScreen/ReceiveScreen';
import WithdrawScreen from '@screens/Wallet/WithdrawScreen/WithdrawScreen';
import TransactionScreen from '@screens/Wallet/TransactionScreen/TransactionScreen';

import PasswordSettingScreen from '@screens/Setting/PasswordSettingScreen/PasswordSettingScreen';

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
        SplashScreen: SplashScreen,
        CurrencyListScreen: CurrencyListScreen,
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
                WalletInitialPrivateKeyScreen: WalletInitialPrivateKeyScreen,
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
                ReceiveScreen: ReceiveScreen,
                WithdrawScreen: WithdrawScreen,
                TransactionScreen: TransactionScreen,
            },
            {
                initialRouteName: 'WalletScreen',
                navigationOptions: { ...defaultNavigationOptions },
            }
        ),
        WebViewScreen: WebViewScreen,
        PasswordSettingScreen: PasswordSettingScreen,
    },
    {
        initialRouteName: 'PasswordSettingScreen',
        navigationOptions: ({ navigation }) => {
            const options = { ...defaultNavigationOptions };

            switch (navigation.state.routeName) {
                case 'SplashScreen':
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
