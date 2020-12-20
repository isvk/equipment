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

        case types.SET_SELECTED_BY_IDS_REST_UNSELECTED:
            state.forEach((node: Node) => {
                let isSelected = action.ids.includes(node.id);

                if (isSelected !== node.isSelected) {
                    state = state.setIn([node.id, "isSelected"], isSelected);
                }
            });
            return state;

        case types.SET_SELECT_BY_ID:
            return (state = state.setIn([action.id, "isSelected"], action.value));

        default:
            return state;
    }
};

export default reducer;
