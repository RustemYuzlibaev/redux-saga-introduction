import {
    call,
    put,
    take,
    actionChannel,
    fork,
    cancel,
} from 'redux-saga/effects';
import * as TYPES from '../types';

export const api = url => fetch(url).then(res => res.json());

export const queueChannelRequests = () => ({
    type: TYPES.QUEUE_CHANNEL_REQUESTS,
});

export const confirmFetchRequest = () => ({
    type: TYPES.CONFIRMATION,
});

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST,
});

export const fetchStarWarsPlanetRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_PLANET_REQUEST,
});

export function* fetchPerson(action) {
    try {
        yield take(TYPES.CONFIRMATION);

        const person = yield call(api, 'https://swapi.co/api/people/');

        yield put({
            type: TYPES.FETCH_STAR_WARS_SUCCESS,
            data: person.results,
        });
    } catch (e) {
        console.log(e);
    }
}

export function* fetchPlanets(action) {
    try {
        console.log('action', action);

        const planet = yield call(api, 'https://swapi.co/api/planets/');

        yield put({
            type: TYPES.FETCH_STAR_WARS_PLANET_SUCCESS,
            data: planet.results,
        });
    } catch (e) {
        console.log(e);
    }
}

export function* takeOneAtMost(action) {
    const chan = yield actionChannel(TYPES.QUEUE_CHANNEL_REQUESTS);

    for (let i = 1; i >= 1; i++) {
        yield take(chan);
        yield call(api, 'https://swapi.co/api/people/');
        yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: i });
    }
}

export function* forkedFetchPerson() {
    const syncPersons = yield fork(fetchPerson);
    yield take('STOP_BACKGROUND_FETCH');
    yield cancel(syncPersons);
}
