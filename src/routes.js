import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from '@screens/SplashScreen/SplashScreen';
import PasswordSettingScreen from '@screens/PasswordSettingScreen/PasswordSettingScreen';
import CurrencyListScreen from '@screens/CurrencyListScreen/CurrencyListScreen';
import WebViewScreen from '@screens/WebViewScreen/WebViewScreen';

import SettingScreen from './screens/Setting/SettingScreen/SettingScreen';
import LanguageScreen from './screens/Setting/LanguageScreen/LanguageScreen';
import PrivateKeyScreen from './screens/Setting/PrivateKeyScreen/PrivateKeyScreen';

import WalletInitialSettingScreen from '@screens/WalletInitialSetting/WalletInitialSettingScreen/WalletInitialSettingScreen';
import WalletInitialPrivateKeyScreen from '@screens/WalletInitialSetting/WalletInitialPrivateKeyScreen/WalletInitialPrivateKeyScreen';
import WalletInitialImportScreen from '@screens/WalletInitialSetting/WalletInitialImportScreen/WalletInitialImportScreen';

import WalletScreen from '@screens/Wallet/WalletScreen/WalletScreen';
import ReceiveScreen from '@screens/Wallet/ReceiveScreen/ReceiveScreen';
import WithdrawScreen from '@screens/Wallet/WithdrawScreen/WithdrawScreen';
import WithdrawConfirmScreen from '@screens/Wallet/WithdrawConfirmScreen/WithdrawConfirmScreen';
import TransactionScreen from '@screens/Wallet/TransactionScreen/TransactionScreen';
import QRScanScreen from '@screens/Wallet/QRScanScreen/QRScanScreen';

import HeaderStyle from '@styles/header';


const defaultNavigationOptions = {
    headerStyle: HeaderStyle.headerStyle,
    headerTintColor: HeaderStyle.headerTintColor,
    headerTitleStyle: HeaderStyle.headerTitleStyle,

    headerLeft: (<View />),
    headerRight: (<View />),
};

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 0,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const thisSceneIndex = scene.index
            const width = layout.initWidth
            const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0],
            });

            return { transform: [ { translateX } ] }
        },
    };
};

export const Routes = createStackNavigator(
    {
        SplashScreen: SplashScreen,
        PasswordSettingScreen: PasswordSettingScreen,
        CurrencyListScreen: CurrencyListScreen,
        Setting: createStackNavigator(
            {
                SettingScreen: SettingScreen,
                LanguageScreen: LanguageScreen,
                PrivateKeyScreen: PrivateKeyScreen,
            },
            {
                initialRouteName: 'SettingScreen',
                navigationOptions: { ...defaultNavigationOptions },
                transitionConfig,
            }
        ),
        WalletInitialSetting: createStackNavigator(
            {
                WalletInitialSettingScreen: WalletInitialSettingScreen,
                WalletInitialPrivateKeyScreen: WalletInitialPrivateKeyScreen,
                WalletInitialImportScreen: WalletInitialImportScreen,
            },
            {
                initialRouteName: 'WalletInitialSettingScreen',
                navigationOptions: { ...defaultNavigationOptions },
                transitionConfig,
            }
        ),
        Wallet: createStackNavigator(
            {
                WalletScreen: WalletScreen,
                ReceiveScreen: ReceiveScreen,
                WithdrawScreen: WithdrawScreen,
                WithdrawConfirmScreen: WithdrawConfirmScreen,
                TransactionScreen: TransactionScreen,
                QRScanScreen: QRScanScreen,
            },
            {
                initialRouteName: 'WalletScreen',
                navigationOptions: { ...defaultNavigationOptions },
                transitionConfig,
            }
        ),
        WebViewScreen: WebViewScreen,
    },
    {
        initialRouteName: 'Wallet',
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
        transitionConfig,
    }
);


export default Routes;
