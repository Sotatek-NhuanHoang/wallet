import { handleActions, createAction } from 'redux-actions';
import validate, { bitcoinAddressConstraint, ethAddressConstraint, quantityConstraint } from '@utils/validate';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

// withdraw actions
export const WALLET_RESET_WITHDRAW = createAction('WALLET_RESET_WITHDRAW');
export const WALLET_CHANGE_WITHDRAW_ADDRESS = createAction('WALLET_CHANGE_WITHDRAW_ADDRESS');
export const WALLET_CHANGE_WITHDRAW_QUANTITY = createAction('WALLET_CHANGE_WITHDRAW_QUANTITY');

// Transaction verification
export const WALLET_VERIFY_TRANSACTION_SUCCEEDED = createAction('WALLET_VERIFY_TRANSACTION_SUCCEEDED');
export const WALLET_VERIFY_TRANSACTION_FAILED = createAction('WALLET_VERIFY_TRANSACTION_FAILED');
export const WALLET_VERIFY_TRANSACTION_REQUESTED = () => (dispatch, getState) => {
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
        dispatch(WALLET_VERIFY_TRANSACTION_FAILED(error));
        return;
    }


    // Validate quantity
    const quantityValidationResult = validate({ quantity }, { quantity: quantityConstraint });
    if (quantityValidationResult) {
        const error = quantityValidationResult[0].error;
        dispatch(WALLET_VERIFY_TRANSACTION_FAILED(error));
        return;
    }


    // Every information is correct
    dispatch(WALLET_VERIFY_TRANSACTION_SUCCEEDED());
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
    }
};

export const walletReducer = handleActions({
    WALLET_RESET_WITHDRAW: (state) => {
        return {
            ...state,
            withdraw: {
                address: '',
                quantity: '',
                isVerified: false,
                error: null,
            },
        };
    },

    WALLET_CHANGE_WITHDRAW_ADDRESS: (state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                address: payload,
                error: null,
            },
        };
    },

    WALLET_CHANGE_WITHDRAW_QUANTITY: (state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                quantity: payload,
                error: null,
            },
        };
    },

    WALLET_VERIFY_TRANSACTION_SUCCEEDED: ( state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                isVerified: true,
                error: null,
            },
        };
    },

    WALLET_VERIFY_TRANSACTION_FAILED: ( state, { payload }) => {
        return {
            ...state,
            withdraw: {
                ...state.withdraw,
                isVerified: false,
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
