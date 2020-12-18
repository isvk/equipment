import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadItemsSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadItemsAsync(services: typeof bottle) {
    try {
        yield put(setStatusAsync("loadItems", loadStatus.load));
        const items = yield call(services.container.ApiItem.loadItems);
        yield put(loadItemsSuccess(items));
        yield put(setStatusAsync("loadItems", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadItems", loadStatus.errorServer));
        console.error("Server error while loading items!");
        console.error(e);
    }
}

export default function* itemSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_ITEMS, loadItemsAsync, services);
}
