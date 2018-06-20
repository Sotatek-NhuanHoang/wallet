import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class WalletInitialKeystoreScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialKeystoreScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>WalletInitialKeystoreScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('CurrencyListScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default WalletInitialKeystoreScreen;
