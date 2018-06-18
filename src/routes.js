import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from './screens/Home/HomeScreen';

import headerStyles from './styles/header';


const Routes = createStackNavigator(
    {
        HomeScreen: HomeScreen,
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerStyle: headerStyles.headerStyle,
            headerTintColor: headerStyles.headerTintColor,
            headerTitleStyle: headerStyles.headerTitleStyle,

            headerLeft: (<View />),
            headerRight: (<View />),
        },
    }
);


export default Routes;
