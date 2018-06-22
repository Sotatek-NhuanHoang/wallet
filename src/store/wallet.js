import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import _ from 'lodash';


/**
 * =====================================================
 * Wallet actions
 * =====================================================
 */


/**
 * =====================================================
 * Wallet thunk actions
 * =====================================================
 */



/**
 * =====================================================
 * Wallet reducer
 * =====================================================
 */

const defaultState = {
    transactions: {
        btc: [
            {
                title: '2018/05/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-1.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+9.765',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            },
            {
                title: '2018/06/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+8.0091',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            },
            {
                title: '2018/07/01',
                data: [
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '1',
                        mount: '+8.0091',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                    {
                        id: Date.now() + Math.random().toString(),
                        statusId: '0',
                        mount: '-100.097',
                        address: 'tytfythygy545rcyt455454g4g545y4trht'
                    },
                ]
            }
        ]
    }
};

export const walletReducer = handleActions({

}, defaultState);



/**
 * =====================================================
 * Wallet selectors
 * =====================================================
 */


export default walletReducer;
