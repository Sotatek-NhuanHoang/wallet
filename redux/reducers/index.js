// reducers/index.js

import { combineReducers } from 'redux'
import headerReducer from './HeaderReducer'
import mainScreenReducer from './MainScreenReducer'

const rootReducer = combineReducers({
    headerReducer,
    mainScreenReducer
})

export default rootReducer;