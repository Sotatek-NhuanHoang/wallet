import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import SettingButton from './SettingButton';
import BtcComponent from './BtcComponent';
import EthComponent from './EthComponent';
import DrcComponent from './DrcComponent';

import style from 'styles/screens/CurrencyListScreen/CurrencyListScreen';


export class CurrencyListScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="CurrencyListScreen.title" />
            </GlobalHeaderTitle>
        ),
        headerRight: (
            <SettingButton />
        ),
    };


    constructor(props) {
        super(props);
        this.onDeviceBackButtonPress = this.onDeviceBackButtonPress.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    };

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    }

    onDeviceBackButtonPress() {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp(),
            }, ], {
                cancelable: false
            }
        )
        return true;
    }


    render() {
        return (
            <GlobalContainer style={ style.container }>
                <BtcComponent />
                <EthComponent />
                <DrcComponent />
            </GlobalContainer>
        );
    }
}


export default CurrencyListScreen;
