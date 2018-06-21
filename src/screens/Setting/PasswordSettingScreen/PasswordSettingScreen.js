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
        state ={
            password:'',
            confirm:''
        }
        this.onShowDialog = this.onShowDialog.bind(this);
        this.goToCurrencyListScreen = this.goToCurrencyListScreen.bind(this);
        this.onClearText = this.onClearText.bind(this);
        this.checkConfirmPassword = this.checkConfirmPassword.bind(this);
        this.checkEmptyPassword = this.checkEmptyPassword.bind(this);
        this.checkSyntaxPassword = this.checkSyntaxPassword.bind(this);
        this.checkLengthPassword = this.checkLengthPassword.bind(this);
    }

    goToCurrencyListScreen() {
        navigate('CurrencyListScreen');
    }

    checkEmptyPassword(password) {
        return !password;
    }

    checkSyntaxPassword(password) {
        let reg =  new RegExp("^([a-zA-Z0-9])+$");
        return reg.test(password.trim());
    }

    checkConfirmPassword(password, confirm) {
        return password.trim() === confirm;
    }

    checkLengthPassword(password) {
        return password.length >= 9 && password.length <= 50;
    }

    onClearText() {
       this.setState({password:'', confirm:''});

    }

    onShowDialog() {
        /*TODO: check whether have
        err1: empty input password
        err2: halfsize alphanumeric
        err3: 9 <= length <= 50
        err4: psw = confirm
        */
        let password = this.state.password;
        let confirm = this.state.confirm;
        let message = '';
        let isError = false;
        // console.log('pwd '+password);
        // console.log('confirm '+confirm);
        // console.log('err1 '+this.checkEmptyPassword(password));
        // console.log('err2 '+this.checkSyntaxPassword(password));
        // console.log('err3 '+this.checkLengthPassword(password));
        // console.log('err4 '+this.checkConfirmPassword(password, confirm));

        if(this.checkEmptyPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_01');
            isError = true;
            // console.log('stop 1');
        }else if(!this.checkSyntaxPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_02');    
            isError = true;        
            // console.log('stop 2');
        }else if(!this.checkLengthPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_03');   
            isError = true;    
            // console.log('stop 3');     
       }else if(this.checkConfirmPassword(password, confirm)) {
           message = I18n.t('Setting.PasswordSettingScreen.error_04');
           isError = true;
        //    console.log('stop 4');
        }else {
            message = I18n.t('Setting.PasswordSettingScreen.message');
            isError = false;
            // console.log('stop 5');
        }
    
        if(isError) {
            Alert.alert (
                null,
                message,
                [
                    { text: 'OK', onPress: this.onClearText },
                ],
                { cancelable: false }//dismissed by tapping outside of the alert box 
            )
        }else {
            Alert.alert (
                null,
                message,
                [
                    { text: 'OK', onPress: this.goToCurrencyListScreen },
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
                    autoFocus = { true }
                    multiline={ false }
                    style={ style.passwordInput }
                    placeholder ={ I18n.t('Setting.PasswordSettingScreen.password') }
                    onChangeText={ (text) => this.setState({ password: text }) }
                    secureTextEntry ={ true }
                />
                {/*confirm password*/}
                <GlobalTextInput
                    type="basic"
                    multiline={ false }
                    style={ style.confirmInput }
                    placeholder ={ I18n.t('Setting.PasswordSettingScreen.confirm') }
                    onChangeText={ (text) => this.setState({ confirm: text }) }
                    secureTextEntry ={ true }
                />
                {/*notes*/}
                <GlobalLoc
                    style={ style.notes }
                    locKey="Setting.PasswordSettingScreen.notes" />
                {/*button next*/}
                <GlobalButton
                    style={ style.nextButton }
                    onPress={ this.onShowDialog }>
                    <GlobalLoc locKey="Setting.PasswordSettingScreen.next_btn" />
                </GlobalButton>
            </GlobalContainer>
        );
    }
}


export default PasswordSettingScreen;
