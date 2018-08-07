import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';

import { WALLET_UPDATE_WALLET } from 'store/wallet';
import WalletService from 'services/wallet';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

// Create Wallet
export const NEW_WALLET_GENERATE_WALLET_SUCCEEDED = createAction('NEW_WALLET_GENERATE_WALLET_SUCCEEDED');
export const NEW_WALLET_GENERATE_WALLET_REQUESTED = () => (dispatch, getState) => {
    const { global } = getState();
    const { selectedCoin } = global;
    const newWallet = WalletService.generateWallet(selectedCoin);
    
    dispatch(NEW_WALLET_GENERATE_WALLET_SUCCEEDED({
        privateKey: newWallet.privateKey,
        keyStore: newWallet.keyStore,
        address: newWallet.address,
    }))
};

export const NEW_WALLET_ADD_NEW_WALLET_REQUESTED = () => (dispatch, getState) => {
    const { global, newWallet } = getState();
    const { selectedCoin } = global;
    const { privateKey, keyStore, address, } = newWallet;

    return dispatch(WALLET_UPDATE_WALLET({
        coin: selectedCoin,
        data: { privateKey, keyStore, address, }
    }));
};

/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    privateKey: '',
    address: '',
    keyStore: '',
};

export const walletReducer = handleActions({
    NEW_WALLET_GENERATE_WALLET_SUCCEEDED: (state, { payload }) => {
        const { privateKey, address, keyStore } = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ privateKey, address, keyStore, })
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
