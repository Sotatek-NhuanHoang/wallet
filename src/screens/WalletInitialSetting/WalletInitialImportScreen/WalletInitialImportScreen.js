import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalButton from '@components/GlobalButton';
import GlobalTextInput from '@components/GlobalTextInput';
import { WINI_IMPORT_WALLET_REQUESTED, WINI_CHANGE_USER_PRIVATE_KEY } from '@store/walletInitialSetting';
import I18n from '@i18n';
import { navigate } from '@utils/NavigationService';


import style from '@styles/screens/WalletInitialSetting/WalletInitialImportScreen/WalletInitialImportScreen';
import { ERROR_TYPES } from '@configs/errorTypes';


export class WalletInitialImportScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialSetting.WalletInitialImportScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);
        this.onImportButtonClicked = this.onImportButtonClicked.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { newWallet } = nextProps;

        if (newWallet.created) {
            const message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.importWalletSucceed');
            Alert.alert(
                null,
                message,
                [{ text: 'OK', onPress: this.onSuccessfulAlertClosed, style: 'cancel' }],
                { cancelable: false }
            );
        } else if (newWallet.error) {
            let message = null;

            switch (newWallet.error) {
                case ERROR_TYPES.REQUEST_FAILED:
                    message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.importWalletFailed');
                    break;

                case ERROR_TYPES.FIELD_REQUIRED:
                    message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.privateKeyRequired');
                    break;
            }

            Alert.alert(null, message);
        }
    }

    onSuccessfulAlertClosed() {
        navigate('CurrencyListScreen');
    }

    onImportButtonClicked() {
        const { importNewWallet, userPrivateKey, selectedCoin } = this.props;
        importNewWallet(selectedCoin.symbol, userPrivateKey);
    }

    onInputChanged(privateKey) {
        this.props.changeUserPrivateKey(privateKey);
    }

    render() {
        const { selectedCoin } = this.props;

        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                </View>

                <View style={ style.actionContainer }>
                    <GlobalTextInput
                        type="basic"
                        multiline={ true }
                        onChangeText={ this.onInputChanged }
                        style={ style.marginBottom }
                    />

                    <GlobalButton type="primary" onPress={ this.onImportButtonClicked }>
                        <GlobalLoc locKey="WalletInitialSetting.WalletInitialImportScreen.next_btn" />
                    </GlobalButton>
                </View>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, walletInitialSetting }) => ({
    selectedCoin: global.selectedCoin,
    userPrivateKey: walletInitialSetting.userPrivateKey,
    newWallet: walletInitialSetting.newWallet,
});

const mapDispatchToProps = (dispatch) => ({
    importNewWallet: (coin, privateKey) => {
        dispatch(WINI_IMPORT_WALLET_REQUESTED(coin, privateKey));
    },
    changeUserPrivateKey: (privateKey) => {
        dispatch(WINI_CHANGE_USER_PRIVATE_KEY(privateKey));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletInitialImportScreen);
