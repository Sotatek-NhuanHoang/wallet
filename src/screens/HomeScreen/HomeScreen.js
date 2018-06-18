import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Loc } from 'react-native-redux-i18n';

import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalButton from '@components/GlobalButton';


export class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <Loc locKey="HomeScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <GlobalButton
                    type="basic"
                    onPress={() => { console.log('nhuan'); }}
                    title="Haha"
                />
            </GlobalContainer>
        );
    }
}


export default HomeScreen;
