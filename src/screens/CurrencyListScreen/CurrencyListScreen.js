import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import SettingButton from './SettingButton';
import CoinItem from './CoinItem';
import { navigate } from '@utils/NavigationService';
import { globalEthCoinSelector, GLOBAL_SELECT_COIN } from '@store/global';

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
