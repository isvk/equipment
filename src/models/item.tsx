import { Record } from "immutable";
import { INode } from "./node";

export interface IItem {
    id: string;
    name: string;
    count: number;
    nodeId?: INode["id"];
}

export const initialItem: IItem = {
    id: "",
    name: "",
    count: 0,
    nodeId: "",
};

export default class Item extends Record(initialItem) {}
