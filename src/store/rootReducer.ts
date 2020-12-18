import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import places, { TStorePlace } from "src/store/places/reducer";
import inventories, { TStoreInventory } from "src/store/inventory/reducer";

export interface IStore {
    router: typeof connectRouter;
    places: TStorePlace;
    inventories: TStoreInventory;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        places,
        inventories,
    });

export default createRootReducer;
