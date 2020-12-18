import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import main, { TStoreMain } from "src/store/main/reducer";
import places, { TStorePlace } from "src/store/places/reducer";
import inventories, { TStoreInventory } from "src/store/inventory/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    places: TStorePlace;
    inventories: TStoreInventory;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        places,
        inventories,
    });

export default createRootReducer;
