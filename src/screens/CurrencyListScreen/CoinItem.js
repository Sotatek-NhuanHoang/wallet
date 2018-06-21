import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalLoc from '@components/GlobalLoc';

import style from '@styles/screens/CurrencyListScreen/CoinItem';


export const CoinItem = ({ item, ethCoin, onCoinSelected}) => {
    let coinChangeTextStyle = {};
    if (item.address) {
        if (item.percent_change_24h > 0) {
            coinChangeTextStyle = style.coinChangeText__green;
        }
        if (item.percent_change_24h < 0) {
            coinChangeTextStyle = style.coinChangeText__red;
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => onCoinSelected(item)}>
            <View style={ style.coinContainer }>
                <View style={ style.coinInfoContainer }>
                    <GlobalCoinIcon coin={ item.symbol } size="small" />
                    <Text style={ style.coinInfo_CoinName }>{ item.name }</Text>
                </View>

                {item.address ? (
                    <View>
                        <Text style={ style.coinBalanceText }>{ item.balance }</Text>
                        <Text style={ [style.coinChangeText, coinChangeTextStyle] }>{ item.percent_change_24h }%</Text>
                    </View>
                ) : (
                    <GlobalLoc locKey="CurrencyListScreen.unregisted" style={ style.unregistedText } />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};


export default CoinItem;
