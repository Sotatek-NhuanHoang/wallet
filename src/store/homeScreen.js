import { handleActions, createAction } from 'redux-actions';


/**
 * =====================================================
 * Home actions
 * =====================================================
 */

export const HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX = createAction('HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX');

export const HOME_SHOW_GAINERS_LIST = createAction('HOME_SHOW_GAINERS_LIST');
export const HOME_SHOW_LOSERS_LIST = createAction('HOME_SHOW_LOSERS_LIST');



/**
 * =====================================================
 * Home reducer
 * =====================================================
 */

const defaultState = {
    banner: {
        imageSources: [
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' }
        ],
        currentSlideIndex: 1,
    },

    showGainersList: true,
};

export const homeScreenReducer = handleActions({
    HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX: (state, action) => {
        const currentSlideIndex = action.payload;
        return { ...state, banner: { ...state.banner, currentSlideIndex }};
    },

    HOME_SHOW_GAINERS_LIST: (state) => {
        return {
            ...state,
            showGainersList: true,
        };
    },

    HOME_SHOW_LOSERS_LIST: (state) => {
        return {
            ...state,
            showGainersList: false,
        };
    },
}, defaultState);

export default homeScreenReducer;
