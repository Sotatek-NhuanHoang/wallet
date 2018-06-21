import React, { Component } from 'react';
import { Text, View, Clipboard, ToastAndroid } from 'react-native';
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

    copyToClipboard = (address) => {
        Clipboard.setString(address);
        ToastAndroid.showWithGravity(
            'Clipboard',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    };

    render() {
        const { selectedCoin } = this.props;
        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.coin } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.coinName }</Text>
                </View>
                {/* QR code and address*/}
                <View style={ style.qrContainer }
                >
                    <QRCode
                        value={ selectedCoin.wallet.address }
                        size={ 200 }
                        bgColor='black'
                        fgColor='white'
                    />
                    <Text style={ style.address }>{ selectedCoin.wallet.address }</Text>
                </View>
                {/* copy address button*/}
                <View style={ style.copyButton }>
                    <GlobalButton onPress={ () => this.copyToClipboard(selectedCoin.wallet.address) }>
                        <GlobalLoc locKey="ReceiveScreen.copy" />
                    </GlobalButton>
                </View>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global }) => ({
    selectedCoin: global.selectedCoin,
});

export default connect(mapStateToProps)(ReceiveScreen);
