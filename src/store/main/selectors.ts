import { TStoreMain } from "./reducer";

export const getStatusAsync = (state: TStoreMain) => state.statusAsync;
export const getStatusPlacesAsync = (state: TStoreMain) => state.statusAsync.loadPlaces;
export const getStatusInventoriesAsync = (state: TStoreMain) => state.statusAsync.loadInventories;
