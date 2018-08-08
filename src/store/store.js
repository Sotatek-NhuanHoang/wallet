import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as i18n } from 'react-native-redux-i18n';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import globalReducer from './global';
import walletReducer from './wallet';
import newWalletReducer from './newWallet';
import importWalletReducer from './importWallet';
import settingReducer from './setting';


const reducers = combineReducers({
    global: persistReducer({
        key: 'global',
        storage: storage,
    }, globalReducer),
    wallet: walletReducer,
    newWallet: newWalletReducer,
    importWallet: importWalletReducer,
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


export const persistor = persistStore(store);

export default store;
