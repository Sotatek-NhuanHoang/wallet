import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';
import MockApi from '@api/mockApi';
import AddressStorage from '@utils/addressStorage';


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
export const GLOBAL_COIN_LIST_REQUESTED = () => async (dispatch, getState) => {
    const { global } = getState();
    const { coins } = global;

    if (coins.loading || coins.isLoaded) {
        return;
    }

    dispatch(GLOBAL_COIN_LIST_LOADING());

    const coinList = await MockApi.getAllCoins();
    const moreInfoCoinList = await Promise.all(_.map(coinList, async (coin) => {
        const coinPrice = await MockApi.getPrice(coin.symbol);
        const coinBalance = await MockApi.getBalance(coin.symbol);
        const wallet = await AddressStorage.getWallet(coin.symbol);

        coin.balance = coinBalance;
        coin.percent_change_24h = coinPrice.percent_change_24h;
        coin.price_jpy = coinPrice.price_jpy;
        coin.price_usd = coinPrice.price_usd;

        _.merge(coin, wallet);

        return coin;
    }));

    dispatch(GLOBAL_COIN_LIST_SUCCEEDED(coinList));
};

export const GLOBAL_UPDATE_WALLET = createAction('GLOBAL_UPDATE_WALLET');


// Password actions
export const GLOBAL_RESET_PASSWORD = createAction('GLOBAL_RESET_PASSWORD');
export const GLOBAL_CHANGE_PASSWORD = createAction('GLOBAL_CHANGE_PASSWORD');
export const GLOBAL_CHANGE_CONFIRM_PASSWORD = createAction('GLOBAL_CHANGE_CONFIRM_PASSWORD');



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    selectedCoin: {
        balance: '747764.92940022',
        cmcId: 'ethereum',
        name: 'Ethereum',
        percent_change_24h: '-8.71',
        price_jpy: '1855629.72',
        price_usd: '7479.72',
        symbol: 'eth',
        type: 'coin',
        address: 'asfjoaisndfi3jik4j2l42'
    },
    coins: {
        data: {},
        loading: false,
        error: null,
        isLoaded: false,
    },
    password: '',
    confirmPassword: '',
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
                isLoaded: true,
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


    // Password actions
    GLOBAL_RESET_PASSWORD: (state, { payload }) => {
        return {
            ...state,
            password: '',
            confirmPassword: '',
        };
    },
    GLOBAL_CHANGE_PASSWORD: (state, { payload }) => {
        return {
            ...state,
            password: payload,
        };
    },
    GLOBAL_CHANGE_CONFIRM_PASSWORD: (state, { payload }) => {
        return {
            ...state,
            confirmPassword: payload,
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
