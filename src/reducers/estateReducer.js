// import _ from 'lodash';
import { FETCH_ESTATES } from '../actions/types';

export default (state = [], action) => {
	switch(action.type){
		case FETCH_ESTATES: return [...state, ...action.payload];
		// case FETCH_ESTATE: return { ...state, [action.payload.id]: action.payload };
		// case CREATE_ESTATE: return { ...state, [action.payload.id]: action.payload };
		// case EDIT_ESTATE: return { ...state, [action.payload.id]: action.payload };
		// case DELETE_ESTATE: return _.omit(state, action.payload);
		default: return state;
	}
};