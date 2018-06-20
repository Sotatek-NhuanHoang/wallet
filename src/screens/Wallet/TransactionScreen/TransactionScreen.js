import React, { Component } from 'react';
import { Text, View, SectionList, TouchableWithoutFeedback } from 'react-native';
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

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    onPressItem() {
    // open web
    }

    renderItem({ item, sectionID }) {
        return (
            <TouchableWithoutFeedback
                key={sectionID}
                onPress={this.onPressItem}
                style={style.contain}
            >
                <View style={style.itemContain}>
                    <View style={style.itemHeader}>
                        <Text style={style.itemStatus}>{item.status_mesg}</Text>
                        <Text style={[style.itemMount, item.status_id === '0' ? { color: 'red' } : { color: 'green' }]}>{item.mount}</Text>
                    </View>
                    <Text style={style.itemAddress}>{item.address}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderSectionHeader({section}) {
        return (
            <View style={style.itemHeader}>
                <View style={style.seperator} />
                <Text style={style.dateTrans}>{section.title}</Text>
                <View style={style.seperator} />
            </View>
        );
    }

    render() {
        const { selectedCoin } = this.props;
        let fakeData = [
            {
                title: '2018/05/',
                data: [
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '1',
                        status_mesg: 'Đã nhận được',
                        mount: '+9.765',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                ]
            },
            {
                title: '2018/06/',
                data: [
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '1',
                        status_mesg: 'Đã nhận được',
                        mount: '+8.0091',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                ]
            },
            {
                title: '2018/07/',
                data: [
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '1',
                        status_mesg: 'Đã nhận được',
                        mount: '+8.0091',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                    {
                        status_id: '0',
                        status_mesg: 'Đã gửi tiền đi',
                        mount: '-100.097',
                        address: 'x0xxxxxxxxxxxxxxxxxxxxxx'
                    },
                ]
            }
        ];
        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={style.coinContainer}>
                    <GlobalCoinIcon coin={selectedCoin.coin} size="large" />
                    <Text style={style.coinName}>{selectedCoin.coinName}</Text>
                </View>
                {/* list transaction*/}
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={fakeData}
                />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    selectedCoin: global.selectedCoin,
});

export default connect(mapStateToProps)(TransactionScreen);
// export default TransactionScreen;