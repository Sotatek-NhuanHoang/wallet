import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalLoc from 'components/GlobalLoc';
import { COIN_TYPES } from '@constants';

import style from 'styles/screens/CurrencyListScreen/CoinItem';


export const CoinItem = ({ item, ethCoin, onCoinSelected}) => {
    const { type } = item;

    switch (type) {
        case COIN_TYPES.COIN:
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
                                {item.percent_change_24h > 0 && <Text style={ [style.coinChangeText, style.coinChangeText__green] }>+{ item.percent_change_24h }%</Text>}
                                {item.percent_change_24h === 0 && <Text style={ [style.coinChangeText] }>+{ item.percent_change_24h }%</Text>}
                                {item.percent_change_24h < 0 && <Text style={ [style.coinChangeText, style.coinChangeText__red] }>{ item.percent_change_24h }%</Text>}
                            </View>
                        ) : (
                            <GlobalLoc locKey="CurrencyListScreen.unregisted" style={ style.unregistedText } />
                        )}
                    </View>
                </TouchableWithoutFeedback>
            );

        case COIN_TYPES.ERC_TOKEN:
            if (ethCoin.address) {
                return (
                    <TouchableWithoutFeedback onPress={() => onCoinSelected(item)}>
                        <View style={ style.coinContainer }>
                            <View style={ style.coinInfoContainer }>
                                <GlobalCoinIcon coin={ item.symbol } size="small" />
                                <Text style={ style.coinInfo_CoinName }>{ item.name }</Text>
                            </View>

                            <View>
                                <Text style={ style.coinBalanceText }>{ item.balance }</Text>

                                {item.percent_change_24h > 0 && <Text style={ [style.coinChangeText, style.coinChangeText__green] }>+{ item.percent_change_24h }%</Text>}
                                {item.percent_change_24h === 0 && <Text style={ [style.coinChangeText] }>+{ item.percent_change_24h }%</Text>}
                                {item.percent_change_24h < 0 && <Text style={ [style.coinChangeText, style.coinChangeText__red] }>{ item.percent_change_24h }%</Text>}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
            } else {
                return (
                    <TouchableWithoutFeedback>
                        <View style={ [style.coinContainer, style.coinContainer__gray] }>
                            <View style={ style.coinInfoContainer }>
                                <GlobalCoinIcon coin={ item.symbol } size="small" />
                                <Text style={ style.coinInfo_CoinName }>{ item.name }</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
            }

        default:
            return (
                <View style={ style.coinContainer }>
                    <View style={ style.coinInfoContainer }>
                        <Text style={ style.coinInfo_CoinName }>
                            { item.name } is not supported.
                        </Text>
                    </View>
                </View>
            );
    }
};


export default CoinItem;
