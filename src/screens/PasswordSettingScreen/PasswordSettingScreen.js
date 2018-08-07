import React, { PureComponent } from 'react';
import { Alert, ScrollView, BackHandler, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalTextInput from 'components/GlobalTextInput';
import I18n from 'i18n';
import { navigate } from 'services/NavigationService';
import { SETTING_RESET_PASSWORD, SETTING_UPDATE_NEW_PASSWORD, SETTING_UPDATE_CONFIRM_PASSWORD, SETTING_SET_PASSWORD_REQUESTED } from 'store/setting';
import ERROR_TYPES from 'configs/errorTypes';

import style from 'styles/screens/PasswordSettingScreen/PasswordSettingScreen';

export class PasswordSettingScreen extends PureComponent {

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
        this.resetPassword = this.resetPassword.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
        this.onPasswordInputCreated = this.onPasswordInputCreated.bind(this);
        this.onConfirmPasswordInputCreated = this.onConfirmPasswordInputCreated.bind(this);
        this.onPasswordInputSubmitted = this.onPasswordInputSubmitted.bind(this);
        this.onConfirmPasswordInputSubmitted = this.onConfirmPasswordInputSubmitted.bind(this);
        this.onDeviceBackButtonPress = this.onDeviceBackButtonPress.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    }

    componentWillReceiveProps(nextProps) {
        const { setPasswordError, setPasswordSuccessfully } = nextProps;

        if (setPasswordSuccessfully) {
            Alert.alert (null, I18n.t('Setting.PasswordSettingScreen.message'), [
                { text: 'OK', onPress: this.goToCurrencyListScreen },
            ],  { cancelable: false });
            return;
        }

        if (setPasswordError) {
            switch (setPasswordError) {
                case ERROR_TYPES.FIELD_REQUIRED:
                    message = I18n.t('Setting.PasswordSettingScreen.error_01');
                    break;

                case ERROR_TYPES.INVALID_LENGTH:
                    message = I18n.t('Setting.PasswordSettingScreen.error_03');
                    break;

                case ERROR_TYPES.INVALID_FORMAT:
                    message = I18n.t('Setting.PasswordSettingScreen.error_02');
                    break;

                case ERROR_TYPES.PASSWORD_NOT_MATCH:
                    message = I18n.t('Setting.PasswordSettingScreen.error_04');
                    break;
            }

            Alert.alert (null, message, [
                { text: 'OK', onPress: this.resetPassword },
            ], { cancelable: false });
        }
    }


    onDeviceBackButtonPress() {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp(),
            }, ], {
                cancelable: false
            }
        )
        return true;
    }

    goToCurrencyListScreen() {
        navigate('CurrencyListScreen', {}, true);
    }

    resetPassword() {
        this.props.resetPassword();
    }

    onNextButtonClicked() {
        this.props.setPassword();
    }

    onPasswordInputCreated(passwordInput) {
        this.passwordInput = passwordInput;
    }

    onConfirmPasswordInputCreated(confirmPasswordInput) {
        this.confirmPasswordInput = confirmPasswordInput;
    }

    onPasswordChanged(newPassword) {
        this.props.changeNewPassword(newPassword);
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
        const { newPassword, confirmPassword } = this.props;

        return (
            <GlobalContainer>
                <ScrollView style={ style.container }>
                    {/*input password*/}
                    <GlobalTextInput
                        type="basic"
                        multiline={ false }
                        style={ style.passwordInput }
                        placeholder={ I18n.t('Setting.PasswordSettingScreen.password') }
                        onChangeText={ this.onPasswordChanged }
                        secureTextEntry={ true }
                        onGlobalTextInputCreated={ this.onPasswordInputCreated }
                        onSubmitEditing={ this.onPasswordInputSubmitted }
                        value={ newPassword }
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
                        value={ confirmPassword }
                    />

                    {/*notes*/}
                    <GlobalLoc style={ style.notes } locKey="Setting.PasswordSettingScreen.notes" />

                    {/*button next*/}
                    <GlobalButton
                        style={ style.nextButton }
                        onPress={ this.onNextButtonClicked }>
                        <GlobalLoc locKey="Setting.PasswordSettingScreen.next_btn" />
                    </GlobalButton>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ setting }) => ({
    newPassword: setting.newPassword,
    confirmPassword: setting.confirmPassword,
    setPasswordError: setting.setPasswordError,
    setPasswordSuccessfully: setting.setPasswordSuccessfully,
});

const mapDispathToProps = (dispatch) => ({
    resetPassword: () => {
        dispatch(SETTING_RESET_PASSWORD());
    },
    changeNewPassword: (newPassword) => {
        dispatch(SETTING_UPDATE_NEW_PASSWORD(newPassword));
    },
    changeConfirmPassword: (newConfirmPassword) => {
        dispatch(SETTING_UPDATE_CONFIRM_PASSWORD(newConfirmPassword));
    },
    setPassword: () => {
        dispatch(SETTING_SET_PASSWORD_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispathToProps)(PasswordSettingScreen);
