import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import globalReducer from './global';
import homeScreenReducer from './homeScreen';


const reducers = combineReducers({
    global: globalReducer,
    homeScreen: homeScreenReducer,
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
