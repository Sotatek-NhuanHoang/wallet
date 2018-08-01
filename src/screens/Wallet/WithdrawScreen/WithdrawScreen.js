import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Clipboard, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';

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
import ERROR_TYPES from '@configs/errorTypes';
import { WALLET_WITHDRAW_CHANGE_ADDRESS, WALLET_WITHDRAW_CHANGE_QUANTITY, WALLET_WITHDRAW_VERIFY_REQUESTED } from '@store/wallet';

import style from '@styles/screens/Wallet/WithdrawScreen/WithdrawScreen';


export class WithdrawScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.WithdrawScreen.title" />
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            const { address, quantity } = nextProps;
            let message = '';

            switch (nextProps.error) {
                case ERROR_TYPES.FIELD_REQUIRED:
                    if (!address) {
                        message = I18n.t('Wallet.WithdrawScreen.error_01');
                    } else {
                        message = I18n.t('Wallet.WithdrawScreen.error_03');
                    }
                    break;

                case ERROR_TYPES.INVALID_WALLET_ADDRESS:
                    message = I18n.t('Wallet.WithdrawScreen.error_02');
                    break;

                case ERROR_TYPES.INVALID_FORMAT:
                    message = I18n.t('Wallet.WithdrawScreen.error_04');
                    break;
            }

            Alert.alert(null, message);
        }

        if (nextProps.isVerified) {
            navigate('WithdrawConfirmScreen');
        }
    }


    goToQRCodeScreen() {
        navigate('QRScanScreen');
    }

    onAddressInputChanged(newAddress) {
        this.props.changeAddress(newAddress);
    }

    onQuanityInputChanged(newQuanity) {
        this.props.changeQuantity(newQuanity);
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

    async onPastedButtonClicked() {
        const address = await Clipboard.getString();
        this.props.changeAddress(address);
    }

    onNextButtonClicked() {
        const { isVerified } = this.props;
        if (isVerified) {
            navigate('WithdrawConfirmScreen');
            return;
        }

        this.props.verifyTransaction();
    }

    render() {
        const { selectedCoin, address, quantity } = this.props;

        return (
            <GlobalContainer>
                <ScrollView>
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
                                <GlobalLoc locKey="Wallet.WithdrawScreen.paste_btn" />
                            </GlobalButton>

                            <View style={{ flex: 1 }} />

                            {/* button open qrcode camera */}
                            <TouchableWithoutFeedback onPress={ this.goToQRCodeScreen }>
                                <Image style={ style.qrCodeButton } source={ Images.qrcode } />
                            </TouchableWithoutFeedback>
                        </View>

                        {/* input address */}
                        <GlobalTextInput
                            type="basic"
                            multiline={ false }
                            style={ style.inputContainer }
                            placeholder={ I18n.t('Wallet.WithdrawScreen.address') }
                            onChangeText={ this.onAddressInputChanged }
                            onSubmitEditing={ this.onAddressInputSubmitted }
                            value={ address }
                        />

                        {/* input amount */}
                        <GlobalTextInput
                            type="basic"
                            multiline={ false }
                            keyboardType="numeric"
                            style={ style.inputContainer }
                            placeholder={ I18n.t('Wallet.WithdrawScreen.amount', { coin: selectedCoin.symbol.toUpperCase() }) }
                            onGlobalTextInputCreated={ this.onQuantityInputCreated }
                            onChangeText={ this.onQuanityInputChanged }
                            onSubmitEditing={ this.onQuantityInputSubmitted }
                            value={ quantity }
                        />

                        {/* button next */}
                        <GlobalButton style={ style.nextButton } onPress={ this.onNextButtonClicked }>
                            <GlobalLoc locKey="Wallet.WithdrawScreen.next" />
                        </GlobalButton>
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, wallet }) => ({
    selectedCoin: global.selectedCoin,
    address: wallet.withdraw.address,
    quantity: wallet.withdraw.quantity,
    isVerified: wallet.withdraw.isVerified,
    error: wallet.withdraw.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeAddress: (address) => {
        dispatch(WALLET_WITHDRAW_CHANGE_ADDRESS(address));
    },
    changeQuantity: (quantity) => {
        dispatch(WALLET_WITHDRAW_CHANGE_QUANTITY(quantity));
    },
    verifyTransaction: () => {
        dispatch(WALLET_WITHDRAW_VERIFY_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawScreen);
