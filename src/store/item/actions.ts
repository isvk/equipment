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

export const createItem = (item: Item) =>
    ({
        type: types.CREATE_ITEM,
        item,
    } as const);

export const createItemSuccess = (item: Item) =>
    ({
        type: types.CREATE_ITEM_SUCCESS,
        item,
    } as const);

export const updateItem = (id: Item["id"], item: Item) =>
    ({
        type: types.UPDATE_ITEM,
        id,
        item,
    } as const);

export const updateItemSuccess = (id: Item["id"], item: Item) =>
    ({
        type: types.UPDATE_ITEM_SUCCESS,
        item,
    } as const);
