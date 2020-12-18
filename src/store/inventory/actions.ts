import * as types from "./types";
import Inventory from "src/models/inventory";

export const loadInventories = () =>
    ({
        type: types.LOAD_INVENTORIES,
    } as const);

export const loadInventoriesSuccess = (inventories: Inventory[]) =>
    ({
        type: types.LOAD_INVENTORIES_SUCCESS,
        inventories,
    } as const);
