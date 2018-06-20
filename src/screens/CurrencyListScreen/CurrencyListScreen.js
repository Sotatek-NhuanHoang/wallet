import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import SettingButton from './SettingButton';
import CoinItem from './CoinItem';
import { navigate } from '@utils/NavigationService';
import { globalEthCoinSelector, GLOBAL_SELECT_COIN } from '@store/global';
import { getAllCoinsSync, getPrice, getBalance, sendCoin } from '@bc';
import {
    createNewAccountSync as createNewETHAccountSync,
    privateKeyToAccountSync as privateKeyToETHAccountSync
} from '@bc/eth';
import {
    createNewAccountSync as createNewBTCAccountSync,
    privateKeyToAccountSync as privateKeyToBTCAccountSync
} from '@bc/btc';

import style from '@styles/screens/CurrencyListScreen/CurrencyListScreen';


export class CurrencyListScreen extends Component {

    static navigationOptions = {
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="CurrencyListScreen.title" />
            </GlobalHeaderTitle>
        ),
        headerRight: (
            <SettingButton />
        ),
    };


    constructor(props) {
        super(props);
        this.renderCoin = this.renderCoin.bind(this);
        this.onCoinSelected = this.onCoinSelected.bind(this);

        // Test methods
        // TODO: remove me.
        const allCoins = getAllCoinsSync();
        console.log('getAllCoinsSync: ' + JSON.stringify(allCoins));
        _.each(allCoins, coin => {
            const symbol = coin.symbol;
            getPrice(symbol).then(price => console.log(`getPrice ${symbol}: ${JSON.stringify(price)}`));
            getBalance(symbol, 'COIN_ADDRESS').then(balance => console.log(`getBalance ${symbol}: ${balance}`));
        });
        acc = createNewETHAccountSync('somesecretpassword');
        console.log(`Created new ETH address: ${JSON.stringify(acc)}`);
        acc = createNewBTCAccountSync('somesecretpassword');
        console.log(`Created new BTC address: ${JSON.stringify(acc)}`);
        acc = privateKeyToETHAccountSync('private_key_here');
        console.log(`Imported ETH address: ${JSON.stringify(acc)}`);
        acc = privateKeyToBTCAccountSync('private_key_here');
        console.log(`Imported BTC address: ${JSON.stringify(acc)}`);
        sendCoin().then(res => console.log(`sendCoin success: ${JSON.stringify(res)}`))
            .catch(err => console.warn(`sendCoin failed: ${JSON.stringify(err)}`));
        // End Test methods
    }


    goWalletInitialSettingScreen() {
        navigate('WalletInitialSetting');
    };

    goWalletScreen() {
        navigate('Wallet');
    };

    onCoinSelected(coin) {
        this.props.selectCoin(coin);

        if (coin.coin === 'drc' && this.props.ethCoin.wallet) {
            this.goWalletScreen();
        } else if (coin.wallet) {
            this.goWalletScreen();
        } else {
            this.goWalletInitialSettingScreen();
        }
    }

    renderCoin({ item }) {
        return (
            <CoinItem
                item={ item }
                ethCoin={ this.props.ethCoin }
                onCoinSelected={ this.onCoinSelected }
            />
        );
    }

    render() {
        const { coins } = this.props;

        return (
            <GlobalContainer style={ style.container }>
                <FlatList
                    style={{ flex: 1 }}
                    data={ coins }
                    renderItem={ this.renderCoin }
                    keyExtractor={({ coin }) => coin}
                />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    coins: global.coins,
    ethCoin: globalEthCoinSelector(global),
});

const mapDispatchToProps = (dispatch) => ({
    selectCoin: (coin) => {
        dispatch(GLOBAL_SELECT_COIN(coin));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListScreen);
