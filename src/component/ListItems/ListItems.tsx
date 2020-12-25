import React from "react";
import { Link } from "react-router-dom";
import { TStoreNode } from "src/store/nodes/reducer";
import { TStoreItem } from "src/store/item/reducer";

import "./ListItems.scss";

interface IListItemsProps {
    nodes: TStoreNode;
    items: TStoreItem;
}

export default function ListItems(props: IListItemsProps) {
    if (props.nodes && props.items && props.nodes.size > 0 && props.items.size > 0) {
        return (
            <div className="listItems">
                <table className="items">
                    <thead>
                        <tr className="head">
                            <td className="cell name">Название оборудования</td>
                            <td className="cell count">Количество</td>
                            <td className="cell nodeName">Расположение</td>
                        </tr>
                    </thead>
                    {props.nodes.valueSeq().map((node) => (
                        <tbody key={node.id}>
                            {props.items
                                .filter((item) => item.nodeId === node.id)
                                .valueSeq()
                                .map((item) => (
                                    <tr className="item" key={item.id}>
                                        <td className="cell name">
                                            <Link to={"/catalog/item/" + item.id}>{item.name}</Link>
                                        </td>
                                        <td className="cell count">{item.count}</td>
                                        <td className="cell nodeName">{node.name}</td>
                                    </tr>
                                ))}
                        </tbody>
                    ))}
                </table>
            </div>
        );
    }

    return <div className="notFound">Оборудования нет</div>;
}
