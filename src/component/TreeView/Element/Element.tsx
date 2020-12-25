import React from "react";
import { Link } from "react-router-dom";
import Node, { initialNode } from "src/models/node";
import useCustomSelector from "src/hooks/useCustomSelector";
import { nodesGetNodesByIds } from "src/store/rootSelector";
import AvailabilityItemsIcon from "./AvailabilityItemsIcon/AvailabilityItemsIcon";
import ListElements from "../ListElements/ListElements";
import { FaRegMinusSquare as OpenedDescendantsIcon } from "react-icons/fa";

import "./Element.scss";

interface IElementProps {
    node: Node;
}

export default function Element(props: IElementProps) {
    const descendants = useCustomSelector(nodesGetNodesByIds, props.node.descendants);

    const nodeUrl =
        !props.node.isSelected || props.node.selectedByAncestorId !== initialNode.selectedByAncestorId
            ? "/catalog/node/" + props.node.id
            : "/catalog/";

    return (
        <div>
            <div className={"element" + (props.node.isSelected ? " selected" : "")}>
                <div className="descendantsIcon">{descendants.size > 0 && <OpenedDescendantsIcon />}</div>
                <Link to={nodeUrl} className="link">
                    <div className="name">{props.node.name}</div>
                    <AvailabilityItemsIcon nodeId={props.node.id} />
                </Link>
            </div>

            {descendants.size > 0 && (
                <div className="listDescendants">
                    <ListElements nodes={descendants} />
                </div>
            )}
        </div>
    );
}
