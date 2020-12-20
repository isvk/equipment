import { Record } from "immutable";

export interface INode {
    id: string;
    name: string;
    descendants?: INode["id"][];
    isSelected?: boolean;
}

export const initialNode: INode = {
    id: "",
    name: "",
    descendants: undefined,
    isSelected: false,
};

export default class Node extends Record(initialNode) {}
