import authReducer from './authReducer';
import attributeReducer from './attributeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer, 
    attr: attributeReducer
});

export default rootReducer;