import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadInventoriesSuccess } from "./actions";

function* loadInventoriesAsync(services: typeof bottle) {
    try {
        const inventories = yield call(services.container.ApiInventory.loadInventories);
        yield put(loadInventoriesSuccess(inventories));
    } catch (e) {
        console.error("Server error while loading inventories!");
        console.error(e);
    }
}

export default function* inventorySaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_INVENTORIES, loadInventoriesAsync, services);
}
