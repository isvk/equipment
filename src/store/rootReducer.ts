import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import main, { TStoreMain } from "src/store/main/reducer";
import nodes, { TStoreNode } from "src/store/nodes/reducer";
import items, { TStoreItem } from "src/store/item/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    nodes: TStoreNode;
    items: TStoreItem;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        nodes,
        items,
    });

export default createRootReducer;
