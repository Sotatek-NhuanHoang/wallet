import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalLoc from '@components/GlobalLoc';
import { navigate } from '@utils/NavigationService';

import style from '../styles/components/GlobalHeaderBackButton';


export const GlobalHeaderBackButton = (props) => {
    const { routeName } = props;

    return (
        <TouchableWithoutFeedback onPress={() => navigate(routeName)}>
            <View style={ style.container }>
                <Icon name="chevron-left" style={ style.buttonIcon } />
                <GlobalLoc locKey="back_btn" style={ style.buttonText } />
            </View>
        </TouchableWithoutFeedback>
    );
};


export default GlobalHeaderBackButton;