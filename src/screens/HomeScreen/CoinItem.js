import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalLoc from '@components/GlobalLoc';

import style from '../../styles/screens/HomeScreen/CoinItem';


export const CoinItem = ({ item, ethCoin, goWalletInitialSettingScreen, goWalletScreen }) => {
    let coinChangeTextStyle = {};
    if (item.wallet) {
        if (item.change > 0) {
            coinChangeTextStyle = style.coinChangeText__green;
        }
        if (item.change < 0) {
            coinChangeTextStyle = style.coinChangeText__red;
        }
    }

    if (item.coin === 'drc' && !ethCoin.wallet) {
        return (
            <TouchableWithoutFeedback>
                <View style={ [style.coinContainer, style.coinContainer__gray] }>
                    <View style={ style.coinInfoContainer }>
                        <GlobalCoinIcon coin={ item.coin } size="small" />
                        <Text style={ style.coinInfo_CoinName }>{ item.coinName }</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    } else if (item.coin === 'drc' && ethCoin.wallet) {
        return <TouchableWithoutFeedback onPress={ goWalletScreen }>
            <View style={ style.coinContainer }>
                <View style={ style.coinInfoContainer }>
                    <GlobalCoinIcon coin={ item.coin } size="small" />
                    <Text style={ style.coinInfo_CoinName }>{ item.coinName }</Text>
                </View>

                <View>
                    <Text style={ style.coinBalanceText }>{ item.balance }</Text>
                    <Text style={ [style.coinChangeText, coinChangeTextStyle] }>{ item.change }%</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    } else {
        return (
            <TouchableWithoutFeedback onPress={ item.wallet ? goWalletScreen : goWalletInitialSettingScreen }>
                <View style={ style.coinContainer }>
                    <View style={ style.coinInfoContainer }>
                        <GlobalCoinIcon coin={ item.coin } size="small" />
                        <Text style={ style.coinInfo_CoinName }>{ item.coinName }</Text>
                    </View>

                    {item.wallet ? (
                        <View>
                            <Text style={ style.coinBalanceText }>{ item.balance }</Text>
                            <Text style={ [style.coinChangeText, coinChangeTextStyle] }>{ item.change }%</Text>
                        </View>
                    ) : (
                        <GlobalLoc locKey="HomeScreen.unregisted" style={ style.unregistedText } />
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};


export default CoinItem;
