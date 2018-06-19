import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalTextInput from '@components/GlobalTextInput';


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
                <Text>Text input primary</Text>
                <GlobalTextInput type="primary" style={{ marginBottom: 30 }} />

                <Text>Text input basic</Text>
                <GlobalTextInput type="basic" style={{ marginBottom: 30 }} />

                <Text>Text input basic - multiline </Text>
                <GlobalTextInput type="basic" multiline={true} />
            </GlobalContainer>
        );
    }
}


export default HomeScreen;
