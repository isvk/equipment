import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import {
    mainGetStatusAsync,
    nodesGetRootNodes,
    nodesGetSelectedNodes,
    itemsGetItemsForSelectedNodes,
} from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import TreeView from "src/component/TreeView/TreeView";
import ListItems from "src/component/ListItems/ListItems";

import "./CatalogPage.scss";

export default function CatalogPage() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const rootNodes = useCustomSelector(nodesGetRootNodes);
    const selectedNodes = useCustomSelector(nodesGetSelectedNodes);
    const itemsForSelectedNodes = useCustomSelector(itemsGetItemsForSelectedNodes);

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    return (
        <div className="catalog">
            <div className="navigation-panel">
                <TreeView nodes={rootNodes} />
            </div>
            <div className="content-panel">
                <ListItems nodes={selectedNodes} items={itemsForSelectedNodes} />
            </div>
        </div>
    );
}
