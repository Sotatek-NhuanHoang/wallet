import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class WalletInitialPasswordScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialPasswordScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>WalletInitialPasswordScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />

                <GlobalButton
                    title="WalletInitialKeystoreScreen"
                    onPress={() => this.props.navigation.navigate('WalletInitialKeystoreScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default WalletInitialPasswordScreen;
