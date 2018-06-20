import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */



/**
 * =====================================================
 * Global thunk actions
 * =====================================================
 */



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    selectedCoin: {
        coin: 'btc',
        coinName: 'Bitcoin (BTC)',
    },
    coins: [
        {
            coin: 'btc',
            coinName: 'Bitcoin (BTC)',
            balance: 12.012312,
            change: 3.2348,
            wallet: {
                address: '',
            },
        },
        {
            coin: 'eth',
            coinName: 'Ethereum (ETH)',
            balance: 0,
            change: 0,
            wallet: null,
        },
        {
            coin: 'drc',
            coinName: 'Dronecoin (DRC)',
            balance: 123.123,
            change: -12.232,
            wallet: {
                address: '',
            },
        }
    ],
};

export const globalReducer = handleActions({

}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */

export const globalEthCoinSelector = createSelector(
    (globalState) => globalState.coins,
    (coins) => _.find(coins, { coin: 'eth' }),
);



export default globalReducer;
