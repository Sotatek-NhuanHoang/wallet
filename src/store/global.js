import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_SELECT_COIN = createAction('GLOBAL_SELECT_COIN');


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
        balance: 12.012312,
        change: 3.2348,
        wallet: {
            address: '',
        },
        price: 12.234,
        privateKey: '38f23cdd30fe4fb29f5dba4b940a8ae9f8ae2d7117e10665846e1a18fd9d731b',
    },
    coins: [
        {
            coin: 'btc',
            coinName: 'Bitcoin (BTC)',
            balance: 12.012312,
            change: 3.2348,
            price: 12.234,
            wallet: {
                address: '',
            },
            privateKey: '38f23cdd30fe4fb29f5dba4b940a8ae9f8ae2d7117e10665846e1a18fd9d731b',
        },
        {
            coin: 'eth',
            coinName: 'Ethereum (ETH)',
            balance: 0,
            change: 0,
            wallet: null,
            privateKey: '38f23cdd30fe4fb29f5dba4b940a8ae9f8ae2d7117e10665846e1a18fd9d731b',
        },
        {
            coin: 'drc',
            coinName: 'Dronecoin (DRC)',
            balance: 123.123,
            change: -12.232,
            wallet: {
                address: '',
            },
            privateKey: '38f23cdd30fe4fb29f5dba4b940a8ae9f8ae2d7117e10665846e1a18fd9d731b',
        }
    ],
};

export const globalReducer = handleActions({
    GLOBAL_SELECT_COIN: (state, action) => {
        return { ...state, selectedCoin: action.payload };
    },
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
