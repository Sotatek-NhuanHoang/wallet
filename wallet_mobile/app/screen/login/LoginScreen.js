import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    PixelRatio
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
import { CommonStyles, CommonSize, CommonColors } from '../../utils/CommonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class LoginScreen extends BaseScreen {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            email: 'bitkoex@bitkoex.com',
            password: '123123',
            styleForEmail: '',
            styleForPassword: '',
            errEmail: {
                isShow: false,
                message: ''
            },
            errPassword: {
                isShow: false,
                message: ''
            },
            errMessage: {
                isShow: false,
                message: ''
            }
        };
        this.focusNextField = this._focusNextField.bind(this);
        this.inputs = {};
    }

    _focusNextField(id) {
        this.input[id].focus();
    }

    _onFocus(inputName) {
        if (inputName === 'Email') {
            this.setState({ styleForEmail: styles.textInputFocused });
        } else {
            this.setState({ styleForPassword: styles.textInputFocused });
        }
    }

    _onBlur(inputName) {
        if (inputName === 'Email') {
            this.setState({ styleForEmail: styles.textInputUnfocused });
        } else {
            this.setState({ styleForPassword: styles.textInputUnfocused });
        }
    }

    _checkEmail(email) {
        let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return reg.test(email);
    }

    _onPressLogin() {
        console.log(this.state.email, this.state.password);

    }
    render() {
        return (
            <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.screen}>

                <View style={{ flex: 1 }} />

                <View style={styles.containerLogo}>
                    <Image
                        style={styles.imageView}
                        source={{ uri: 'https://olm.vn/images/avt/avt3/avt666223_256by256.jpg' }}
                    />
                    <Text style={styles.welcome}>{`WWW \n coin wallet`}</Text>
                </View>

                <View style={{ flex: 1 }} />


                <View style={styles.containerInput}>
                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.id').toUpperCase()}
                        </Text>

                        <TextInput
                            value={this.state.email}
                            keyboardType='email-address'
                            placeholder={I18n.t('login.id')}
                            blurOnSubmit={false}
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            autoCapitalize='characters'
                            onBlur={() => this._onBlur('Email')}
                            onFocus={() => this._onFocus('Email')}
                            style={[styles.input, this.state.styleForEmail]}
                            onSubmitEditing={() => this.focusNextField('two')}
                            returnKeyType={"next"}
                            ref={input => this.inputs['one'] = input}
                            onChangeText={(text) => this.setState({ email: text })} />
                    </View>
                    <View style={styles.line} />


                    <View style={styles.seperatorInput} />

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.password').toUpperCase()}
                        </Text>

                        <TextInput
                            onBlur={() => this._onBlur('Password')}
                            onFocus={() => this._onFocus('Password')}
                            style={[styles.input, this.state.styleForPassword]}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='white'
                            placeholder={I18n.t('login.password')}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['two'] = input} />
                    </View>
                    <View style={styles.line} />

                </View>

                <View style={{ flex: 1 }} />

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        onPress={this._onPressLogin.bind(this)}
                        style={styles.buttonLogin} >
                        <Text
                            style={styles.buttonText}>{I18n.t('login.login').toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressLogin.bind(this)}
                        style={styles.buttonSignup} >
                        <Text
                            style={styles.buttonText}>{I18n.t('login.sign_up').toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }} />
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
    },
    screen: {
        ...CommonStyles.screen,
        alignItems: 'center',
        paddingLeft: CommonSize.contentPadding15px,
        paddingRight: CommonSize.contentPadding15px
    },
    containerInput: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    containerLogo: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 30 * PixelRatio.getFontScale(),
        fontWeight: 'bold',
        color: 'white',
    },
    imageView: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    textInputUnfocused: {
        borderColor: CommonColors.screenBgColor,
    },
    textInputFocused: {
        borderColor: CommonColors.screenBgColor,
    },
    input: {
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        flex: 1,
        textAlign: 'left',
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        borderWidth: 1,
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
        borderColor: CommonColors.screenBgColor,
        backgroundColor: CommonColors.screenBgColor,

    },
    buttonText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        fontWeight: '300',
        textAlign: 'center',

    },
    buttonLogin: {
        flex: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: CommonColors.bgColorLogin,
        borderWidth: 1,
        borderColor: CommonColors.bgColorLogin,

    },
    buttonSignup: {
        flex: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: CommonColors.bgColorSignup,
        borderWidth: 1,
        borderColor: CommonColors.bgColorSignup,
    },
    seperator: {
        alignSelf: 'stretch',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(7),
    },
    seperatorInput: {
        alignSelf: 'stretch',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
    },
    line: {
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    titleInput: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
    },
});