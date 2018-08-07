import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import { navigate } from 'services/NavigationService';

import style from 'styles/screens/SplashScreen/SplashScreen';


export class SplashScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="SplashScreen.title" />
            </GlobalHeaderTitle>
        ),
    };

    async componentDidMount() {
        setTimeout(() => {
            navigate('PasswordSettingScreen', {}, true);
        }, 400);
    }


    render() {
        return (
            <GlobalContainer style={ style.container }>
                <Text style={ style.appNameText }>DRC Wallet</Text>
            </GlobalContainer>
        );
    }
}


export default connect()(SplashScreen);
