import * as types from "./types";
import Item from "src/models/item";

export const loadItems = () =>
    ({
        type: types.LOAD_ITEMS,
    } as const);

export const loadItemsSuccess = (items: Item[]) =>
    ({
        type: types.LOAD_ITEMS_SUCCESS,
        items,
    } as const);
