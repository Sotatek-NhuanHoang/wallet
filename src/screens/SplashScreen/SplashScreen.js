import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import { navigate } from '@utils/NavigationService';

import style from '@styles/screens/SplashScreen/SplashScreen';


export class SplashScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="SplashScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor() {
        super();
        setTimeout(() => {
            navigate('PasswordSettingScreen');
        }, 2000);
    }


    render() {
        return (
            <GlobalContainer style={ style.container }>
                <Text style={ style.appNameText }>DRC Wallet</Text>
            </GlobalContainer>
        );
    }
}


export default SplashScreen;
