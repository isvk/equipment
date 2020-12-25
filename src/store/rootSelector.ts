import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusAsync, getStatusItemsAsync, getStatusNodesAsync } from "src/store/main/selectors";
import Node, { getIdsAllDescendants, initialNode } from "src/models/node";
import Item from "src/models/item";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusAsync = createSelector(mainState, getStatusAsync);
export const mainGetStatusLoadNodesAsync = createSelector(mainState, getStatusNodesAsync);
export const mainGetStatusLoadItemsAsync = createSelector(mainState, getStatusItemsAsync);

export const nodeState = (state: Readonly<IStore>) => state.nodes;
export const nodesGetNodeById = createSelector(nodeState, propsFirstSelector, (nodes, id) => {
    return nodes.find((node) => node.id === id);
});
export const nodesGetNodesByIds = createSelector(nodeState, propsFirstSelector, (nodes, ids) => {
    return nodes.filter((node) => (ids ? ids.includes(node.id) : false));
});
export const nodesGetRootNodes = createSelector(nodeState, (nodes) => {
    const descendants = nodes.reduce((result: Node["id"][], node) => {
        if (node.descendants) return result.concat(node.descendants);

        return result;
    }, []);

    return nodes.filter((node) => !descendants.includes(node.id));
});
export const nodesGetSelectedNodes = createSelector(nodeState, (nodes) => {
    return nodes.filter((node) => node.isSelected);
});
export const nodesGetMainSelectedNode = createSelector(nodesGetSelectedNodes, (nodes) =>
    nodes.find((node) => node.selectedByAncestorId === initialNode.selectedByAncestorId)
);

export const itemState = (state: Readonly<IStore>) => state.items;
export const itemsGetNumberItemsByNodeId = createSelector(
    (state: Readonly<IStore>) => state,
    propsFirstSelector,
    (state, id: Node["id"]) => {
        let nodeIds = getIdsAllDescendants(state.nodes, id);
        nodeIds.push(id);

        return state.items.filter((item) => (item.nodeId ? nodeIds.includes(item.nodeId) : false)).size;
    }
);
export const itemsGetItemsByNodeIds = createSelector(itemState, propsFirstSelector, (items, ids: Node["id"][]) => {
    return items.filter((item) => (item.nodeId ? ids.includes(item.nodeId) : false));
});
export const itemsGetItemsForSelectedNodes = (state: Readonly<IStore>) => {
    const nodeIds = state.nodes.filter((node) => node.isSelected).map((node) => node.id);

    return state.items.filter((item) => (item.nodeId ? nodeIds.includes(item.nodeId) : false));
};
export const itemsGetItemById = createSelector(itemState, propsFirstSelector, (items, id: Item["id"]) => {
    return items.find((item) => item.id === id);
});
