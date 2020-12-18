import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Inventory from "src/models/inventory";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreInventory = Map<Inventory["id"], Inventory>;

const reducer = (state: TStoreInventory = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_INVENTORIES_SUCCESS:
            action.inventories.forEach((inventory: Inventory) => {
                state = state.set(inventory.id, inventory);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
