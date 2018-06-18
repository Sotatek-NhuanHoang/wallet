import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@screens/HomeScreen/HomeScreen';

import HeaderStyle from '@styles/header';


const Routes = createStackNavigator(
    {
        HomeScreen: HomeScreen,
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerStyle: HeaderStyle.headerStyle,
            headerTintColor: HeaderStyle.headerTintColor,
            headerTitleStyle: HeaderStyle.headerTitleStyle,

            headerLeft: (<View />),
            headerRight: (<View />),
        },
    }
);


export default Routes;
