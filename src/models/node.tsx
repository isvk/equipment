import { Record } from "immutable";

export interface INode {
    id: string;
    name: string;
    descendants?: INode["id"][];
}

export const initialNode: INode = {
    id: "",
    name: "",
    descendants: undefined,
};

export default class Node extends Record(initialNode) {}
