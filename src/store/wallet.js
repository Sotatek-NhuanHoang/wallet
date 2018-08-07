import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';




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

    eth: {
        symbol: 'eth',
        name: 'Ethereum',
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

    drc: {
        symbol: 'drc',
        name: 'Drone coin',
        type: 'token',

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

export const coinSelector = createSelector(
    (walletState, { coin }) => walletState[coin],
    (coin) => coin
);



export default walletReducer;
