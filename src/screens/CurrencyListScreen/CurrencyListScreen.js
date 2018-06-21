import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import SettingButton from './SettingButton';
import CoinItem from './CoinItem';
import { navigate } from '@utils/NavigationService';
import { globalCoinListSelector, GLOBAL_SELECT_COIN, GLOBAL_COIN_LIST_REQUESTED } from '@store/global';

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
        this.props.selectCoin(selectedCoin);

        if (selectedCoin.address) {
            this.goWalletScreen();
        } else {
            this.goWalletInitialSettingScreen();
        }
    }

    renderCoin({ item }) {
        return (
            <CoinItem
                item={ item }
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
