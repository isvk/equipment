import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Node from "src/models/node";
import * as types from "./types";
import * as actions from "./actions";

export type TStoreNode = Map<Node["id"], Node>;

const reducer = (state: TStoreNode = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_NODES_SUCCESS:
            action.nodes.forEach((node: Node) => {
                state = state.set(node.id, node);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
