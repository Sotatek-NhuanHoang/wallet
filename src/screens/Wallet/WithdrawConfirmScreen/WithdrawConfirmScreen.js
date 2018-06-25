import React, { Component } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import Dialog from "react-native-dialog";

import GlobalLoc from '@components/GlobalLoc';
import GlobalHeaderTitle from '@components/GlobalHeaderTitle';
import GlobalContainer from '@components/GlobalContainer';
import GlobalButton from '@components/GlobalButton';
import GlobalHeaderBackButton from '@components/GlobalHeaderBackButton';
import GlobalCoinIcon from '@components/GlobalCoinIcon';
import I18n from '@i18n';
import { navigate } from '@utils/NavigationService';
import ERROR_TYPES from '@configs/errorTypes';
import {
    WALLET_WITHDRAW_CONFIRM_PASSWORD_SHOW_INPUT,
    WALLET_WITHDRAW_CONFIRM_PASSWORD_HIDE_INPUT,
    WALLET_WITHDRAW_CONFIRM_CHANGE_CONFIRM_PASSWORD,
    WALLET_WITHDRAW_CONFIRM_PASSWORD_REQUESTED,
    WALLET_TRANSACTION_MAKE_WITHDRAWAL_REQUESTED,
} from '@store/wallet';

import style from '@styles/screens/Wallet/WithdrawConfirmScreen/WithdrawConfirmScreen';


export class WithdrawScreenConfirm extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.WithdrawConfirmScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    constructor(props) {
        super(props);
        this.onSendCoinButtonClicked = this.onSendCoinButtonClicked.bind(this);
        this.onPasswordDialogOkButtonClicked = this.onPasswordDialogOkButtonClicked.bind(this);
        this.onPasswordDialogCancelButtonClicked = this.onPasswordDialogCancelButtonClicked.bind(this);
        this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
        this.onTransactionAlertButtonClicked = this.onTransactionAlertButtonClicked.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { withdrawConfirm, transaction } = nextProps;

        if (transaction.loading) {
            return;
        } else if (transaction.error) {
            Alert.alert(null, I18n.t('Wallet.WithdrawConfirmScreen.transaction_send_failed'), [
                { text: 'OK', onPress: this.onTransactionAlertButtonClicked }
            ], { cancelable: false });
            return;
        } else if (transaction.isSucceeded) {
            Alert.alert(null, I18n.t('Wallet.WithdrawConfirmScreen.transaction_send_succeeded'), [
                { text: 'OK', onPress: this.onTransactionAlertButtonClicked }
            ], { cancelable: false });
            return;
        }


        if (withdrawConfirm.error) {
            switch (withdrawConfirm.error) {
                case ERROR_TYPES.INVALID_PASSWORD:
                    Alert.alert(null, I18n.t('Wallet.WithdrawConfirmScreen.invalid_password'), [
                        { text: 'OK', onPress: this.props.showPasswordInputDialog }
                    ], { cancelable: false });
                    break;
            }
        }
        if (withdrawConfirm.isPasswordConfirmed) {
            this.props.sendCoin();
        }

    }

    // Input password dialog
    onConfirmPasswordChanged(newConfirmPassword) {
        this.props.changeConfirmPassword(newConfirmPassword);
    }
    onPasswordDialogOkButtonClicked() {
        this.props.confirmUserPassword();
    }
    onPasswordDialogCancelButtonClicked() {
        this.props.hidePasswordInputDialog();
    }

    // Transaction alert
    onTransactionAlertButtonClicked() {
        navigate('TransactionScreen');
    }

    onSendCoinButtonClicked() {
        const { withdrawConfirm } = this.props;

        if (!withdrawConfirm.isPasswordConfirmed) {
            this.props.showPasswordInputDialog();
        } else {
            this.props.sendCoin();
        }
    }

    render() {
        const { selectedCoin, withdraw, withdrawConfirm } = this.props;
        const enterPasswordLabel = I18n.t('Wallet.WithdrawConfirmScreen.password');

        return (
            <GlobalContainer>
                <ScrollView style={ style.container }>
                    {/* Icon and coin name */}
                    <View style={ style.coinContainer }>
                        <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                        <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                    </View>

                    <View style={ style.transactionItemContainer }>
                        <GlobalLoc locKey="Wallet.WithdrawConfirmScreen.address" style={ style.transactionItem_Label } />
                        <Text style={ style.transactionItem_Value }>
                            { withdraw.address }
                        </Text>
                    </View>

                    <View style={ style.transactionItemContainer }>
                        <GlobalLoc locKey="Wallet.WithdrawConfirmScreen.amount" style={ style.transactionItem_Label } />
                        <Text style={ style.transactionItem_Value }>
                            { withdraw.quantity }
                        </Text>
                    </View>

                    <View style={ style.transactionItemContainer }>
                        <GlobalLoc locKey="Wallet.WithdrawConfirmScreen.fee" style={ style.transactionItem_Label } />
                        <Text style={ style.transactionItem_Value }>
                            0
                        </Text>
                    </View>

                    <GlobalButton type="primary" style={ style.sendCoinButton } onPress={ this.onSendCoinButtonClicked }>
                        <GlobalLoc locKey="Wallet.WithdrawConfirmScreen.send" />
                    </GlobalButton>
                </ScrollView>


                {/* Password confirmation modal */}
                <Dialog.Container visible={ withdrawConfirm.isPasswordInputShow } style={{ padding: 30 }}>
                    <Dialog.Description style={{ textAlign: 'center' }}>
                        { enterPasswordLabel }
                    </Dialog.Description>

                    <Dialog.Input
                        onChangeText={ this.onConfirmPasswordChanged }
                        value={ withdrawConfirm.confirmPassword }
                    />

                    <Dialog.Button label="Cancel" onPress={ this.onPasswordDialogCancelButtonClicked } />
                    <Dialog.Button label="OK" onPress={ this.onPasswordDialogOkButtonClicked } />
                </Dialog.Container>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, wallet }) => ({
    selectedCoin: global.selectedCoin,
    withdraw: wallet.withdraw,
    withdrawConfirm: wallet.withdrawConfirm,
    transaction: wallet.transaction,
});

const mapDispatchToProps = (dispatch) => ({
    showPasswordInputDialog: () => {
        dispatch(WALLET_WITHDRAW_CONFIRM_PASSWORD_SHOW_INPUT());
    },
    hidePasswordInputDialog: () => {
        dispatch(WALLET_WITHDRAW_CONFIRM_PASSWORD_HIDE_INPUT());
    },
    changeConfirmPassword: (newConfirmPassword) => {
        dispatch(WALLET_WITHDRAW_CONFIRM_CHANGE_CONFIRM_PASSWORD(newConfirmPassword));
    },
    confirmUserPassword: () => {
        dispatch(WALLET_WITHDRAW_CONFIRM_PASSWORD_REQUESTED());
    },
    sendCoin: () => {
        dispatch(WALLET_TRANSACTION_MAKE_WITHDRAWAL_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawScreenConfirm);
