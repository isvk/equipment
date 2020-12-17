import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import placeSaga from "src/store/places/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([placeSaga(services)]);
    };
};
