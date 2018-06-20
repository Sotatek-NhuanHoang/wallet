import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class WalletScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>WalletScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('CurrencyListScreen')}
                />

                <GlobalButton
                    title="DepositScreen"
                    onPress={() => this.props.navigation.navigate('DepositScreen')}
                />

                <GlobalButton
                    title="WithdrawScreen"
                    onPress={() => this.props.navigation.navigate('WithdrawScreen')}
                />

                <GlobalButton
                    title="TransactionScreen"
                    onPress={() => this.props.navigation.navigate('TransactionScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default WalletScreen;
