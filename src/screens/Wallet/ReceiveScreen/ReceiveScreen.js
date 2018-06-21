import React, { Component } from 'react';
import { Text, View, Clipboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import { scale } from '@react-native-size-matters';
import I18n from '@i18n';

import style from '@styles/screens/Wallet/ReceiveScreen/ReceiveScreen';

export class ReceiveScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.ReceiveScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props){
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        Clipboard.setString(this.props.selectedCoin.wallet.address);
        Alert.alert(null,  I18n.t('Wallet.ReceiveScreen.copy'))
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
                        size={ scale(220) }
                        bgColor='black'
                        fgColor='white'
                    />
                    <Text style={ style.address }>{ selectedCoin.wallet.address }</Text>
                </View>

                {/* copy address button*/}
                <View style={ style.copyButton }>
                    <GlobalButton onPress={ this.copyToClipboard }>
                        <GlobalLoc locKey="Wallet.ReceiveScreen.copy" />
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
