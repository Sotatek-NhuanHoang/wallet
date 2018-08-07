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

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

let counter = 1;
store.subscribe(() => {
    console.log(`Store ${counter}: `, store.getState());
    counter++;
});

export default store;
