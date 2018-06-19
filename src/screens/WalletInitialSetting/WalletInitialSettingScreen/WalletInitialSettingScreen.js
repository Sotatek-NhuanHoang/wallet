import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class WalletInitialSettingScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialSettingScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>WalletInitialSettingScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />

                <GlobalButton
                    title="WalletInitialPasswordScreen"
                    onPress={() => this.props.navigation.navigate('WalletInitialPasswordScreen')}
                />

                <GlobalButton
                    title="WalletInitialImportScreen"
                    onPress={() => this.props.navigation.navigate('WalletInitialImportScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default WalletInitialSettingScreen;
