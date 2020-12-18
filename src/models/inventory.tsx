import { Record } from "immutable";
import { IPlace } from "./place";

export interface IInventory {
    id: string;
    name: string;
    count: number;
    placeId?: IPlace["id"];
}

export const initialInventory: IInventory = {
    id: "",
    name: "",
    count: 0,
    placeId: "",
};

export default class Inventory extends Record(initialInventory) {}
