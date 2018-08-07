import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { connect } from 'react-redux';

import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalLoc from 'components/GlobalLoc';
import { coinSelector } from 'store/wallet';
import { GLOBAL_UPDATE_SELECTED_COIN } from 'store/global';
import { navigate } from 'services/NavigationService';

import style from 'styles/screens/CurrencyListScreen/CoinItem';


class BtcComponent extends Component {

    constructor(props) {
        super(props);
        this.onCoinSelected = this.onCoinSelected.bind(this);
    }

    async onCoinSelected() {
        const { bitcoin } = this.props;
        await this.props.updateSelectedCoin(bitcoin.symbol);

        if (bitcoin.address) {
            navigate('Wallet');
        } else {
            navigate('WalletInitialSetting');
        }
    }

    
    render() {
        const { bitcoin } = this.props;

        return (
            <TouchableWithoutFeedback onPress={ this.onCoinSelected }>
                <View style={ style.coinContainer }>
                    <View style={ style.coinInfoContainer }>
                        <GlobalCoinIcon coin={ bitcoin.symbol } size="small" />
                        <Text style={ style.coinInfo_CoinName }>{ bitcoin.name }</Text>
                    </View>

                    {bitcoin.address ? (
                        <View>
                            <Text style={ style.coinBalanceText }>{ bitcoin.balance }</Text>
                            {bitcoin.percent_change_24h > 0 && <Text style={ [style.coinChangeText, style.coinChangeText__green] }>+{ bitcoin.percent_change_24h }%</Text>}
                            {bitcoin.percent_change_24h === 0 && <Text style={ [style.coinChangeText] }>+{ bitcoin.percent_change_24h }%</Text>}
                            {bitcoin.percent_change_24h < 0 && <Text style={ [style.coinChangeText, style.coinChangeText__red] }>{ bitcoin.percent_change_24h }%</Text>}
                        </View>
                    ) : (
                        <GlobalLoc locKey="CurrencyListScreen.unregisted" style={ style.unregistedText } />
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const mapStateToProps = ({ wallet }) => ({
    bitcoin: coinSelector(wallet, { coin: 'btc', }),
});

const mapDispatchToProps = (dispatch) => ({
    updateSelectedCoin: (symbol) => {
        return dispatch(GLOBAL_UPDATE_SELECTED_COIN(symbol));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtcComponent);
