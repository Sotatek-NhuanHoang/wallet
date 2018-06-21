import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import { navigate } from '@utils/NavigationService';

import I18n from '@i18n';

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
        this.onTermOfServiceClicked = this.onTermOfServiceClicked.bind(this);
    }


    onLanguageSettingClicked() {
        navigate('LanguageScreen');
    }
    
    onTermOfServiceClicked() {
        const title = I18n.t('Setting.TermOfServiceScreen.title'); 
        switch (this.props.locale) {
            case 'en':
                navigate('WebViewScreen', { url: 'https://drcwallet.com/terms?lng=EN', title });
                break;
            case 'cn':
                navigate('WebViewScreen', { url: 'https://drcwallet.com/terms?lng=CH', title });
                break;
            case 'ja':
                navigate('WebViewScreen', { url: 'https://drcwallet.com/terms?lng=JP', title });
                break;
        }
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
                
                {/*Term of service*/}
                <TouchableWithoutFeedback onPress={ this.onTermOfServiceClicked }>
                    <View style={ style.settingContainer }>
                        <View style={{ flex: 1 }}>
                            <GlobalLoc locKey="Setting.SettingScreen.term_service" style={ style.setting_Text } />
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

const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
});

export default connect(mapStateToProps)(SettingScreen);
