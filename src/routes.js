import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from './screenLoader';

import { HeaderStyle } from './styleLoader';


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
