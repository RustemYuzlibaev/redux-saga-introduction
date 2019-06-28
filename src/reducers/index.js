import { combineReducers } from 'redux';
import * as TYPES from '../types';

const initialState = {
    people: [],
    planet: [],
};

const starWars = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_STAR_WARS_SUCCESS:
            return {
                ...state,
                people: action.data,
            };
        case TYPES.FETCH_STAR_WARS_PLANET_SUCCESS:
            return {
                ...state,
                planet: action.data,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    starWars,
});

export default rootReducer;
