import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';
import MockApi from '@api/mockApi';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_SELECT_COIN = createAction('GLOBAL_SELECT_COIN');

// Coin list
export const GLOBAL_COIN_LIST_LOADING = createAction('GLOBAL_COIN_LIST_LOADING');
export const GLOBAL_COIN_LIST_SUCCEEDED = createAction('GLOBAL_COIN_LIST_SUCCEEDED');
export const GLOBAL_COIN_LIST_FAILED = createAction('GLOBAL_COIN_LIST_FAILED');
export const GLOBAL_COIN_LIST_REQUESTED = () => async (dispatch) => {
    dispatch(GLOBAL_COIN_LIST_LOADING());

    const coinList = await MockApi.getAllCoins();
    const moreInfoCoinList = await Promise.all(_.map(coinList, async (coin) => {
        const coinPrice = await MockApi.getPrice(coin.symbol);
        const coinBalance = await MockApi.getBalance(coin.symbol);

        coin.balance = coinBalance;
        coin.percent_change_24h = coinPrice.percent_change_24h;
        coin.price_jpy = coinPrice.price_jpy;
        coin.price_usd = coinPrice.price_usd;

        return coin;
    }));

    dispatch(GLOBAL_COIN_LIST_SUCCEEDED(coinList));
};

export const GLOBAL_UPDATE_WALLET = createAction('GLOBAL_UPDATE_WALLET');



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    selectedCoin: {
        balance: "747764.92940022",
        cmcId: "ethereum",
        name: "Ethereum",
        21: "-8.71",
        price_jpy: "1855629.72",
        price_usd: "7479.72",
        symbol: "eth",
        type: "coin",
    },
    coins: {
        data: {},
        loading: false,
        error: null,
    },
};

export const globalReducer = handleActions({
    GLOBAL_SELECT_COIN: (state, action) => {
        return { ...state, selectedCoin: action.payload };
    },

    // Coin list
    GLOBAL_COIN_LIST_LOADING: (state) => {
        return {
            ...state,
            coins: {
                ...state.coins,
                loading: true,
                error: null,
            },
        };
    },
    GLOBAL_COIN_LIST_SUCCEEDED: (state, { payload }) => {
        const coinList = _.reduce(payload, (memo, coin) => {
            memo[coin.symbol] = coin;
            return memo;
        }, {});
        return {
            ...state,
            coins: {
                data: coinList,
                loading: false,
                error: null,
            },
        };
    },

    GLOBAL_UPDATE_WALLET: (state, { payload }) => {
        const { coin, newWallet } = payload;
        const newData = {
            ...state.coins.data,
            [coin]: { ...state.coins.data[coin], ...newWallet },
        };

        return {
            ...state,
            coins: {
                ...state.coins,
                data: { ...newData },
            },
        };
    },
}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */

// Convert object of coins to arrray
export const globalCoinListSelector = createSelector(
    (globalState) => globalState.coins.data,
    (coins) => {
        return _.reduce(coins, (memo, coinData) => {
            memo.push(coinData);
            return memo;
        }, []);
    },
);

// Select only eth coin from state
export const globalEthCoinSelector = createSelector(
    (globalState) => globalState.coins.data,
    (coins) => coins.eth || { symbol: 'eth' },
);



export default globalReducer;
