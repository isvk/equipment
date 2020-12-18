import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import placeSaga from "src/store/places/saga";
import inventorySaga from "src/store/inventory/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([placeSaga(services), inventorySaga(services)]);
    };
};
