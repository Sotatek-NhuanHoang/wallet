import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import SettingButton from './SettingButton';
import CoinItem from './CoinItem';
import { navigate } from '@utils/NavigationService';
import { globalEthCoinSelector } from '@store/global';

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
    }


    goWalletInitialSettingScreen() {
        navigate('WalletInitialSetting');
    };

    goWalletScreen() {
        navigate('Wallet');
    };

    renderCoin({ item }) {
        return (
            <CoinItem
                item={ item }
                ethCoin={ this.props.ethCoin }
                goWalletInitialSettingScreen={ this.goWalletInitialSettingScreen }
                goWalletScreen={ this.goWalletScreen }
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

export default connect(mapStateToProps)(CurrencyListScreen);
