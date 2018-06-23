import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import { navigate } from '@utils/NavigationService';
import { GLOBAL_CHANGE_PASSWORD, GLOBAL_COIN_LIST_REQUESTED } from '@store/global';

import style from '@styles/screens/SplashScreen/SplashScreen';
import web3 from 'web3';

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
    }

    async componentDidMount() {
        const savedPassword = 'haha';
        console.log(web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff2323'))


        if (savedPassword) {
            this.props.changePassword(savedPassword);
            this.props.getCoinList();

            setTimeout(() => {
                navigate('CurrencyListScreen', {}, true);
            }, 400);
        } else {
            setTimeout(() => {
                navigate('PasswordSettingScreen', {}, true);
            }, 400);
        }
    }


    render() {
        return (
            <GlobalContainer style={ style.container }>
                <Text style={ style.appNameText }>DRC Wallet</Text>
            </GlobalContainer>
        );
    }
}


const mapDispathToProps = (dispatch) => ({
    changePassword: (newPassword) => {
        dispatch(GLOBAL_CHANGE_PASSWORD(newPassword));
    },
    getCoinList: () => {
        dispatch(GLOBAL_COIN_LIST_REQUESTED());
    },
});

export default connect(null, mapDispathToProps)(SplashScreen);
