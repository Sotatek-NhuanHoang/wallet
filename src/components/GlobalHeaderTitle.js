import React from 'react';
import { View, Text } from 'react-native';

import style from '@styles/components/GlobalHeaderTitle';


export const GlobalHeaderTitle = (props) => {
    return (
        <View style={ style.container }>
            <Text style={ style.titleText }>
                { props.children }
            </Text>
        </View>
    );
};


export default GlobalHeaderTitle;
