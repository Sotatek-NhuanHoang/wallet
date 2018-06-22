import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import containerStyle from '@styles/components/GlobalContainer';


export const GlobalContainer = (props) => {
    const { style } = props;
    return (
        <SafeAreaView style={ [containerStyle.container, style || {}] }>
            <ScrollView>
                { props.children }
            </ScrollView>
        </SafeAreaView>
    );
};


export default GlobalContainer;
