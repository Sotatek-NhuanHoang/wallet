import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
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
        CurrencyListScreen: CurrencyListScreen,
        Setting: createStackNavigator(
            {
                SettingScreen: SettingScreen,
                LanguageScreen: LanguageScreen,
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
                WalletInitialPasswordScreen: WalletInitialPasswordScreen,
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
                TransactionScreen: TransactionScreen,
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
        initialRouteName: 'CurrencyListScreen',
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
