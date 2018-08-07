import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as i18n } from 'react-native-redux-i18n';

import globalReducer from './global';
import walletReducer from './wallet';
import settingReducer from './setting';


const reducers = combineReducers({
    global: globalReducer,
    wallet: walletReducer,
    setting: settingReducer,
    i18n,
});

const middleWares = [thunk];

if (__DEV__) {
    const { logger } = require(`redux-logger`);
    middleWares.push(logger);
}

const store = createStore(
    reducers,
    applyMiddleware(...middleWares)
);


export default store;
