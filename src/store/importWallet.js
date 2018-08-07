import { handleActions, createAction } from 'redux-actions';

import MockApi from '@api/mockApi';
import validate, { bitcoinAddressConstraint, ethAddressConstraint, quantityConstraint } from 'utils/validate';
import { ERROR_TYPES } from '../configs/errorTypes';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

// Create Wallet

export const WALLET_GENERATE_NEW_WALLET_REQUESTED = () => (dispatch) => {
    
};



/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    privateKey: '',
    importWalletError: null,
};

export const walletReducer = handleActions({
    
}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
