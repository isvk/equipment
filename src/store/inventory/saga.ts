import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadInventoriesSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadInventoriesAsync(services: typeof bottle) {
    try {
        yield put(setStatusAsync("loadInventories", loadStatus.load));
        const inventories = yield call(services.container.ApiInventory.loadInventories);
        yield put(loadInventoriesSuccess(inventories));
        yield put(setStatusAsync("loadInventories", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadInventories", loadStatus.errorServer));
        console.error("Server error while loading inventories!");
        console.error(e);
    }
}

export default function* inventorySaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_INVENTORIES, loadInventoriesAsync, services);
}
