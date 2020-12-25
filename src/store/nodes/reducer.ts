import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Node, { getIdsAllDescendants, initialNode } from "src/models/node";
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
            let selectedIds: Node["id"][] = action.ids;

            action.ids.forEach((ancestorId) => {
                state = state
                    .setIn([ancestorId, "isSelected"], true)
                    .setIn([ancestorId, "selectedByAncestorId"], initialNode.selectedByAncestorId);

                const descendantIds = getIdsAllDescendants(state, ancestorId);

                descendantIds.forEach((descendantId) => {
                    state = state
                        .setIn([descendantId, "isSelected"], true)
                        .setIn([descendantId, "selectedByAncestorId"], ancestorId);
                });

                selectedIds = selectedIds.concat(descendantIds);
            });

            // unselected for the rest
            state.forEach((node: Node) => {
                if (!selectedIds.includes(node.id)) {
                    if (node.isSelected !== initialNode.isSelected)
                        state = state.setIn([node.id, "isSelected"], initialNode.isSelected);

                    if (node.selectedByAncestorId !== initialNode.selectedByAncestorId)
                        state = state.setIn([node.id, "selectedByAncestorId"], initialNode.selectedByAncestorId);
                }
            });

            return state;

        default:
            return state;
    }
};

export default reducer;
