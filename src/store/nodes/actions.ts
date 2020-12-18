import * as types from "./types";
import Node from "src/models/node";

export const loadNodes = () =>
    ({
        type: types.LOAD_NODES,
    } as const);

export const loadNodesSuccess = (nodes: Node[]) =>
    ({
        type: types.LOAD_NODES_SUCCESS,
        nodes,
    } as const);
