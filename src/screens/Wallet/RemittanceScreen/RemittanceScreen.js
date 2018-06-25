import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Clipboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';
import web3 from 'web3';
import { Address } from 'bitcore-lib';

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import GlobalTextInput from '@components/GlobalTextInput';
import I18n from '@i18n';
import Images from '@assets/images';
import { navigate } from '@utils/NavigationService';

import { WALLET_CHANGE_WITHDRAW_ADDRESS, WALLET_CHANGE_WITHDRAW_QUANTITY } from '@store/wallet';

import style from '@styles/screens/Wallet/RemittanceScreen/RemittanceScreen';

export class RemittanceScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.RemittanceScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);
       
        this.onPastedButtonClicked = this.onPastedButtonClicked.bind(this);
        this.goToQRCodeScreen = this.goToQRCodeScreen.bind(this);
        this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
        this.onQuantityInputCreated = this.onQuantityInputCreated.bind(this);
        this.onAddressInputSubmitted = this.onAddressInputSubmitted.bind(this);
        this.onQuantityInputSubmitted = this.onQuantityInputSubmitted.bind(this);
        this.onAddressInputChanged = this.onAddressInputChanged.bind(this);
        this.onQuanityInputChanged = this.onQuanityInputChanged.bind(this);
    }
    goToQRCodeScreen() {
        navigate('CurrencyListScreen');
    }

    checkEmptyInput(textInput) {
        return !textInput;
    }

    checkSyntaxQuanity(quantity) {
        let reg = new RegExp("^([a-zA-Z0-9])+$");
        return reg.test(quantity);
    }

    checkSyntaxAddress(address, symbol) {
        switch(symbol.toUpperCase()) {
            case 'BTC':
                return Address.isValid(address);

            case 'ETH':
            case 'DRC':
                return web3.utils.isAddress(address);
        }
    }


    async onPastedButtonClicked() {
        let address = await Clipboard.getString();
        this.props.changeAddress(address);
    }

    onAddressInputChanged(newAddress) {
        this.props.changeAddress(newAddress);
    }

    onQuanityInputChanged(newQuanity) {
        this.props.changeQuantity(newQuanity);
    }

    goToSendConfirmScreen() {

    }

    onNextButtonClicked() {
        let message = '';
        let isError = false;
        const { selectedCoin, address, quantity } = this.props;
       
        if (this.checkEmptyInput(address)) {
            message = I18n.t('Wallet.RemittanceScreen.error_01');
            isError = true;
        } else if (this.checkSyntaxAddress(address, selectedCoin.symbol)) {
            message = I18n.t('Wallet.RemittanceScreen.error_02');
            isError = true;
        } else if (this.checkEmptyInput(quantity)) {
            message = I18n.t('Wallet.RemittanceScreen.error_03');
            isError = true;
        } else if (this.checkSyntaxQuanity(quantity)) {
            message = I18n.t('Wallet.RemittanceScreen.error_04');
            isError = true;
        }

        if (isError) {
            Alert.alert (
                null,
                message,
                null,
                { cancelable: false }//dismissed by tapping outside of the alert box 
            )
        } else {
           this.goToSendConfirmScreen();
        }
    }


    onQuantityInputCreated(quanityInput) {
        this.quanityInput = quanityInput;
    }

    onAddressInputSubmitted() {
        this.quanityInput.focus();
    }

    onQuantityInputSubmitted() {
        this.onNextButtonClicked();
    }

    render() {
        const { selectedCoin, address, quantity } = this.props;

        return (
            <GlobalContainer >
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                </View>

                <View style={ style.container }>
                    <View style={ style.pasteQrContainer }>
                        {/* button paste */}
                        <GlobalButton
                            style={ style.pasteButton }
                            type='secondary'
                            onPress={this.onPastedButtonClicked}
                        >
                            <GlobalLoc locKey="Wallet.RemittanceScreen.paste_btn" />
                        </GlobalButton>

                        <View style={{ flex: 1 }} />

                        {/* button open qrcode camera */}
                        <TouchableWithoutFeedback onPress={ this.goToQRCodeScreen }>
                            <Image
                                style={ style.qrCodeButton }
                                source={ Images.qrcode }
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    {/* input address */}
                    <GlobalTextInput
                        type="basic"
                        multiline={ false }
                        style={ style.inputContainer }
                        placeholder={ I18n.t('Wallet.RemittanceScreen.address') }
                        onChangeText={ this.onAddressInputChanged }
                        onSubmitEditing={ this.onAddressInputSubmitted }
                        value={ address }
                    />

                    {/* input amount */}
                    <GlobalTextInput
                        type="basic"
                        multiline={ false }
                        style={ style.inputContainer }
                        placeholder={ I18n.t('Wallet.RemittanceScreen.amount', { coin: selectedCoin.symbol.toUpperCase() }) }
                        onChangeText={ this.onQuanityInputChanged }
                        onGlobalTextInputCreated={ this.onQuantityInputCreated }
                        onSubmitEditing={ this.onQuantityInputSubmitted }
                        value={ quantity }
                    />

                    {/* button next */}
                    <GlobalButton
                        style={ style.nextButton }
                        onPress={ this.onNextButtonClicked }>
                        <GlobalLoc locKey="Wallet.RemittanceScreen.next" />
                    </GlobalButton>
                </View>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ global, wallet }) => ({
    selectedCoin: global.selectedCoin,
    address: wallet.withdraw.address,
    quantity: wallet.withdraw.quantity,    
});

const mapDispatchToProps = (ditpatch) => ({
    changeAddress: (address) => {
        ditpatch(WALLET_CHANGE_WITHDRAW_ADDRESS(address));
    },
    changeQuantity: (quantity) => {
        ditpatch(WALLET_CHANGE_WITHDRAW_QUANTITY(quantity));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RemittanceScreen);
