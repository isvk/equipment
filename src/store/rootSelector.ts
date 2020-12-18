import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusAsync, getStatusItemsAsync, getStatusNodesAsync } from "src/store/main/selectors";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusAsync = createSelector(mainState, getStatusAsync);
export const mainGetStatusLoadNodesAsync = createSelector(mainState, getStatusNodesAsync);
export const mainGetStatusLoadItemsAsync = createSelector(mainState, getStatusItemsAsync);

export const nodeState = (state: Readonly<IStore>) => state.nodes;

export const itemState = (state: Readonly<IStore>) => state.items;
