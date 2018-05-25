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
    PixelRatio,
    Modal
} from 'react-native';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
import { CommonStyles, CommonSize, CommonColors } from '../../utils/CommonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUpScreen extends BaseScreen {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            country: '',
            phone: '',
            code: '',
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

    _checkEmail(email) {
        let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return reg.test(email);
    }

    _focusNextField(id) {
        this.inputs[id].focus();
    }

    _onPressSignUp() {

    }

    _goBackLogin() {
        this.navigate('LoginScreen', {});
    }

    _onGetCode() {

    }

    render() {
        return (
            <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.screen}
            >
                <View style={{ flex: 1 }} />

                <View style={styles.containerLogo}>

                    <Image
                        style={styles.imageView}
                        source={{ uri: 'https://olm.vn/images/avt/avt3/avt666223_256by256.jpg' }}
                    />
                    <Text style={styles.appName}>{`WWW \n coin wallet`}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <Text style={styles.title}>
                    {I18n.t('login.sign_up').toUpperCase()}
                </Text>

                <View style={styles.containerInput}>

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.id').toUpperCase()}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            keyboardType='email-address'
                            placeholderTextColor='gray'
                            placeholder={'enter id'}
                            blurOnSubmit={false}
                            underlineColorAndroid='transparent'
                            onSubmitEditing={() => this.focusNextField('two')}
                            returnKeyType={"next"}
                            onChangeText={(text) => this.setState({ email: text })}
                            ref={input => this.inputs['one'] = input}
                        />
                    </View>
                    <View style={styles.line} />

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.password').toUpperCase()}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                            placeholder={'enter password'}
                            underlineColorAndroid='transparent'
                            returnKeyType={"next"}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('three')}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['two'] = input} />
                    </View>
                    <View style={styles.line} />

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {`CONFIRM\nPASSWORD`}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                            placeholder={'enter password again'}
                            underlineColorAndroid='transparent'
                            returnKeyType={"next"}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('four')}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['three'] = input} />
                    </View>
                    <View style={styles.line} />

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.country').toUpperCase()}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                            placeholder={'enter country'}
                            underlineColorAndroid='transparent'
                            returnKeyType={"next"}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('five')}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['four'] = input} />
                    </View>
                    <View style={styles.line} />

                    <View style={styles.inputRow}>
                        <Text style={styles.titleInput}>
                            {I18n.t('login.phone').toUpperCase()}
                        </Text>

                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                            placeholder={'enter phone number'}
                            underlineColorAndroid='transparent'
                            returnKeyType={"next"}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('six')}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['five'] = input} />
                    </View>
                    <View style={styles.line} />

                    <View style={styles.inputRow}>
                        <TouchableOpacity
                            onPress={this._onGetCode.bind(this)}
                            style={styles.buttonGetCode} >
                            <Text style={styles.buttonGetCodeText}>
                                {I18n.t('login.code').toUpperCase()}
                            </Text>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                            placeholder={'enter code'}
                            underlineColorAndroid='transparent'
                            returnKeyType={"next"}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('six')}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={input => this.inputs['five'] = input} />
                    </View>
                    <View style={styles.line} />
                </View>

                <View style={{ flex: 1 }} />

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        onPress={() => { this._goBackLogin() }}
                        style={styles.buttonLogin} >
                        <Text style={styles.buttonText}>
                            {I18n.t('login.login').toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressSignUp.bind(this)}
                        style={styles.buttonSignup} >
                        <Text style={styles.buttonText}>
                            {I18n.t('login.sign_up').toUpperCase()}
                        </Text>
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
    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    appName: {
        textAlign: 'center',
        fontSize: 20 * PixelRatio.getFontScale(),
        fontWeight: 'bold',
        color: 'white',
    },
    imageView: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    titleInput: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    buttonLogin: {
        flex: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gray',

    },
    buttonGetCode: {
        width:PixelRatio.getPixelSizeForLayoutSize(40),
        height: PixelRatio.getPixelSizeForLayoutSize(14),
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gray',

    },
    buttonGetCodeText: {
        color: 'white',
        fontSize: 11 * PixelRatio.getFontScale(),
        fontWeight: '300',
        textAlign: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        fontWeight: '300',
        textAlign: 'center',

    },
    buttonSignup: {
        flex: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: CommonColors.bgSignUpColor,
        borderWidth: 1,
        borderColor: CommonColors.bgSignUpColor,
    },
    input: {
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        flex: 1,
        textAlign: 'right',
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        borderWidth: 1,
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
        borderColor: CommonColors.screenBgColor,
        backgroundColor: CommonColors.screenBgColor,

    },
    line: {
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

});
