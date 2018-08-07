import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { connect } from 'react-redux';

import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalLoc from 'components/GlobalLoc';
import { coinSelector } from 'store/wallet';

import style from 'styles/screens/CurrencyListScreen/CoinItem';


class EthComponent extends Component {
    
    render() {
        const { ethCoin } = this.props;

        return (
            <TouchableWithoutFeedback onPress={() => {}}>
                <View style={ style.coinContainer }>
                    <View style={ style.coinInfoContainer }>
                        <GlobalCoinIcon coin={ ethCoin.symbol } size="small" />
                        <Text style={ style.coinInfo_CoinName }>{ ethCoin.name }</Text>
                    </View>

                    {ethCoin.address ? (
                        <View>
                            <Text style={ style.coinBalanceText }>{ ethCoin.balance }</Text>
                            {ethCoin.percent_change_24h > 0 && <Text style={ [style.coinChangeText, style.coinChangeText__green] }>+{ ethCoin.percent_change_24h }%</Text>}
                            {ethCoin.percent_change_24h === 0 && <Text style={ [style.coinChangeText] }>+{ ethCoin.percent_change_24h }%</Text>}
                            {ethCoin.percent_change_24h < 0 && <Text style={ [style.coinChangeText, style.coinChangeText__red] }>{ ethCoin.percent_change_24h }%</Text>}
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
    ethCoin: coinSelector(wallet, { coin: 'eth', }),
});

export default connect(mapStateToProps)(EthComponent);