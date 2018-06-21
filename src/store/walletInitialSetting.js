import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';

import MockApi from '@api/mockApi';
import { GLOBAL_UPDATE_WALLET } from './global';


/**
 * =====================================================
 * Wallet initial setting actions
 * =====================================================
 */

export const WINI_INIT_STATE = createAction('WINI_INIT_STATE');
export const WINI_COPY_PRIVATE_KEY = createAction('WINI_COPY_PRIVATE_KEY');

// Create new wallet
export const WINI_NEW_WALLET_LOADING = createAction('WINI_NEW_WALLET_LOADING');
export const WINI_NEW_WALLET_SUCCEEDED = createAction('WINI_NEW_WALLET_SUCCEEDED');
export const WINI_NEW_WALLET_FAILED = createAction('WINI_NEW_WALLET_FAILED');
export const WINI_NEW_WALLET_REQUESTED = (coin, privateKey) => async (dispatch) => {
    dispatch(WINI_NEW_WALLET_LOADING());

    const newWallet = await MockApi.createNewAccount(coin, privateKey);

    dispatch(WINI_NEW_WALLET_SUCCEEDED());
    dispatch(GLOBAL_UPDATE_WALLET({ coin, newWallet }));
};


/**
 * =====================================================
 * Wallet initial setting reducer
 * =====================================================
 */

const defaultState = {
    privateKey: '5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF',
    isPrivateKeyCoppied: false,
    newWallet: {
        created: false,
        loading: false,
        error: null,
    },
};

export const walletInitialSettingReducer = handleActions({
    WINI_INIT_STATE: (state, action) => {
        return {
            ...state,
            privateKey: action.payload,
            isPrivateKeyCoppied: false,
            newWallet: {
                created: false,
                loading: false,
                error: null,
            },
        };
    },

    WINI_COPY_PRIVATE_KEY: (state) => {
        return { ...state, isPrivateKeyCoppied: true, };
    },

    WINI_NEW_WALLET_LOADING: (state) => {
        return {
            ...state,
            newWallet: {
                created: false,
                loading: true,
                error: null,
            },
        };
    },

    WINI_NEW_WALLET_SUCCEEDED: (state) => {
        return {
            ...state,
            newWallet: {
                created: true,
                loading: false,
                error: null,
            },
        };
    },
}, defaultState);



/**
 * =====================================================
 * Wallet initial setting selectors
 * =====================================================
 */


export default walletInitialSettingReducer;
