import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';

import MockApi from '@api/mockApi';
import { GLOBAL_UPDATE_WALLET } from './global';
import ERROR_TYPES from '@configs/errorTypes';
import validate, { privateKeyConstraint } from '@utils/validate';


/**
 * =====================================================
 * Setting actions
 * =====================================================
 */

// Private screen
export const SETTING_PRIVATE_SCREEN_RESET_STATE = createAction('SETTING_PRIVATE_SCREEN_RESET_STATE');
export const SETTING_PRIVATE_SCREEN_CHANGE_PASSWORD = createAction('SETTING_PRIVATE_SCREEN_CHANGE_PASSWORD');
export const SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_SUCCEEDED = createAction('SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_SUCCEEDED');
export const SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_FAILED = createAction('SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_FAILED');
export const SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_REQUESTED = () => (dispatch, getState) => {
    const { global, setting } = getState();
    const { password } = global;
    const { confirmPassword } = setting.privateScreen;

    if (password !== confirmPassword) {
        dispatch(SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_FAILED());
    } else {
        dispatch(SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_SUCCEEDED());
    }
};



/**
 * =====================================================
 * Setting reducer
 * =====================================================
 */

const defaultState = {
    privateScreen: {
        confirmPassword: '',
        isPasswordConfirmed: false,
        error: null,
    },
};

export const settingReducer = handleActions({
    SETTING_PRIVATE_SCREEN_RESET_STATE: (state) => {
        return {
            ...state,
            privateScreen: {
                confirmPassword: '',
                isPasswordConfirmed: false,
                error: null,
            },
        };
    },
    SETTING_PRIVATE_SCREEN_CHANGE_PASSWORD: (state, { payload }) => {
        return {
            ...state,
            privateScreen: {
                confirmPassword: payload,
                isPasswordConfirmed: false,
                error: null,
            },
        };
    },
    SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_SUCCEEDED: (state, { payload }) => {
        return {
            ...state,
            privateScreen: {
                ...state.privateScreen,
                isPasswordConfirmed: true,
                error: null,
            },
        };
    },
    SETTING_PRIVATE_SCREEN_VERIFY_PASSWORD_FAILED: (state, { payload }) => {
        return {
            ...state,
            privateScreen: {
                ...state.privateScreen,
                isPasswordConfirmed: false,
                error: ERROR_TYPES.INVALID_PASSWORD,
            },
        };
    },
}, defaultState);



/**
 * =====================================================
 * Setting selectors
 * =====================================================
 */


export default settingReducer;
