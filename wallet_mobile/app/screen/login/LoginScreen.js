import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    PixelRatio
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
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

    render() {
        return (
            <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.screen}
                extraHeight={PixelRatio.getPixelSizeForLayoutSize(125)} >

                <View style={{ flex: 2 }} />

                <View style={styles.container}>
                    <Image
                        style={styles.imageView}
                        source={{ uri: 'https://olm.vn/images/avt/avt3/avt666223_256by256.jpg' }}
                    />
                    <Text style={styles.welcome}>{`WWW \n coin wallet`}</Text>
                </View>
                <View style={{ flex: 1 }} />

                <View style={styles.inputRow}>
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
                <View style={styles.inputRow}>
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
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'darkgray',
    },
    screen: {
        ...CommonStyles.screen,
        alignItems: 'center',
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(10),
        paddingRight: PixelRatio.getPixelSizeForLayoutSize(10)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 30 * PixelRatio.getFontScale(),
        fontWeight: 'bold',
        color: 'black',
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
        borderColor: '#b2dfdb',
    },
    textInputFocused: {
        borderColor: '#35bdfd',
    },
    input: {
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        flex: 1,
        textAlign: 'left',
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        borderWidth: 1,
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
        borderColor: '#b2dfdb',
        backgroundColor: 'darkgray',

    },
});