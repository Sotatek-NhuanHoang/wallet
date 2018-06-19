import { handleActions, createAction } from 'redux-actions';


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
};

export const globalReducer = handleActions({

}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */



export default globalReducer;
