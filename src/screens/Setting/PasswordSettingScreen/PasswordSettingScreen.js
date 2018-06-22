import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalTextInput from '@components/GlobalTextInput';
import I18n from '@i18n';
import { navigate } from '@utils/NavigationService';
import { GLOBAL_RESET_PASSWORD, GLOBAL_CHANGE_PASSWORD, GLOBAL_CHANGE_CONFIRM_PASSWORD } from '@store/global';

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

        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
        this.goToCurrencyListScreen = this.goToCurrencyListScreen.bind(this);
        this.onClearText = this.onClearText.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
        this.onPasswordInputCreated = this.onPasswordInputCreated.bind(this);
        this.onConfirmPasswordInputCreated = this.onConfirmPasswordInputCreated.bind(this);
        this.onPasswordInputSubmitted = this.onPasswordInputSubmitted.bind(this); 
        this.onConfirmPasswordInputSubmitted = this.onConfirmPasswordInputSubmitted.bind(this); 
    }

    goToCurrencyListScreen() {
        navigate('CurrencyListScreen');
    }

    checkEmptyPassword(password) {
        return !password;
    }

    checkSyntaxPassword(password) {
        let reg =  new RegExp("^([a-zA-Z0-9])+$");
        return reg.test(password);
    }

    checkConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    checkLengthPassword(password) {
        return password.length >= 9 && password.length <= 50;
    }

    onClearText() {
        this.props.resetPassword();
        this.passwordInput.clear();
        this.confirmPasswordInput.clear();
    }

    onNextButtonClicked() {
        const { password, confirmPassword } = this.props;

        let message = '';
        let isError = false;
       
        if (this.checkEmptyPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_01');
            isError = true;
        } else if (!this.checkSyntaxPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_02');    
            isError = true;        
        } else if (!this.checkLengthPassword(password)) {
            message = I18n.t('Setting.PasswordSettingScreen.error_03');   
            isError = true;    
       } else if (!this.checkConfirmPassword(password, confirmPassword)) {
           message = I18n.t('Setting.PasswordSettingScreen.error_04');
           isError = true;
        } else {
            message = I18n.t('Setting.PasswordSettingScreen.message');
            isError = false;
        }
    
        if (isError) {
            Alert.alert (
                null,
                message,
                [
                    { text: 'OK', onPress: this.onClearText },
                ],
                { cancelable: false }//dismissed by tapping outside of the alert box 
            )
        } else {
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

    onPasswordInputCreated(passwordInput) {
        this.passwordInput = passwordInput;
    }

    onConfirmPasswordInputCreated(confirmPasswordInput) {
        this.confirmPasswordInput = confirmPasswordInput;
    }

    onPasswordChanged(newPassword) {
        this.props.changePassword(newPassword);
    }

    onConfirmPasswordChanged(newConfirmPassword) {
        this.props.changeConfirmPassword(newConfirmPassword);
    }

    onPasswordInputSubmitted() {
        this.confirmPasswordInput.focus();
    }

    onConfirmPasswordInputSubmitted() {
        this.onNextButtonClicked();
    }

    render() {
        return (
            <GlobalContainer>
                {/*input password*/}
                <GlobalTextInput
                    type="basic"
                    autoFocus={ true }
                    multiline={ false }
                    style={ style.passwordInput }
                    placeholder={ I18n.t('Setting.PasswordSettingScreen.password') }
                    onChangeText={ this.onPasswordChanged }
                    secureTextEntry={ true }
                    onGlobalTextInputCreated={ this.onPasswordInputCreated }
                    onSubmitEditing={ this.onPasswordInputSubmitted }
                />

                {/*confirm password*/}
                <GlobalTextInput
                    type="basic"
                    multiline={ false }
                    style={ style.confirmInput }
                    placeholder ={ I18n.t('Setting.PasswordSettingScreen.confirm') }
                    onChangeText={ this.onConfirmPasswordChanged }
                    secureTextEntry ={ true }
                    onGlobalTextInputCreated={ this.onConfirmPasswordInputCreated }
                    onSubmitEditing={ this.onConfirmPasswordInputSubmitted }
                />

                {/*notes*/}
                <GlobalLoc
                    style={ style.notes }
                    locKey="Setting.PasswordSettingScreen.notes" />

                {/*button next*/}
                <GlobalButton
                    style={ style.nextButton }
                    onPress={ this.onNextButtonClicked }>
                    <GlobalLoc locKey="Setting.PasswordSettingScreen.next_btn" />
                </GlobalButton>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global }) => ({
    password: global.password,
    confirmPassword: global.confirmPassword,
});

const mapDispathToProps = (dispatch) => ({
    resetPassword: () => {
        dispatch(GLOBAL_RESET_PASSWORD());
    },
    changePassword: (newPassword) => {
        dispatch(GLOBAL_CHANGE_PASSWORD(newPassword));
    },
    changeConfirmPassword: (newConfirmPassword) => {
        dispatch(GLOBAL_CHANGE_CONFIRM_PASSWORD(newConfirmPassword));
    },
});

export default connect(mapStateToProps, mapDispathToProps)(PasswordSettingScreen);
