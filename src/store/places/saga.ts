import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadPlacesSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadPlacesAsync(services: typeof bottle) {
    try {
        yield put(setStatusAsync("loadPlaces", loadStatus.load));
        const places = yield call(services.container.ApiPlace.loadPlaces);
        yield put(loadPlacesSuccess(places));
        yield put(setStatusAsync("loadPlaces", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadPlaces", loadStatus.errorServer));
        console.error("Server error while loading places!");
        console.error(e);
    }
}

export default function* placeSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_PLACES, loadPlacesAsync, services);
}
