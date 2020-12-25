import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { push } from "connected-react-router";
import * as types from "./types";
import { createItem, createItemSuccess, loadItemsSuccess, updateItem, updateItemSuccess } from "./actions";
import { setStatusAsync } from "src/store/main/actions";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "src/store/saveStatus";

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

function* createItemAsync(services: typeof bottle, action: ReturnType<typeof createItem>) {
    try {
        yield put(setStatusAsync("saveItem", saveStatus.save));
        const itemId = yield call(services.container.ApiItem.createItem, action.item);
        const item = yield call(services.container.ApiItem.loadItem, itemId);
        yield put(createItemSuccess(item));
        yield put(setStatusAsync("saveItem", saveStatus.saved));
        yield put(push("/catalog/item/" + item.id));
    } catch (e) {
        yield put(setStatusAsync("saveItem", saveStatus.errorServer));
        console.error("Server error while creating items!");
        console.error(e);
    }
}

function* updateItemAsync(services: typeof bottle, action: ReturnType<typeof updateItem>) {
    try {
        yield put(setStatusAsync("saveItem", saveStatus.save));
        yield call(services.container.ApiItem.updateItem, action.id, action.item);
        const item = yield call(services.container.ApiItem.loadItem, action.id);
        yield put(updateItemSuccess(action.id, item));
        yield put(setStatusAsync("saveItem", saveStatus.saved));
    } catch (e) {
        yield put(setStatusAsync("saveItem", saveStatus.errorServer));
        console.error("Server error while updating item!");
        console.error(e);
    }
}

export default function* itemSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_ITEMS, loadItemsAsync, services);
    yield takeEvery(types.CREATE_ITEM, createItemAsync, services);
    yield takeEvery(types.UPDATE_ITEM, updateItemAsync, services);
}
