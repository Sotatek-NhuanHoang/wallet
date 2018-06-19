import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class TransactionScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="TransactionScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <Text>TransactionScreen</Text>

                <GlobalButton
                    title="Home"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default TransactionScreen;
