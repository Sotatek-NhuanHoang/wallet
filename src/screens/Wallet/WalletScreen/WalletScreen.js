import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalButton from '@components/GlobalButton';
import { currenyFormatFilter, coinPriceFormatFilter } from '@utils/filters';
import { navigate } from '@utils/NavigationService';

import style from '@styles/screens/Wallet/WalletScreen/WalletScreen';


const CustomHeaderTitle = connect(
    ({ global }) => ({ selectedCoin: global.selectedCoin, })
)(
    ({ selectedCoin }) => <Text>{ selectedCoin.coinName }</Text>
);

export class WalletScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <CustomHeaderTitle />
            </GlobalHeaderTitle>
        ),
    };


    goDepositScreen() {
        navigate('DepositScreen');
    }

    goWithdrawScreen() {
        navigate('WithdrawScreen');
    }

    goTransactionScreen() {
        navigate('TransactionScreen');
    }

    render() {
        const { selectedCoin } = this.props;

        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.coin } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.coinName }</Text>
                </View>

                {/* Wallet info */}
                <View style={ style.walletInfo }>
                    {/* Wallet balance */}
                    <View style={ style.walletBalanceContainer }>
                        <Text style={ style.walletBalance_Text }>{ selectedCoin.balance }</Text>
                        <Text style={ style.walletBalance_Coin }>{ currenyFormatFilter(selectedCoin.coin) }</Text>
                    </View>

                    <Text style={ style.coinPrice }>{ coinPriceFormatFilter(selectedCoin.price) }</Text>
                    <Text style={ style.currency }>
                        <GlobalLoc locKey="Wallet.WalletScreen.currency" />
                    </Text>

                    {/* Change value */}
                    {selectedCoin.change > 0 && <Text style={ [style.walletChange, style.textGreen ] }>+{ selectedCoin.change }%</Text>}
                    {selectedCoin.change === 0 && <Text style={ style.walletChange }>{ selectedCoin.change }%</Text>}
                    {selectedCoin.change < 0 && <Text style={ [style.walletChange, style.textRed ] }>{ selectedCoin.change }%</Text>}
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


const mapStateToProps = ({ global, walletInitialSetting }) => ({
    selectedCoin: global.selectedCoin,
});

export default connect(mapStateToProps)(WalletScreen);
