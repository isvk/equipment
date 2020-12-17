import { IStore } from "src/store/rootReducer";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const userState = (state: Readonly<IStore>) => state.places;
