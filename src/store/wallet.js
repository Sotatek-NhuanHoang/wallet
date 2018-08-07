import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';




/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */

export const WALLET_UPDATE_WALLET = createAction('WALLET_UPDATE_WALLET');



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
    WALLET_UPDATE_WALLET: (state, { payload }) => {
        const { coin, data } = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ [coin]: data, })
            .toJS();
    },
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
