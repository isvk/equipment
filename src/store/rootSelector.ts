import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getStatusAsync, getStatusItemsAsync, getStatusNodesAsync } from "src/store/main/selectors";
import Node from "src/models/node";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const mainGetStatusAsync = createSelector(mainState, getStatusAsync);
export const mainGetStatusLoadNodesAsync = createSelector(mainState, getStatusNodesAsync);
export const mainGetStatusLoadItemsAsync = createSelector(mainState, getStatusItemsAsync);

export const nodeState = (state: Readonly<IStore>) => state.nodes;
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

export const itemState = (state: Readonly<IStore>) => state.items;
export const itemsGetNumberItemsByNodeId = createSelector(itemState, propsFirstSelector, (items, id: Node["id"]) => {
    return items.filter((item) => (item.nodeId ? id === item.nodeId : false)).size;
});
export const itemsGetItemsForSelectedNodes = (state: Readonly<IStore>) => {
    const nodeIds = state.nodes.filter((node) => node.isSelected).map((node) => node.id);

    return state.items.filter((item) => (item.nodeId ? nodeIds.includes(item.nodeId) : false));
};
