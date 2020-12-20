import React from "react";
import Node from "src/models/node";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { nodesGetNodesByIds } from "src/store/rootSelector";
import { setSelectById, setSelectedByIdsRestUnselected } from "src/store/nodes/actions";
import ListElements from "../ListElements/ListElements";
import { FaRegMinusSquare as OpenedDescendantsIcon } from "react-icons/fa";
import { FaArrowRight as SelectedIcon } from "react-icons/fa";

import "./Element.scss";

interface IElementProps {
    node: Node;
}

export default function Element(props: IElementProps) {
    const dispatch = useCustomDispatch();
    const descendants = useCustomSelector(nodesGetNodesByIds, props.node.descendants);

    const handleSelected = () => {
        if (props.node.isSelected) {
            dispatch(setSelectById(props.node.id, false));
        } else {
            dispatch(setSelectedByIdsRestUnselected([props.node.id]));
        }
    };

    return (
        <div>
            <div className={"element" + (props.node.isSelected ? " selected" : "")} onClick={handleSelected}>
                <div className="descendantsIcon">{descendants.size > 0 && <OpenedDescendantsIcon />}</div>
                <div className="name">{props.node.name}</div>
                <div className="selectedIcon">
                    <SelectedIcon />
                </div>
            </div>

            {descendants.size > 0 && (
                <div className="listDescendants">
                    <ListElements nodes={descendants} />
                </div>
            )}
        </div>
    );
}
