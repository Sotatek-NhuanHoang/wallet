import { handleActions, createAction } from 'redux-actions';

import MockApi from '@api/mockApi';
import validate, { bitcoinAddressConstraint, ethAddressConstraint, quantityConstraint } from 'utils/validate';
import { ERROR_TYPES } from '../configs/errorTypes';



/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */




/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    btc: {
        symbol: 'btc',
        name: 'Bitcoin',
        type: 'coin',

        privateKey: '',
        address: '',
        keyStore: '',

        balance: 0,
        priceUsd: 0,
        priceJpy: 0,
        percentChange24hUsd: 0,
        percentChange24hJpy: 0,
        balanceRequesting: false,
        balanceRequestError: null,
    },
};

export const walletReducer = handleActions({
    
}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
