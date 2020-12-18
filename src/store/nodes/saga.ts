import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loadNodesSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";

function* loadNodesAsync(services: typeof bottle) {
    try {
        yield put(setStatusAsync("loadNodes", loadStatus.load));
        const nodes = yield call(services.container.ApiNode.loadNodes);
        yield put(loadNodesSuccess(nodes));
        yield put(setStatusAsync("loadNodes", loadStatus.loaded));
    } catch (e) {
        yield put(setStatusAsync("loadNodes", loadStatus.errorServer));
        console.error("Server error while loading nodes!");
        console.error(e);
    }
}

export default function* nodeSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_NODES, loadNodesAsync, services);
}
