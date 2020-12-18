import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusAsync, getStatusInventoriesAsync, getStatusPlacesAsync } from "src/store/main/selectors";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusAsync = createSelector(mainState, getStatusAsync);
export const mainGetStatusLoadPlacesAsync = createSelector(mainState, getStatusPlacesAsync);
export const mainGetStatusLoadInventoriesAsync = createSelector(mainState, getStatusInventoriesAsync);

export const placeState = (state: Readonly<IStore>) => state.places;

export const inventoryState = (state: Readonly<IStore>) => state.inventories;
