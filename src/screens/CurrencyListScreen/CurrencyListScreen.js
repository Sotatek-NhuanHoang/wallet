import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import SettingButton from './SettingButton';
import CoinItem from './CoinItem';
import { navigate } from '@utils/NavigationService';
import { globalCoinListSelector, globalEthCoinSelector, GLOBAL_SELECT_COIN, GLOBAL_COIN_LIST_REQUESTED } from '@store/global';
import { COIN_TYPES } from '@constants';

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

    componentDidMount() {
        this.props.getCoinList();
    };

    goWalletInitialSettingScreen() {
        navigate('WalletInitialSetting');
    };

    goWalletScreen() {
        navigate('Wallet');
    };

    onCoinSelected(selectedCoin) {
        const { type } = selectedCoin;
        const { ethCoin } = this.props;

        this.props.selectCoin(selectedCoin);

        switch (type) {
            case COIN_TYPES.COIN:
                if (selectedCoin.address) {
                    this.goWalletScreen();
                } else {
                    this.goWalletInitialSettingScreen();
                }
                break;

            case COIN_TYPES.ERC_TOKEN:
                if (ethCoin.address) {
                    this.goWalletScreen();
                }
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
                    keyExtractor={({ symbol }) => symbol}
                />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    coins: globalCoinListSelector(global),
    ethCoin: globalEthCoinSelector(global),
});

const mapDispatchToProps = (dispatch) => ({
    getCoinList: () => {
        dispatch(GLOBAL_COIN_LIST_REQUESTED());
    },
    selectCoin: (coin) => {
        dispatch(GLOBAL_SELECT_COIN(coin));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListScreen);
