import React, { Component } from 'react';
import { Text, WebView } from 'react-native';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import WebViewHeaderTitle from './WebViewHeaderTitle';

export class WebViewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <WebViewHeaderTitle navigation={ navigation } />
        )
    });


    render() {
        const { navigation } = this.props;
        const url = navigation.getParam('url', 'https://www.google.com');
        return (
            <WebView
                source={{ uri: url }}
            />
        );
    }
}


export default WebViewScreen;
