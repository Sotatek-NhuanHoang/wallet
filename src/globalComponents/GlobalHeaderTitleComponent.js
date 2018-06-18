import React from 'react';
import { View, Text } from 'react-native';

import { GlobalHeaderTitleComponentStyle as style } from 'fake/src/styleLoader';


export const GlobalHeaderTitleComponent = (props) => {
    return (
        <View style={ style.container }>
            <Text style={ style.titleText }>
                { props.children }
            </Text>
        </View>
    );
};


export default GlobalHeaderTitleComponent;
