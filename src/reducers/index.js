import loginReducer from './loginreducer';
import AddState from './notesreducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginReducer,
    AddState
})

export default rootReducer;