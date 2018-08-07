import React, { Component } from 'react';
import { Text } from 'react-native';

import GlobalHeaderTitle from 'components/GlobalHeaderTitle';

export const WebViewHeaderTitle = (props) => {
    const { navigation } = props;
    const title = navigation.getParam('title', '');

    return (
        <GlobalHeaderTitle>
            <Text>{ title }</Text>
        </GlobalHeaderTitle>
    );
};

export default WebViewHeaderTitle;
