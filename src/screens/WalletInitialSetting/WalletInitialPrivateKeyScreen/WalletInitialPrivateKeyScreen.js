import React, { Component } from 'react';
import { Text, View, Clipboard, Alert } from 'react-native';
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
import { NEW_WALLET_GENERATE_WALLET_REQUESTED, NEW_WALLET_ADD_NEW_WALLET_REQUESTED } from 'store/newWallet';

import style from 'styles/screens/WalletInitialSetting/WalletInitialPrivateKeyScreen/WalletInitialPrivateKeyScreen';


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

    state = {
        isPrivateKeyCoppied: false,
    }

    constructor(props) {
        super(props);
        this.onCopyButtonClicked = this.onCopyButtonClicked.bind(this);
        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
    }


    componentWillMount() {
        this.props.generateNewWallet();
    }


    async onCopyButtonClicked() {
        const { privateKey } = this.props;

        await this.setState({ isPrivateKeyCoppied: true, });
        Clipboard.setString(privateKey);
        Alert.alert(null, I18n.t('WalletInitialSetting.WalletInitialPrivateKeyScreen.privateKeyCoppied'));
    }

    async onNextButtonClicked() {
        await this.props.addNewWallet();
        Alert.alert(null, I18n.t('WalletInitialSetting.WalletInitialPrivateKeyScreen.walletCreated'), [
            { text: 'OK', style: 'cancel', onPress: () => navigate('CurrencyListScreen'), }
        ], { cancelable: false });
    }

    render() {
        const { selectedCoin, privateKey } = this.props;
        const { isPrivateKeyCoppied } = this.state;

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


const mapStateToProps = ({ global, wallet, newWallet }) => ({
    selectedCoin: coinSelector(wallet, { coin: global.selectedCoin }),
    privateKey: newWallet.privateKey,
});

const mapDispatchToProps = (dispatch) => ({
    generateNewWallet: () => {
        return dispatch(NEW_WALLET_GENERATE_WALLET_REQUESTED());
    },
    addNewWallet: () => {
        return dispatch(NEW_WALLET_ADD_NEW_WALLET_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletInitialPrivateKeyScreen);
