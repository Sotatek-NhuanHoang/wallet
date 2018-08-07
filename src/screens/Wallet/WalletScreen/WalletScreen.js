import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalButton from 'components/GlobalButton';
import { currenyFormatFilter, coinPriceFormatFilter } from 'utils/filters';
import { navigate } from 'services/NavigationService';
import { WALLET_WITHDRAW_RESET_STATE } from 'store/wallet';

import style from 'styles/screens/Wallet/WalletScreen/WalletScreen';


const CustomHeaderTitle = connect(
    ({ global }) => ({ selectedCoin: global.selectedCoin, })
)(
    ({ selectedCoin }) => <Text>{ selectedCoin.name }</Text>
);

export class WalletScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton routeName="CurrencyListScreen" />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <CustomHeaderTitle />
            </GlobalHeaderTitle>
        ),
    };

    componentDidUpdate() {
        if (this.props.isFocused) {
            this.props.clean();
        }
    }


    goDepositScreen() {
        navigate('ReceiveScreen');
    }

    goWithdrawScreen() {
        navigate('WithdrawScreen');
    }

    goTransactionScreen() {
        navigate('TransactionScreen');
    }

    render() {
        const { selectedCoin, locale } = this.props;

        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                </View>

                {/* Wallet info */}
                <View style={ style.walletInfo }>
                    {/* Wallet balance */}
                    <View style={ style.walletBalanceContainer }>
                        <Text style={ style.walletBalance_Text }>{ selectedCoin.balance }</Text>
                        <Text style={ style.walletBalance_Coin }>{ currenyFormatFilter(selectedCoin.symbol) }</Text>
                    </View>

                    {locale === 'ja' && <Text style={ style.coinPrice }>{ coinPriceFormatFilter(selectedCoin.price_jpy) }</Text>}
                    {locale !== 'ja' && <Text style={ style.coinPrice }>{ coinPriceFormatFilter(selectedCoin.price_usd) }</Text>}
                    <Text style={ style.currency }>
                        <GlobalLoc locKey="Wallet.WalletScreen.currency" />
                    </Text>

                    {/* Change value */}
                    {selectedCoin.percent_change_24h > 0 && <Text style={ [style.walletChange, style.textGreen ] }>+{ selectedCoin.percent_change_24h }%</Text>}
                    {selectedCoin.percent_change_24h === 0 && <Text style={ style.walletChange }>{ selectedCoin.percent_change_24h }%</Text>}
                    {selectedCoin.percent_change_24h < 0 && <Text style={ [style.walletChange, style.textRed ] }>{ selectedCoin.percent_change_24h }%</Text>}
                </View>

                {/* Action button */}
                <View style={ style.actionContainer }>
                    <GlobalButton style={ style.marginBottom } onPress={ this.goDepositScreen }>
                        <GlobalLoc locKey="Wallet.WalletScreen.deposit_btn" />
                    </GlobalButton>

                    <GlobalButton style={ style.marginBottom } onPress={ this.goWithdrawScreen }>
                        <GlobalLoc locKey="Wallet.WalletScreen.withdraw_btn" />
                    </GlobalButton>

                    <GlobalButton onPress={ this.goTransactionScreen }>
                        <GlobalLoc locKey="Wallet.WalletScreen.transaction_btn" />
                    </GlobalButton>
                </View>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, walletInitialSetting, i18n }) => ({
    selectedCoin: global.selectedCoin,
    locale: i18n.locale,
});

const mapDispatchToProps = (dispatch) => ({
    clean: () => {
        dispatch(WALLET_WITHDRAW_RESET_STATE());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(WalletScreen));
