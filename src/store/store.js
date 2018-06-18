import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as i18n } from 'react-native-redux-i18n';

import globalReducer from './global';
import homeScreenReducer from './homeScreen';


const reducers = combineReducers({
    global: globalReducer,
    homeScreen: homeScreenReducer,
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
