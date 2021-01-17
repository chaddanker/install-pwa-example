import { combineReducers } from 'redux';
import userReducer from './userReducer';
import estateReducer from './estateReducer';
import activeEstateReducer from './activeEstateReducer';

export default combineReducers({
	users: userReducer,
	estates: estateReducer,
	activeEstate: activeEstateReducer
});