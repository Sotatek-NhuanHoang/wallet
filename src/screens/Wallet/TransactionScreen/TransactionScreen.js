import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';

import style from '@styles/screens/Wallet/TransactionScreen/TransactionScreen';

export class TransactionScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.TransactionScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    render() {
        const { selectedCoin } = this.props;

        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={style.coinContainer}>
                    <GlobalCoinIcon coin={selectedCoin.coin} size="large" />
                    <Text style={style.coinName}>{selectedCoin.coinName}</Text>
                </View>
                  {/* list transaction*/}
                <FlatList></FlatList>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    selectedCoin: global.selectedCoin,
});

export default connect(mapStateToProps)(TransactionScreen);
// export default TransactionScreen;