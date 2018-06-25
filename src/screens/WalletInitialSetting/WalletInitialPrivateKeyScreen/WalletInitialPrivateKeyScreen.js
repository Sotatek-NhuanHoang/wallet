import React, { Component } from 'react';
import { Text, View, Clipboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalButton from '@components/GlobalButton';
import GlobalTextInput from '@components/GlobalTextInput';
import { WINI_COPY_PRIVATE_KEY, WINI_NEW_WALLET_REQUESTED } from '@store/walletInitialSetting';
import I18n from '@i18n';
import { navigate } from '@utils/NavigationService';
import AddressStorage from '@utils/addressStorage';

import style from '@styles/screens/WalletInitialSetting/WalletInitialPrivateKeyScreen/WalletInitialPrivateKeyScreen';


export class WalletInitialPrivateKeyScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialSetting.WalletInitialPrivateKeyScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);
        this.onCopyButtonClicked = this.onCopyButtonClicked.bind(this);
        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { newWallet, selectedCoin } = nextProps;
        if (newWallet.created) {
            AddressStorage.saveWallet(selectedCoin.symbol, newWallet.data);
            navigate('CurrencyListScreen');
        }
    }


    onCopyButtonClicked() {
        this.props.copyPrivateKey();
        Clipboard.setString(this.props.selectedCoin.privateKey);
        Alert.alert(null, I18n.t('WalletInitialSetting.WalletInitialPrivateKeyScreen.walletCreated'))
    }

    onNextButtonClicked() {
        // Create new wallet
        const { selectedCoin, privateKey, createNewWallet } = this.props;
        createNewWallet(selectedCoin.symbol, privateKey);
    }

    render() {
        const { selectedCoin, privateKey, isPrivateKeyCoppied } = this.props;

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
                        editable={ false }
                        style={ style.marginBottom }
                        value={ privateKey }
                    />

                    <GlobalButton type="primary" style={ style.marginBottom } onPress={ this.onCopyButtonClicked }>
                        <GlobalLoc locKey="WalletInitialSetting.WalletInitialPrivateKeyScreen.copy_btn" />
                    </GlobalButton>

                    {isPrivateKeyCoppied ? (
                        <GlobalButton type="primary" onPress={ this.onNextButtonClicked }>
                            <GlobalLoc locKey="WalletInitialSetting.WalletInitialPrivateKeyScreen.next_btn" />
                        </GlobalButton>
                    ) : (
                        <GlobalButton type="basic">
                            <GlobalLoc locKey="WalletInitialSetting.WalletInitialPrivateKeyScreen.next_btn" />
                        </GlobalButton>
                    )}
                </View>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, walletInitialSetting }) => ({
    selectedCoin: global.selectedCoin,
    privateKey: walletInitialSetting.privateKey,
    isPrivateKeyCoppied: walletInitialSetting.isPrivateKeyCoppied,
    newWallet: walletInitialSetting.newWallet,
});

const mapDispatchToProps = (dispatch) => ({
    copyPrivateKey: () => dispatch(WINI_COPY_PRIVATE_KEY()),
    createNewWallet: (coin, privateKey) => {
        dispatch(WINI_NEW_WALLET_REQUESTED(coin, privateKey));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletInitialPrivateKeyScreen);
