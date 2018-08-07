import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';

import ERROR_TYPES from 'configs/errorTypes';
import validate, { privateKeyConstraint, passwordConstraint } from 'utils/validate';
import { GLOBAL_UPDATE_PASSWORD } from 'store/global';



/**
 * =====================================================
 * Setting actions
 * =====================================================
 */

// Password actions
export const SETTING_RESET_PASSWORD = createAction('SETTING_RESET_PASSWORD');
export const SETTING_UPDATE_NEW_PASSWORD = createAction('SETTING_UPDATE_NEW_PASSWORD');
export const SETTING_UPDATE_CONFIRM_PASSWORD = createAction('SETTING_UPDATE_CONFIRM_PASSWORD');

export const SETTING_SET_PASSWORD_SUCCEEDED = createAction('SETTING_SET_PASSWORD_SUCCEEDED');
export const SETTING_SET_PASSWORD_FAILED = createAction('SETTING_SET_PASSWORD_FAILED');
export const SETTING_SET_PASSWORD_REQUESTED = () => (dispatch, getState) => {
    const { setting } = getState();
    const { newPassword, confirmPassword } = setting;

    const validationResult = validate({ password: newPassword }, { password: passwordConstraint });
    if (validationResult) {
        const error = validationResult[0].error;
        return dispatch(SETTING_SET_PASSWORD_FAILED(error));
    }

    // Not match
    if (newPassword !== confirmPassword) {
        const error = ERROR_TYPES.PASSWORD_NOT_MATCH;
        return dispatch(SETTING_SET_PASSWORD_FAILED(error));
    }

    dispatch(GLOBAL_UPDATE_PASSWORD(newPassword));
    dispatch(SETTING_SET_PASSWORD_SUCCEEDED());
};




/**
 * =====================================================
 * Setting reducer
 * =====================================================
 */

const defaultState = {
    newPassword: '',
    confirmPassword: '',
    setPasswordError: null,
    setPasswordSuccessfully: false,
};

export const settingReducer = handleActions({
    // Password reducer
    SETTING_RESET_PASSWORD: (state, { payload }) => {
        const newPassword = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                newPassword: '',
                confirmPassword: '',
                setPasswordError: null,
                setPasswordSuccessfully: false,
            })
            .toJS();
    },
    SETTING_UPDATE_NEW_PASSWORD: (state, { payload }) => {
        const newPassword = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                newPassword: newPassword,
                setPasswordError: null,
                setPasswordSuccessfully: false,
            })
            .toJS();
    },
    SETTING_UPDATE_CONFIRM_PASSWORD: (state, { payload }) => {
        const confirmPassword = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                confirmPassword: confirmPassword,
                setPasswordError: null,
                setPasswordSuccessfully: false,
            })
            .toJS();
    },
    SETTING_SET_PASSWORD_FAILED: (state, { payload }) => {
        const error = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                setPasswordError: error,
            })
            .toJS();
    },
    SETTING_SET_PASSWORD_SUCCEEDED: (state, { payload }) => {
        const newState = fromJS(state);
        return newState
            .mergeDeep({
                setPasswordSuccessfully: true,
            })
            .toJS();
    },



}, defaultState);



/**
 * =====================================================
 * Setting selectors
 * =====================================================
 */


export default settingReducer;
