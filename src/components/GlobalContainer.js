import React from 'react';
import { SafeAreaView } from 'react-native';

import style from '@styles/components/GlobalContainer';


export const GlobalContainer = (props) => {
    return (
        <SafeAreaView style={ style.container }>
            { props.children }
        </SafeAreaView>
    );
};


export default GlobalContainer;
