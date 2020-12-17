import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadPlacesSuccess } from "./actions";

function* loadPlacesAsync(services: typeof bottle) {
    try {
        const places = yield call(services.container.ApiPlace.loadPlaces);
        yield put(loadPlacesSuccess(places));
    } catch (e) {
        console.error("Server error while loading places!");
        console.error(e);
    }
}

export default function* userSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PLACES, loadPlacesAsync, services);
}
