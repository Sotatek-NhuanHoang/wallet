import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';

import MockApi from '@api/mockApi';
import { GLOBAL_UPDATE_WALLET } from './global';
import ERROR_TYPES from '@configs/errorTypes';
import validate, { privateKeyConstraint } from '@utils/validate';


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
export const WINI_NEW_WALLET_REQUESTED = (coin, password) => async (dispatch, getState) => {
    const { global } = getState();
    const { selectedCoin, password } = global;

    dispatch(WINI_NEW_WALLET_LOADING());
    const newWallet = await MockApi.createNewAccount(selectedCoin.symbol, 'password');
    dispatch(WINI_NEW_WALLET_SUCCEEDED(newWallet));
};

export const WINI_NEW_WALLET_APPLY_SUCCEEDED = createAction('WINI_NEW_WALLET_APPLY_SUCCEEDED');
export const WINI_NEW_WALLET_APPLY_REQUESTED = () => async (dispatch, getState) => {
    const { global, walletInitialSetting } = getState();
    const { selectedCoin, password } = global;
    const { newWallet } = walletInitialSetting;

    dispatch(WINI_NEW_WALLET_APPLY_SUCCEEDED());
    dispatch(GLOBAL_UPDATE_WALLET({ coin: selectedCoin.symbol, newWallet: newWallet.data }));
};

// Import new wallet
export const WINI_IMPORT_WALLET_LOADING = createAction('WINI_IMPORT_WALLET_LOADING');
export const WINI_IMPORT_WALLET_SUCCEEDED = createAction('WINI_IMPORT_WALLET_SUCCEEDED');
export const WINI_IMPORT_WALLET_FAILED = createAction('WINI_IMPORT_WALLET_FAILED');
export const WINI_IMPORT_WALLET_REQUESTED = (coin, privateKey) => async (dispatch) => {
    dispatch(WINI_IMPORT_WALLET_LOADING());

    const validationResult = validate({ privateKey }, { privateKey: privateKeyConstraint });
    if (validationResult) {
        const error = validationResult[0].error;
        dispatch(WINI_IMPORT_WALLET_FAILED(error));
        return;
    }

    const newWallet = await MockApi.importPrivateKeyToAccount(coin, privateKey);

    dispatch(WINI_IMPORT_WALLET_SUCCEEDED(newWallet));
    dispatch(GLOBAL_UPDATE_WALLET({ coin, newWallet }));
};
export const WINI_CHANGE_USER_PRIVATE_KEY = createAction('WINI_CHANGE_USER_PRIVATE_KEY');



/**
 * =====================================================
 * Wallet initial setting reducer
 * =====================================================
 */

const defaultState = {
    userPrivateKey: '',
    isPrivateKeyCoppied: false,
    newWallet: {
        isApplied: false,
        loading: false,
        error: null,
        data: {},
    },
};

export const walletInitialSettingReducer = handleActions({
    WINI_INIT_STATE: (state, action) => {
        return {
            ...state,
            userPrivateKey: '',
            isPrivateKeyCoppied: false,
            newWallet: {
                isApplied: false,
                loading: false,
                error: null,
                data: {},
            },
        };
    },

    WINI_COPY_PRIVATE_KEY: (state) => {
        return { ...state, isPrivateKeyCoppied: true, };
    },

    // Create new wallet
    WINI_NEW_WALLET_LOADING: (state) => {
        return {
            ...state,
            newWallet: {
                isApplied: false,
                loading: true,
                error: null,
                data: {},
            },
        };
    },
    WINI_NEW_WALLET_SUCCEEDED: (state, { payload }) => {
        return {
            ...state,
            newWallet: {
                isApplied: false,
                loading: false,
                error: null,
                data: { ...payload },
            },
        };
    },
    WINI_NEW_WALLET_APPLY_SUCCEEDED: (state) => {
        return {
            ...state,
            newWallet: {
                ...state.newWallet,
                isApplied: true,
                loading: false,
                error: null,
            },
        };
    },

    // Import new wallet
    WINI_IMPORT_WALLET_LOADING: (state) => {
        return {
            ...state,
            newWallet: {
                isApplied: false,
                loading: true,
                error: null,
                data: {},
            },
        };
    },
    WINI_IMPORT_WALLET_SUCCEEDED: (state, { payload }) => {
        return {
            ...state,
            newWallet: {
                isApplied: false,
                loading: false,
                error: null,
                data: { ...payload }
            },
        };
    },
    WINI_IMPORT_WALLET_FAILED: (state, { payload }) => {
        return {
            ...state,
            newWallet: {
                isApplied: false,
                loading: false,
                error: payload,
            },
        };
    },

    WINI_CHANGE_USER_PRIVATE_KEY: (state, { payload }) => {
        return {
            ...state,
            userPrivateKey: payload,
            newWallet: {
                isApplied: false,
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
