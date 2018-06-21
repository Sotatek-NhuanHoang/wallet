import React, { Component } from 'react';
import { Text, View, SectionList, TouchableWithoutFeedback, WebView } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import { navigate } from '@utils/NavigationService';

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

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    onPressItem() {
        // open webview
        navigate('WebViewScreen', { url: 'https://blockchain.info' });
    }

    renderItem({ item, sectionID }) {
        return (
            <TouchableWithoutFeedback
                key={ sectionID }
                onPress={ this.onPressItem }
                style={ style.contain }
            >
                <View style={ style.itemContain }>
                    <View style={ style.itemHeader }>
                        {item.statusId === '0' ? (
                            <GlobalLoc style={ style.itemStatus } locKey="Wallet.TransactionScreen.sent" />
                        ) : (
                            <GlobalLoc style={ style.itemStatus } locKey="Wallet.TransactionScreen.received" />
                        )}
                        <Text style={ [style.itemMount, item.statusId === '0' ? style.textRed : style.textGreen] }>{ item.mount }</Text>
                    </View>
                    <Text style={ style.itemAddress }>{ item.address }</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderSectionHeader({ section }) {
        return (
            <View style={ style.itemHeader }>
                <View style={ style.seperator } />
                <Text style={ style.dateTrans }>{ section.title }</Text>
                <View style={ style.seperator } />
            </View>
        );
    }

    render() {
        const { selectedCoin, transactions } = this.props;
        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.coin } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.coinName }</Text>
                </View>
                {/* list transaction*/}
                <SectionList
                    renderItem={ this.renderItem }
                    renderSectionHeader={ this.renderSectionHeader }
                    sections={ transactions }
                    keyExtractor={(item) => item.id}
                />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global, wallet }) => ({
    selectedCoin: global.selectedCoin,
    transactions: wallet.transactions.btc
});

export default connect(mapStateToProps)(TransactionScreen);
