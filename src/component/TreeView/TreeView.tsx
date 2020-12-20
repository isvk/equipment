import React from "react";
import { TStoreNode } from "src/store/nodes/reducer";
import ListElements from "./ListElements/ListElements";

import "./TreeView.scss";

interface ITreeViewProps {
    nodes: TStoreNode;
}

export default function TreeView(props: ITreeViewProps) {
    return (
        <div className="treeView">
            <ListElements nodes={props.nodes} />
        </div>
    );
}
