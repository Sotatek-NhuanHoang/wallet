import React from 'react';
import { SafeAreaView } from 'react-native';

import containerStyle from '@styles/components/GlobalContainer';


export const GlobalContainer = (props) => {
    const { style } = props;
    return (
        <SafeAreaView style={ [containerStyle.container, style || {}] }>
            { props.children }
        </SafeAreaView>
    );
};


export default GlobalContainer;
