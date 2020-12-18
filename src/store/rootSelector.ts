import { IStore } from "src/store/rootReducer";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const placeState = (state: Readonly<IStore>) => state.places;

export const inventoryState = (state: Readonly<IStore>) => state.inventories;
