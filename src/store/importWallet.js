import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';

import { WALLET_UPDATE_WALLET } from 'store/wallet';
import WalletService from 'services/wallet';
import ERROR_TYPES from 'configs/errorTypes';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

export const IMPORT_WALLET_RESET_STATE = createAction('IMPORT_WALLET_UPDATE_PRIVATE_KEY');

export const IMPORT_WALLET_UPDATE_PRIVATE_KEY = createAction('IMPORT_WALLET_UPDATE_PRIVATE_KEY');

export const IMPORT_WALLET_SUCCEEDED = createAction('IMPORT_WALLET_SUCCEEDED');
export const IMPORT_WALLET_FAILED = createAction('IMPORT_WALLET_FAILED');
export const IMPORT_WALLET_REQUESTED = () => async (dispatch, getState) => {
    const { global, importWallet } = getState();
    const { selectedCoin } = global;
    const { privateKey } = importWallet;

    const { error } = WalletService.validatePrivateKey(selectedCoin, privateKey);
    if (error) {
        return dispatch(IMPORT_WALLET_FAILED(error));
    }

    const { keyStore, address } = WalletService.importWalletFromPrivateKey(selectedCoin, privateKey);

    await dispatch(WALLET_UPDATE_WALLET({
        coin: selectedCoin,
        data: { privateKey, keyStore, address, }
    }));
    await dispatch(IMPORT_WALLET_SUCCEEDED());
};



/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    privateKey: '',
    importWalletError: null,
    walletImported: false,
};

export const walletReducer = handleActions({
    IMPORT_WALLET_RESET_STATE: (state) => {
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                privateKey: '',
                importWalletError: null,
                walletImported: false,
            })
            .toJS();
    },

    IMPORT_WALLET_UPDATE_PRIVATE_KEY: (state, { payload }) => {
        const privateKey = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ privateKey, importWalletError: null, })
            .toJS();
    },

    IMPORT_WALLET_SUCCEEDED: (state) => {
        const newState = fromJS(state);
        return newState
            .mergeDeep({ walletImported: true, })
            .toJS();
    },

    IMPORT_WALLET_FAILED: (state, { payload }) => {
        const error = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ importWalletError: error, })
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
