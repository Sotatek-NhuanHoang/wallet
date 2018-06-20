import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class DepositScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="DepositScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>DepositScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('CurrencyListScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default DepositScreen;
