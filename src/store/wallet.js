import { handleActions, createAction } from 'redux-actions';

import MockApi from '@api/mockApi';
import validate, { bitcoinAddressConstraint, ethAddressConstraint, quantityConstraint } from '@utils/validate';
import { ERROR_TYPES } from '../configs/errorTypes';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

// withdraw actions
export const WALLET_WITHDRAW_RESET_STATE = createAction('WALLET_WITHDRAW_RESET_STATE');
export const WALLET_WITHDRAW_CHANGE_ADDRESS = createAction('WALLET_WITHDRAW_CHANGE_ADDRESS');
export const WALLET_WITHDRAW_CHANGE_QUANTITY = createAction('WALLET_WITHDRAW_CHANGE_QUANTITY');

export const WALLET_WITHDRAW_VERIFY_SUCCEEDED = createAction('WALLET_WITHDRAW_VERIFY_SUCCEEDED');
export const WALLET_WITHDRAW_VERIFY_FAILED = createAction('WALLET_WITHDRAW_VERIFY_FAILED');
export const WALLET_WITHDRAW_VERIFY_REQUESTED = () => (dispatch, getState) => {
    const { global, wallet } = getState();

    const { selectedCoin } = global;
    const { address, quantity } = wallet.withdraw;

    // Validate address
    let addressValidationResult = null;
    switch (selectedCoin.symbol.toUpperCase()) {
        case 'BTC':
            addressValidationResult = validate({ address }, { address: bitcoinAddressConstraint, });
            break;

        case 'ETH':
        case 'DRC':
            addressValidationResult = validate({ address }, { address: ethAddressConstraint, });
            break;
    }

    if (addressValidationResult) {
        const error = addressValidationResult[0].error;
        dispatch(WALLET_WITHDRAW_VERIFY_FAILED(error));
        return;
    }


    // Validate quantity
    const quantityValidationResult = validate({ quantity }, { quantity: quantityConstraint });
    if (quantityValidationResult) {
        const error = quantityValidationResult[0].error;
        dispatch(WALLET_WITHDRAW_VERIFY_FAILED(error));
        return;
    }


    // Every information is correct
    dispatch(WALLET_WITHDRAW_VERIFY_SUCCEEDED());
};

// Withdraw password confirmation
export const WALLET_WITHDRAW_CONFIRM_CHANGE_CONFIRM_PASSWORD = createAction('WALLET_WITHDRAW_CONFIRM_CHANGE_CONFIRM_PASSWORD');
export const WALLET_WITHDRAW_CONFIRM_PASSWORD_SHOW_INPUT = createAction('WALLET_WITHDRAW_CONFIRM_PASSWORD_SHOW_INPUT');
export const WALLET_WITHDRAW_CONFIRM_PASSWORD_HIDE_INPUT = createAction('WALLET_WITHDRAW_CONFIRM_PASSWORD_HIDE_INPUT');
export const WALLET_WITHDRAW_CONFIRM_PASSWORD_SUCCEEDED = createAction('WALLET_WITHDRAW_CONFIRM_PASSWORD_SUCCEEDED');
export const WALLET_WITHDRAW_CONFIRM_PASSWORD_FAILED = createAction('WALLET_WITHDRAW_CONFIRM_PASSWORD_FAILED');
export const WALLET_WITHDRAW_CONFIRM_PASSWORD_REQUESTED = () => (dispatch, getState) => {
    const { global, wallet } = getState();
    const { password } = global;
    const { confirmPassword } = wallet.withdrawConfirm;

    if (password !== confirmPassword) {
        dispatch(WALLET_WITHDRAW_CONFIRM_PASSWORD_FAILED());
        return;
    }
    dispatch(WALLET_WITHDRAW_CONFIRM_PASSWORD_SUCCEEDED());
};

// Transaction - make withdrawal
export const WALLET_TRANSACTION_MAKE_WITHDRAWAL_LOADING = createAction('WALLET_TRANSACTION_MAKE_WITHDRAWAL_LOADING');
export const WALLET_TRANSACTION_MAKE_WITHDRAWAL_SUCCEEDED = createAction('WALLET_TRANSACTION_MAKE_WITHDRAWAL_SUCCEEDED');
export const WALLET_TRANSACTION_MAKE_WITHDRAWAL_FAILED = createAction('WALLET_TRANSACTION_MAKE_WITHDRAWAL_FAILED');
export const WALLET_TRANSACTION_MAKE_WITHDRAWAL_REQUESTED = () => async (dispatch, getState) => {
    dispatch(WALLET_TRANSACTION_MAKE_WITHDRAWAL_LOADING());

    try {
        await MockApi.sendCoin();
        dispatch(WALLET_TRANSACTION_MAKE_WITHDRAWAL_SUCCEEDED());
    } catch (error) {
        dispatch(WALLET_TRANSACTION_MAKE_WITHDRAWAL_FAILED(ERROR_TYPES.REQUEST_FAILED));
    }
};



/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    transactions: {
        btc: [
            {
                title: '2018/05/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-1.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+9.765',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            },
            {
                title: '2018/06/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+8.0091',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            },
            {
                title: '2018/07/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+8.0091',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            }
        ]
    },
    withdraw: {
        address: '',
        quantity: '',
        isVerified: false,
        error: null,
    },
    withdrawConfirm: {
        isPasswordInputShow: false,
        isPasswordConfirmed: false,
        confirmPassword: '',
        error: null,
    },
    transaction: {
        loading: false,
        isSucceeded: false,
        error: null,
    },
};

export const walletReducer = handleActions({
    WALLET_WITHDRAW_RESET_STATE: (state) => {
        return {
            ...state,
            withdraw: {
                address: '',
                quantity: '',
                isVerified: false,
                error: null,
            },
            withdrawConfirm: {
                isPasswordInputShow: false,
                isPasswordConfirmed: false,
                confirmPassword: '',
                error: null,
            },
            transaction: {
                loading: false,
                isSucceeded: false,
                error: null,
            },
        };
    },

    WALLET_WITHDRAW_CHANGE_ADDRESS: (state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                address: payload,
                isVerified: false,
                error: null,
            },
        };
    },

    WALLET_WITHDRAW_CHANGE_QUANTITY: (state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                quantity: payload,
                isVerified: false,
                error: null,
            },
        };
    },

    // Verify transaction
    WALLET_WITHDRAW_VERIFY_SUCCEEDED: ( state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                isVerified: true,
                error: null,
            },
        };
    },

    WALLET_WITHDRAW_VERIFY_FAILED: ( state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                isVerified: false,
                error: payload,
            },
        };
    },

    // Confirm password
    WALLET_WITHDRAW_CONFIRM_CHANGE_CONFIRM_PASSWORD: (state, { payload }) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                confirmPassword: payload,
                error: null,
            },
        };
    },
    WALLET_WITHDRAW_CONFIRM_PASSWORD_SHOW_INPUT: (state) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                isPasswordInputShow: true,
                confirmPassword: '',
                error: null,
            },
        };
    },
    WALLET_WITHDRAW_CONFIRM_PASSWORD_HIDE_INPUT: (state) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                isPasswordInputShow: false,
                confirmPassword: '',
                error: null,
            },
        };
    },
    WALLET_WITHDRAW_CONFIRM_PASSWORD_SUCCEEDED: (state) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                isPasswordInputShow: false,
                isPasswordConfirmed: true,
                error: null,
            },
        };
    },
    WALLET_WITHDRAW_CONFIRM_PASSWORD_FAILED: (state) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                isPasswordInputShow: false,
                error: ERROR_TYPES.INVALID_PASSWORD,
            },
        };
    },

    // Transaction make withdrawal
    WALLET_TRANSACTION_MAKE_WITHDRAWAL_LOADING: (state) => {
        return {
            ...state,
            withdrawConfirm: {
                ...state.withdrawConfirm,
                isPasswordInputShow: false,
                error: null,
            },
            transaction: {
                ...state.transaction,
                loading: true,
                isSucceeded: false,
                error: null,
            },
        };
    },
    WALLET_TRANSACTION_MAKE_WITHDRAWAL_SUCCEEDED: (state) => {
        return {
            ...state,
            transaction: {
                ...state.transaction,
                loading: false,
                isSucceeded: true,
                error: null,
            },
        };
    },
    WALLET_TRANSACTION_MAKE_WITHDRAWAL_FAILED: (state, { payload }) => {
        return {
            ...state,
            transaction: {
                ...state.transaction,
                loading: false,
                isSucceeded: false,
                error: payload,
            },
        };
    },
}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
