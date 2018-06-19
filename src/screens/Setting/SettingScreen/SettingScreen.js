import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import { navigate } from '@utils/NavigationService';

import style from '@styles/screens/Setting/SettingScreen/SettingScreen';


export class SettingScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Setting.SettingScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);
        this.onLanguageSettingClicked = this.onLanguageSettingClicked.bind(this);
    }


    onLanguageSettingClicked() {
        navigate('LanguageScreen');
    }


    render() {
        return (
            <GlobalContainer style={ style.container }>
                 <TouchableWithoutFeedback onPress={ this.onLanguageSettingClicked }>
                    <View style={ style.settingContainer }>
                        <View style={{ flex: 1 }}>
                            <GlobalLoc locKey="Setting.SettingScreen.language" style={ style.setting_Text } />
                        </View>

                        <View>
                            <Icon name="angle-right" style={ style.setting_Icon } />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </GlobalContainer>
        );
    }
}


export default SettingScreen;
