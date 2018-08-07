import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, Clipboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import GlobalTextInput from 'components/GlobalTextInput';
import GlobalButton from 'components/GlobalButton';
import { SETTING_PRIVATE_SCREEN_CHANGE_PASSWORD, SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_REQUESTED } from 'store/setting';
import { globalAddedWalletCoins } from 'store/global';
import I18n from 'i18n';

import style from 'styles/screens/Setting/PrivateKeyScreen/PrivateKeyScreen';


const CoinItem = ({ item, onCoinCopyButtonClicked }) => {
    return (
        <View style={ style.coinItemContainer }>
            <Text style={ style.coinName }>{ item.name }</Text>
            <View style={ style.privateKeyContainer }>
                <View style={{ flex: 1 }}>
                    <Text style={ style.privateKey }>{ item.privateKey }</Text>
                </View>
                <View>
                    <GlobalButton style={ style.copyButton } onPress={() => onCoinCopyButtonClicked(item)}>
                        <GlobalLoc locKey="Setting.PrivateKeyScreen.copy" />
                    </GlobalButton>
                </View>
            </View>
        </View>
    );
};


export class PrivateKeyScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Setting.PrivateKeyScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);

        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
        this.renderCoin = this.renderCoin.bind(this);
        this.keyExtractor = this.keyExtractor.bind(this);
        this.onCoinCopyButtonClicked = this.onCoinCopyButtonClicked.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.privateScreen.error) {
            const message = I18n.t('Setting.PrivateKeyScreen.invalid_password');
            Alert.alert(null, message);
        }
    }


    keyExtractor({ symbol }) {
        return symbol;
    }

    onCoinCopyButtonClicked(selectedCoin) {
        Clipboard.setString(selectedCoin.privateKey);
        Alert.alert(null, I18n.t('Setting.PrivateKeyScreen.coppied'));
    }

    renderCoin({ item }) {
        return (
            <CoinItem item={ item } onCoinCopyButtonClicked={ this.onCoinCopyButtonClicked } />
        );
    }

    onConfirmPasswordChanged(newConfirmPassword) {
        this.props.changeConfirmPassword(newConfirmPassword);
    }

    onSubmitButtonClicked() {
        this.props.verifyPassword();
    }

    render() {
        const { privateScreen, coins } = this.props;

        return (
            <GlobalContainer>
                <ScrollView style={ style.container }>
                    <GlobalLoc locKey="Setting.PrivateKeyScreen.input_password" style={ style.label } />

                    <GlobalTextInput
                        type="basic"
                        secureTextEntry ={ true }
                        style={ style.textInput }
                        value={ privateScreen.confirmPassword }
                        onChangeText={ this.onConfirmPasswordChanged }
                        onSubmitEditing={ this.onSubmitButtonClicked }
                    />

                    {/* Confirm button */}
                    {!privateScreen.isPasswordConfirmed && (
                        <GlobalButton style={ style.submitButton } onPress={ this.onSubmitButtonClicked }>
                            <GlobalLoc locKey="Setting.PrivateKeyScreen.show_private_key" />
                        </GlobalButton>
                    )}

                    {/* List coins' private key */}
                    {privateScreen.isPasswordConfirmed && (
                        <FlatList
                            data={ coins }
                            renderItem={ this.renderCoin }
                            keyExtractor={ this.keyExtractor }
                        />
                    )}
                </ScrollView>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, setting }) => ({
    privateScreen: setting.privateScreen,
    coins: globalAddedWalletCoins(global),
});

const mapDispatchToProps = (dispatch) => ({
    changeConfirmPassword: (newConfirmPassword) => {
        dispatch(SETTING_PRIVATE_SCREEN_CHANGE_PASSWORD(newConfirmPassword));
    },
    verifyPassword: () => {
        dispatch(SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateKeyScreen);
