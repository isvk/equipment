import React from "react";
import Node from "src/models/node";
import useCustomSelector from "src/hooks/useCustomSelector";
import { itemsGetNumberItemsByNodeId } from "src/store/rootSelector";

import "./AvailabilityItemsIcon.scss";

interface IIconNumberItemsProps {
    nodeId: Node["id"];
}

export default function AvailabilityItemsIcon(props: IIconNumberItemsProps) {
    const numberItems = useCustomSelector(itemsGetNumberItemsByNodeId, props.nodeId);

    if (numberItems > 0) {
        return <div className="availabilityItemsIcon">{numberItems}</div>;
    }

    return <></>;
}
