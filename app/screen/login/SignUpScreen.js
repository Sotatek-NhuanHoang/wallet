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
    Button,
    PixelRatio,
    Modal,
    Dimensions,
    SafeAreaView,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import BaseScreen from '../BaseScreen';
import I18n from '../../res/i18n/i18n';
import { CommonStyles, CommonSize, CommonColors } from '../../utils/CommonStyles';
import ActionSheet from 'react-native-actionsheet';
//import { Dropdown } from 'react-native-material-dropdown';
import KeyboardAvoidingView from '../../utils/KeyboardAvoidingView';

export default class SignUpScreen extends BaseScreen {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            alertVisibility: false,
            email: 'bitkoex@bitkoex.com',
            password: '123123',
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
            },


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
        this.setState({ showModal: true });
        this._showAlert(true)
    }

    _showAlert(visible) {
        this.setState({ alertVisibility: visible });
    }

    renderModal() {
        if (this.state.showModal) {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: (Platform.OS == 'ios') ? 20 : 0
                }}>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.alertVisibility}
                        onRequestClose={() => {
                            this._showAlert(!this.state.alertVisibility)
                        }}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }} >
                            <View style={styles.modalContent}>
                                <View style={styles.noticeContainer}>
                                    <Text style={styles.noticeText}>{I18n.t('alert.notice').toUpperCase()}</Text>

                                </View>
                                <View style={{ marginTop: PixelRatio.getPixelSizeForLayoutSize(5), }}>
                                    <Text style={styles.modalText}>{I18n.t('alert.notice_msg')}</Text>

                                </View>
                                <View style={{ flex: 2 }} />

                                <View>
                                    <TouchableOpacity
                                        style={styles.modalButton}
                                        onPress={() => {
                                            this.setState({ showModal: false })
                                            this._showAlert(false);
                                        }}>
                                        <Text style={styles.buttonText}>{I18n.t('alert.ok').toUpperCase()}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1 }} />
                            </View>
                        </View>
                    </Modal>
                </View>
            )
        }
        return (<View style={{ flex: 1 }}></View>);

    }

    _showActionSheet = () => {
        this.ActionSheet.show()
    }
    render() {
        const listCountry = [
            'Cancel',
            'Korea',
            'USA',
            'Japan',
            'Vietname'
        ];
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar barStyle='light-content' />
                <KeyboardAvoidingView
                    behavior={'padding'}
                    keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}
                    style={{ flex: 1, }}>
                    <TouchableWithoutFeedback
                        style={{ flex: 1, }}
                        onPress={Keyboard.dismiss}
                        accessible={false}>
                        <View style={{ flex: 1, }}>

                            {this.renderModal()}
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
                            <View style={{ flex: 1 }} />
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
                                        value={this.state.confirmPassword}
                                        secureTextEntry={true}
                                        placeholderTextColor='gray'
                                        placeholder={'enter password again'}
                                        underlineColorAndroid='transparent'
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this.focusNextField('four')}
                                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                                        ref={input => this.inputs['three'] = input} />
                                </View>
                                <View style={styles.line} />

                                <View style={styles.inputRow}>
                                    <Text style={styles.titleInput}>
                                        {I18n.t('login.country').toUpperCase()}
                                    </Text>
                                    <View style={styles.dropdown}>

                                        <ActionSheet
                                            ref={o => this.ActionSheet = o}
                                            //title={'Country?'}
                                            options={listCountry}
                                            cancelButtonIndex={0}
                                            destructiveButtonIndex={4}
                                            onPress={(index) => {
                                                if (index != 0)
                                                    this.setState({ country: listCountry[index] })
                                            }}
                                        />
                                        <TouchableOpacity
                                            onPress={this._showActionSheet}
                                            style={styles.buttonDropArrow}>
                                            <Text style={styles.countryText}>
                                                {this.state.country}
                                            </Text>
                                            <Image
                                                style={styles.downArrow}
                                                source={require('../../res/images/down-arrow.png')}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View style={styles.line} />

                                <View style={styles.inputRow}>
                                    <Text style={styles.titleInput}>
                                        {I18n.t('login.phone').toUpperCase()}
                                    </Text>

                                    <TextInput
                                        style={styles.input}
                                        value={this.state.phone}
                                        secureTextEntry={false}
                                        placeholderTextColor='gray'
                                        placeholder={'enter phone number'}
                                        underlineColorAndroid='transparent'
                                        returnKeyType={"next"}
                                        keyboardType='numeric'
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this.focusNextField('five')}
                                        onChangeText={(text) => this.setState({ phone: text })}
                                        ref={input => this.inputs['four'] = input} />
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
                                        value={this.state.code}
                                        secureTextEntry={false}
                                        placeholderTextColor='gray'
                                        placeholder={'enter code'}
                                        keyboardType='numeric'
                                        underlineColorAndroid='transparent'
                                        onChangeText={(text) => this.setState({ code: text })}
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
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>

        );

    }

}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollView: {
    },
    screen: {
        flex: 1,
        ...CommonStyles.screen,
        paddingLeft: CommonSize.contentPadding15px,
        paddingRight: CommonSize.contentPadding15px
    },
    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0
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
    downArrow: {
        width: 10,
        height: 16,
        resizeMode: 'contain'
    },
    buttonDropArrow: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginEnd: PixelRatio.getPixelSizeForLayoutSize(1)
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
    countryText: {
        flex: 1,
        color: 'white',
        textAlign: 'right',
        alignItems: 'center',
        marginEnd: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        height: PixelRatio.getPixelSizeForLayoutSize(20),
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
        width: PixelRatio.getPixelSizeForLayoutSize(30),
        height: PixelRatio.getPixelSizeForLayoutSize(14),
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
        backgroundColor: '#f99b20',
        borderWidth: 1,
        borderColor: '#f99b20',

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
    dropdown: {
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        height: PixelRatio.getPixelSizeForLayoutSize(20),
    },
    dropdownText: {
        textAlign: 'right',
        alignSelf: 'center',
        color: 'white',
    },
    line: {
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    seperatorInput: {
        alignSelf: 'stretch',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
    },
    modalButton: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        width: PixelRatio.getPixelSizeForLayoutSize(70)

    },

    modalContent: {
        backgroundColor: '#2b2a2a',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#2b2a2a',
        width: 2 * (width / 3),
        height: width / 2 + 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontSize: 15 * PixelRatio.getFontScale(),
        color: 'white',
        textAlign: 'center'
    },
    noticeText: {
        color: 'white',
        fontSize: 15 * PixelRatio.getFontScale(),
        fontWeight: '300',
        textAlign: 'center',
    },
    noticeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#474545',
        borderColor: '#474545',
        borderWidth: 1,
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        width: '100%',
        alignSelf: 'stretch'
    }

});
