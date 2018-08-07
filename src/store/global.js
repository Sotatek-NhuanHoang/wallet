import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';


/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_UPDATE_SELECTED_COIN = createAction('GLOBAL_UPDATE_SELECTED_COIN');

export const GLOBAL_UPDATE_PASSWORD = createAction('GLOBAL_UPDATE_PASSWORD');



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    selectedCoin: '',
    password: '',
};

export const globalReducer = handleActions({
    GLOBAL_UPDATE_SELECTED_COIN: (state, { payload }) => {
        const selectedCoin = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ selectedCoin: selectedCoin, })
            .toJS();
    },

    GLOBAL_UPDATE_PASSWORD: (state, { payload }) => {
        const password = payload;
        const newState = fromJS(state);
        return newState
            .mergeDeep({ password: password, })
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */


export default globalReducer;
