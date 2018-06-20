import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';

import style from '@styles/screens/ReceiveScreen/ReceiveScreen';

export class ReceiveScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="ReceiveScreen.title" />
            </GlobalHeaderTitle>
        ),
    };

    state = {
        text: 'http://facebook.github.io/react-native/',
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
                {/* QR code*/}
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='black'
                    fgColor='white' />
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    selectedCoin: global.selectedCoin,
});

export default connect(mapStateToProps)(ReceiveScreen);
