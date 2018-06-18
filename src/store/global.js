import { handleActions, createAction } from 'redux-actions';
import _ from 'lodash';

import MasterApi from '../api/master';
import MarketPricesApi from '../api/marketPrices';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_GET_MARKETS_LOADING = createAction('GLOBAL_GET_MARKETS_LOADING');
export const GLOBAL_GET_MARKETS_SUCCEEDED = createAction('GLOBAL_GET_MARKETS_SUCCEEDED');
export const GLOBAL_GET_MARKETS_FAILED = createAction('GLOBAL_GET_MARKETS_FAILED');



/**
 * =====================================================
 * Global thunk actions
 * =====================================================
 */

export const GLOBAL_GET_MARKETS_REQUESTED = (payload = {}) => async (dispatch, getState) => {
    const { force } = payload;
    const currentState = getState().global;

    if (!(force || currentState.markets.data.length === 0 || currentState.markets.loading)) {
        return;
    }

    try {
        dispatch(GLOBAL_GET_MARKETS_LOADING());

        const responses = await Promise.all([
            MasterApi.get(),
            MarketPricesApi.get()
        ]);

        const rawMarkets = responses[0].data.data.coin_settings;
        const prices = responses[1].data.data;

        // update markets' price
        const updatedMarkets = rawMarkets.map((market) => {
            const coinPair = market.currency + '_' + market.coin;
            return { ...market, ...prices[coinPair] };
        });

        dispatch(GLOBAL_GET_MARKETS_SUCCEEDED(updatedMarkets));
    } catch (error) {
        dispatch(GLOBAL_GET_MARKETS_FAILED(error));
    }
};



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    markets: {
        data: [],
        loading: false,
        error: null,
    },
};

export const globalReducer = handleActions({
    GLOBAL_GET_MARKETS_LOADING: (state) => {
        return {
            ...state,
            markets: { ...state.markets, loading: true, error: null },
        };
    },

    GLOBAL_GET_MARKETS_SUCCEEDED: (state, action) => {
        if (!action.payload) {
            return { ...state };
        }

        const markets = action.payload;
        return {
            ...state,
            markets: { ...state.markets, data: markets, loading: false, error: null },
        };
    },

    GLOBAL_GET_MARKETS_FAILED: (state, action) => {
        const error = action.payload;
        return {
            ...state,
            markets: { ...state.markets, loading: false, error: error },
        };
    },
}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */

export const globalHotMarketsSelector = (globalState) => {
    return globalState.markets.data.slice(0, 5);
};

export const globalBTC24TopMarketsSelector = (globalState) => {
    const btcMarkets = _.filter(globalState.markets.data, (market) => {
        return market.currency.toUpperCase() === 'BTC';
    });
    const btcTopMarkets = _.orderBy(btcMarkets, ['volume', 'coin'], ['desc', 'desc']);
    
    return btcTopMarkets;
};


export default globalReducer;
