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

    componentWillMount() {
        if (this.props.globalStateLoaded) {
            this.redirect(this.props.password);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.globalStateLoaded) {
            this.redirect(nextProps.password);
        }
    }

    componentWillUpdate() {
        return false;
    }

    redirect(password) {
        if (password) {
            setTimeout(() => {
                navigate('CurrencyListScreen', {}, true);
            }, 2000);
        } else {
            setTimeout(() => {
                navigate('PasswordSettingScreen', {}, true);
            }, 2000);
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


const mapStateToProps = ({ global }) => ({
    password: global.password,
    globalStateLoaded: global._persist.rehydrated,
});

export default connect(mapStateToProps)(SplashScreen);
