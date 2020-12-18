import { TStoreMain } from "./reducer";

export const getStatusAsync = (state: TStoreMain) => state.statusAsync;
export const getStatusNodesAsync = (state: TStoreMain) => state.statusAsync.loadNodes;
export const getStatusItemsAsync = (state: TStoreMain) => state.statusAsync.loadItems;
