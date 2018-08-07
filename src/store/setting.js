import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';
import { fromJS } from 'immutable';

import MockApi from '@api/mockApi';
import { GLOBAL_UPDATE_WALLET } from './global';
import ERROR_TYPES from 'configs/errorTypes';
import validate, { privateKeyConstraint } from 'utils/validate';


/**
 * =====================================================
 * Setting actions
 * =====================================================
 */

export const SETTING_UPDATE_NEW_PASSWORD = createAction('SETTING_UPDATE_NEW_PASSWORD');
export const SETTING_UPDATE_CONFIRM_PASSWORD = createAction('SETTING_UPDATE_CONFIRM_PASSWORD');




/**
 * =====================================================
 * Setting reducer
 * =====================================================
 */

const defaultState = {
    newPassword: '',
    confirmPassword: '',
    passwordError: null,
};

export const settingReducer = handleActions({
    SETTING_UPDATE_NEW_PASSWORD: (state, { payload }) => {
        const newPassword = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ newPassword: newPassword, })
            .toJS();
    },

    SETTING_UPDATE_CONFIRM_PASSWORD: (state, { payload }) => {
        const confirmPassword = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ confirmPassword: confirmPassword, })
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Setting selectors
 * =====================================================
 */


export default settingReducer;
