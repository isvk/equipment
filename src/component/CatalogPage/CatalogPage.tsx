import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusAsync, nodesGetRootNodes } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import TreeView from "src/component/TreeView/TreeView";

export default function CatalogPage() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const rootNodes = useCustomSelector(nodesGetRootNodes);

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    return <TreeView nodes={rootNodes} />;
}
