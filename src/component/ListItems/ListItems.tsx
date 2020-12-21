import React from "react";
import { TStoreNode } from "src/store/nodes/reducer";
import { TStoreItem } from "src/store/item/reducer";

import "./ListItems.scss";

interface IListItemsProps {
    nodes: TStoreNode;
    items: TStoreItem;
}

export default function ListItems(props: IListItemsProps) {
    return (
        <div className="listItems">
            {props.items.size > 0 && (
                <table className="items">
                    <thead>
                        <tr>
                            <td className="name">Название оборудования</td>
                            <td className="count">Количество</td>
                            <td className="nodeName">Расположение</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.nodes.valueSeq().map((node) => (
                            <>
                                {props.items
                                    .filter((item) => item.nodeId === node.id)
                                    .valueSeq()
                                    .map((item) => (
                                        <tr className="item">
                                            <td className="name">{item.name}</td>
                                            <td className="count">{item.count}</td>
                                            <td className="nodeName">{node.name}</td>
                                        </tr>
                                    ))}
                            </>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
