import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigate } from '@utils/NavigationService';

import style from '@styles/screens/CurrencyListScreen/SettingButton';


export const SettingButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigate('Setting')}>
            <View style={ style.container }>
                <Icon name="gear" style={ style.buttonIcon } />
            </View>
        </TouchableWithoutFeedback>
    );
};


export default SettingButton;
