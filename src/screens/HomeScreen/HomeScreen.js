import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


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
                    title="Setting"
                    onPress={() => this.props.navigation.navigate('Setting')}
                />

                <GlobalButton
                    title="Wallet initial setting"
                    onPress={() => this.props.navigation.navigate('WalletInitialSettingScreen')}
                />

                 <GlobalButton
                    title="Wallet"
                    onPress={() => this.props.navigation.navigate('Wallet')}
                />
            </GlobalContainer>
        );
    }
}


export default HomeScreen;
