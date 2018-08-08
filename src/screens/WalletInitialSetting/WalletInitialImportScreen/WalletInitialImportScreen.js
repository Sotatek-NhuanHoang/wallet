import React, { Component } from 'react';
import { Text, View, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalButton from 'components/GlobalButton';
import GlobalTextInput from 'components/GlobalTextInput';
import I18n from 'i18n';
import { navigate } from 'services/NavigationService';
import { coinSelector } from 'store/wallet';
import {
    IMPORT_WALLET_RESET_STATE,
    IMPORT_WALLET_UPDATE_PRIVATE_KEY,
    IMPORT_WALLET_REQUESTED
} from 'store/importWallet';

import style from 'styles/screens/WalletInitialSetting/WalletInitialImportScreen/WalletInitialImportScreen';
import { ERROR_TYPES } from 'configs/errorTypes';


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

    componentWillMount() {
        this.props.resetState();
    }

    componentWillReceiveProps(nextProps) {
        const { importWalletError, walletImported } = nextProps;

        if (walletImported) {
            const message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.importWalletSucceed');
            Alert.alert(
                null,
                message,
                [{ text: 'OK', onPress: () => navigate('CurrencyListScreen'), style: 'cancel' }],
                { cancelable: false }
            );
            return;
        }

        if (importWalletError) {
            let message = null;

            switch (importWalletError) {
                case ERROR_TYPES.INVALID_PRIVATE_KEY:
                    message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.importWalletFailed');
                    break;

                case ERROR_TYPES.FIELD_REQUIRED:
                    message = I18n.t('WalletInitialSetting.WalletInitialImportScreen.privateKeyRequired');
                    break;
            }

            Alert.alert(null, message);
            this.props.resetState();
        }
    }


    onImportButtonClicked() {
        this.props.importNewWallet();
    }

    onInputChanged(privateKey) {
        this.props.updatePrivateKey(privateKey);
    }


    render() {
        const { selectedCoin, privateKey } = this.props;

        return (
            <GlobalContainer>
                <ScrollView>
                    {/* Icon and coin name */}
                    <View style={ style.coinContainer }>
                        <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                        <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                    </View>

                    <View style={ style.actionContainer }>
                        <GlobalTextInput
                            type="basic"
                            multiline={ true }
                            placeholder={ I18n.t('WalletInitialSetting.WalletInitialImportScreen.inputPrivateKey_placeholder') }
                            onChangeText={ this.onInputChanged }
                            style={ [style.textInput, style.marginBottom] }
                            value={ privateKey }
                        />

                        <GlobalButton type="primary" onPress={ this.onImportButtonClicked }>
                            <GlobalLoc locKey="WalletInitialSetting.WalletInitialImportScreen.next_btn" />
                        </GlobalButton>
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, wallet, importWallet }) => ({
    selectedCoin: coinSelector(wallet, { coin: global.selectedCoin }),
    privateKey: importWallet.privateKey,
    importWalletError: importWallet.importWalletError,
    walletImported: importWallet.walletImported,
});

const mapDispatchToProps = (dispatch) => ({
    resetState: () => {
        return dispatch(IMPORT_WALLET_RESET_STATE());
    },
    updatePrivateKey: (privateKey) => {
        return dispatch(IMPORT_WALLET_UPDATE_PRIVATE_KEY(privateKey));
    },
    importNewWallet: () => {
        return dispatch(IMPORT_WALLET_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletInitialImportScreen);
