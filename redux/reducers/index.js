// reducers/index.js

import { combineReducers } from 'redux'
import navigationReducer from './NavigationReducer'
import globalReducer from './GlobalReducer'

const rootReducer = combineReducers({
    navigation: navigationReducer,
    global: globalReducer
})

export default rootReducer;