import React from "react";
import { TStoreNode } from "src/store/nodes/reducer";
import Element from "../Element/Element";

interface IListNodesProps {
    nodes: TStoreNode;
}

export default function ListElements(props: IListNodesProps) {
    return (
        <div>
            {props.nodes.valueSeq().map((node) => (
                <Element node={node} key={node.id} />
            ))}
        </div>
    );
}
