import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';

import { navigate } from '@utils/NavigationService';


export class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="HomeScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>Home Screen</Text>

                <GlobalButton
                    type="secondary"
                    title="Setting"
                    onPress={() => navigate('Setting')}
                />

                <GlobalButton
                    title="Wallet initial setting"
                    onPress={() => navigate('WalletInitialSettingScreen')}
                />

                 <GlobalButton
                    title="Wallet"
                    onPress={() => navigate('Wallet')}
                />
            </GlobalContainer>
        );
    }
}


export default HomeScreen;
