import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';


/**
 * =====================================================
 * Wallet initial setting actions
 * =====================================================
 */

export const WINI_INIT_STATE = createAction('WINI_INIT_STATE');
export const WINI_COPY_PRIVATE_KEY = createAction('WINI_COPY_PRIVATE_KEY');


/**
 * =====================================================
 * Wallet initial setting thunk actions
 * =====================================================
 */



/**
 * =====================================================
 * Wallet initial setting reducer
 * =====================================================
 */

const defaultState = {
    privateKey: '',
    isPrivateKeyCoppied: false,
};

export const walletInitialSettingReducer = handleActions({
    WINI_INIT_STATE: (state, action) => {
        return {
            ...state,
            privateKey: action.payload,
            isPrivateKeyCoppied: false,
        };
    },
    WINI_COPY_PRIVATE_KEY: (state) => {
        return { ...state, isPrivateKeyCoppied: true, };
    },
}, defaultState);



/**
 * =====================================================
 * Wallet initial setting selectors
 * =====================================================
 */


export default walletInitialSettingReducer;
