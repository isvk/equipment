import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import places, { TStorePlace } from "src/store/places/reducer";

export interface IStore {
    router: typeof connectRouter;
    places: TStorePlace;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        places,
    });

export default createRootReducer;
