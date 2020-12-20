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

export const setSelectedByIdsRestUnselected = (ids: Node["id"][]) =>
    ({
        type: types.SET_SELECTED_BY_IDS_REST_UNSELECTED,
        ids,
    } as const);

export const setSelectById = (id: Node["id"], value: Node["isSelected"]) =>
    ({
        type: types.SET_SELECT_BY_ID,
        id,
        value,
    } as const);
