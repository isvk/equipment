import { Record } from "immutable";
import { TStoreNode } from "src/store/nodes/reducer";

export interface INode {
    id: string;
    name: string;
    descendants?: this["id"][];
    isSelected?: boolean;
    selectedByAncestorId?: this["id"];
}

export const initialNode: INode = {
    id: "",
    name: "",
    descendants: undefined,
    isSelected: false,
    selectedByAncestorId: "",
};

export const getIdsAllDescendants = (state: TStoreNode, ancestorId: Node["id"]) => {
    let result: Node["id"][] = [];

    const cascade = (ancestorId: Node["id"]) => {
        const ancestor = state.get(ancestorId);

        if (ancestor && ancestor.descendants) {
            result.push(...ancestor.descendants);
            ancestor.descendants.forEach((descendantId) => cascade(descendantId));
        }
    };

    cascade(ancestorId);

    return result;
};

export default class Node extends Record(initialNode) {}
