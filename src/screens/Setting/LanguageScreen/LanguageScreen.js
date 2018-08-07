import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { setLocale } from 'react-native-redux-i18n';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';

import style from 'styles/screens/Setting/LanguageScreen/LanguageScreen';


const LanguageItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.onLanguageClicked(props.locale)}>
            <View style={ style.languageContainer }>
                <View style={{ flex: 1 }}>
                    <Text style={ style.language_Text }>{ props.text }</Text>
                </View>

                {
                    props.currentLocale === props.locale &&
                    <View>
                        <Icon name="check" style={ style.language_Icon } />
                    </View>
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export class LanguageScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Setting.LanguageScreen.title" />
            </GlobalHeaderTitle>
        ),
    };

    languages = [
        {
            locale: 'ja',
            text: 'Japanese',
        },
        {
            locale: 'en',
            text: 'English',
        },
        {
            locale: 'cn',
            text: 'Chinese',
        }
    ];

    constructor(props) {
        super(props);
        this.onLanguageClicked = this.onLanguageClicked.bind(this);
    }

    shouldComponentUpdate({ locale }) {
        return this.props.locale !== locale;
    }

    onLanguageClicked(locale) {
        if (this.props.locale === locale) {
            return;
        }
        this.props.changeLanguage(locale);
    }


    render() {
        const { locale } = this.props;

        return (
            <GlobalContainer style={ style.container }>
                <ScrollView>
                    {
                        this.languages.map((language) => {
                            return (
                                <LanguageItem
                                    currentLocale={ locale }
                                    locale={ language.locale }
                                    text={ language.text }
                                    key={ language.locale }
                                    onLanguageClicked={ this.onLanguageClicked }
                                />
                            );
                        })
                    }
                </ScrollView>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
});

const mapDispatchToProps = (dispatch) => ({
    changeLanguage: (locale) => {
        dispatch(setLocale(locale));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageScreen);
