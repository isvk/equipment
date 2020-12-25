import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { nodesGetRootNodes } from "src/store/rootSelector";
import ListElements from "./ListElements/ListElements";

import "./TreeView.scss";

export default function TreeView() {
    const rootNodes = useCustomSelector(nodesGetRootNodes);

    if (rootNodes && rootNodes.size > 0) {
        return (
            <div className="treeView">
                <ListElements nodes={rootNodes} />
            </div>
        );
    }

    return <></>;
}
