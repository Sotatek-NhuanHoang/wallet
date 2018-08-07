import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { connect } from 'react-redux';

import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalLoc from 'components/GlobalLoc';
import { coinSelector } from 'store/wallet';

import style from 'styles/screens/CurrencyListScreen/CoinItem';


class DrcComponent extends Component {
    
    render() {
        const { ethCoin, drcCoin } = this.props;

        if (!ethCoin.address) {
            return (
                <TouchableWithoutFeedback onPress={() => {}}>
                    <View style={ [style.coinContainer, style.coinContainer__gray] }>
                        <View style={ style.coinInfoContainer }>
                            <GlobalCoinIcon coin={ drcCoin.symbol } size="small" />
                            <Text style={ style.coinInfo_CoinName }>{ drcCoin.name }</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        } else {
            return (
                <TouchableWithoutFeedback onPress={() => {}}>
                    <View style={ style.coinContainer }>
                        <View style={ style.coinInfoContainer }>
                            <GlobalCoinIcon coin={ drcCoin.symbol } size="small" />
                            <Text style={ style.coinInfo_CoinName }>{ drcCoin.name }</Text>
                        </View>

                        <View>
                            <Text style={ style.coinBalanceText }>{ drcCoin.balance }</Text>

                            {drcCoin.percent_change_24h > 0 && <Text style={ [style.coinChangeText, style.coinChangeText__green] }>+{ drcCoin.percent_change_24h }%</Text>}
                            {drcCoin.percent_change_24h === 0 && <Text style={ [style.coinChangeText] }>+{ drcCoin.percent_change_24h }%</Text>}
                            {drcCoin.percent_change_24h < 0 && <Text style={ [style.coinChangeText, style.coinChangeText__red] }>{ drcCoin.percent_change_24h }%</Text>}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }
}


const mapStateToProps = ({ wallet }) => ({
    drcCoin: coinSelector(wallet, { coin: 'drc', }),
    ethCoin: coinSelector(wallet, { coin: 'eth', }),
});

export default connect(mapStateToProps)(DrcComponent);