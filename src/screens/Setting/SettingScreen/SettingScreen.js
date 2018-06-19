import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';


export class SettingScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="SettingScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        return (
            <GlobalContainer>
                <GlobalButton
                    title="HomeScreen"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />

                <GlobalButton
                    title="LanguageScreen"
                    onPress={() => this.props.navigation.navigate('LanguageScreen')}
                />
            </GlobalContainer>
        );
    }
}


export default SettingScreen;
