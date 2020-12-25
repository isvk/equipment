import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Item from "src/models/item";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreItem = Map<Item["id"], Item>;

const reducer = (state: TStoreItem = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_ITEMS_SUCCESS:
            action.items.forEach((item: Item) => {
                state = state.set(item.id, item);
            });
            return state;

        case types.CREATE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return state.set(action.item.id, action.item);

        case types.DELETE_ITEM_SUCCESS:
            return state.remove(action.id);

        default:
            return state;
    }
};

export default reducer;
