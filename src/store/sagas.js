import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as TYPES from '../types';
import { fetchPerson, fetchPlanets, takeOneAtMost } from '../actions';

function* mySaga() {
    yield all([
        takeEvery(TYPES.FETCH_STAR_WARS_PLANET_REQUEST, fetchPlanets),
        takeEvery(TYPES.FETCH_STAR_WARS_REQUEST, fetchPerson),
        takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, takeOneAtMost),
    ]);
}

export default mySaga;
