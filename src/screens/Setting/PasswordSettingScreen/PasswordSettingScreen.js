import React, { Component } from 'react';
import { Text, Alert } from 'react-native';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalTextInput from '@components/GlobalTextInput';
import I18n from '@i18n';
import { navigate } from '@utils/NavigationService';

import style from '@styles/screens/Setting/PasswordSettingScreen/PasswordSettingScreen';

export class PasswordSettingScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Setting.PasswordSettingScreen.title" />
            </GlobalHeaderTitle>
        ),
    };

    constructor(props) {
        super(props);
        this.onShowDialog = this.onShowDialog.bind(this);
        this.goToCurrencyListScreen = this.goToCurrencyListScreen.bind(this);
    }

    goToCurrencyListScreen() {
        navigate('CurrencyListScreen');
    }

    onClearText() {

    }

    checkEmptyPassword(password) {
        return !password;
    }

    checkSyntaxPassword(password) {
        let reg = /^([a-z0-9])+$/;
        return reg.test(password.trim());
    }

    checkConfirmPassword(password, confirm) {
        return password.trim() === confirm.trim();
    }

    checkLengthPassword(password) {
        return password.length >= 9 && password.length <= 50;
    }

    onShowDialog() {
        /*TODO: check whether have
        err1: empty input password
        err2: halfsize alphanumeric
        err3: 9 <= length <= 50
        err4: psw = confirm
        */
        let message = '';
        if(this.checkEmptyPassword(password)){
            message = I18n.t('Setting.PasswordSettingScreen.error_01');
        }else if(this.checkSyntaxPassword(password))
        if (!this.checkEmptyPassword(password) &&
            this.checkSyntaxPassword(password) &&
            this.checkConfirmPassword(password, confirm) &&
            this.checkLengthPassword(password)) {
            Alert.alert(
                null,
                I18n.t('Setting.PasswordSettingScreen.message'),
                [
                    { text: 'OK', onPress: this.goToCurrencyListScreen },
                ],
                { cancelable: false }//dismissed by tapping outside of the alert box 
            )
        } else {
            Alert.alert(
                null,
                I18n.t('Setting.PasswordSettingScreen.message'),
                [
                    { text: 'OK', onPress: this.onClearText },
                ],
                { cancelable: false }//dismissed by tapping outside of the alert box 
            )
        }



    }

    render() {
        return (
            <GlobalContainer>
                {/*input password*/}
                <GlobalTextInput
                    type="basic"
                    multiline={false}
                    style={style.passwordInput}
                />
                {/*confirm password*/}
                <GlobalTextInput
                    type="basic"
                    multiline={false}
                    style={style.confirmInput}
                />
                {/*notes*/}
                <GlobalLoc
                    style={style.notes}
                    locKey="Setting.PasswordSettingScreen.notes" />
                {/*button next*/}
                <GlobalButton
                    style={style.nextButton}
                    onPress={this.onShowDialog}>
                    <GlobalLoc locKey="Setting.PasswordSettingScreen.next_btn" />
                </GlobalButton>
            </GlobalContainer>
        );
    }
}


export default PasswordSettingScreen;
