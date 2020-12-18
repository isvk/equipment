import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import nodeSaga from "src/store/nodes/saga";
import itemSaga from "src/store/item/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([nodeSaga(services), itemSaga(services)]);
    };
};
