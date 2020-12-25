import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { setSelectedByIdsRestUnselected } from "src/store/nodes/actions";
import {
    mainGetStatusAsync,
    nodesGetSelectedNodes,
    nodesGetNodeById,
    itemsGetItemsForSelectedNodes,
} from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import { INodeUrl } from "src/App";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import Catalog from "src/component/Catalog/Catalog";
import TreeView from "src/component/TreeView/TreeView";
import ControlPanel from "src/component/ControlPanel/ControlPanel";
import ListItems from "src/component/ListItems/ListItems";
import Header from "src/component/UI/Header/Header";
import Footer from "src/component/UI/Footer/Footer";
import { FaPlus as AddButtonIcon } from "react-icons/fa";

export default function NodePage() {
    const dispatch = useCustomDispatch();
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const selectedNodes = useCustomSelector(nodesGetSelectedNodes);
    const { nodeId } = useParams<INodeUrl>();
    const node = useCustomSelector(nodesGetNodeById, nodeId);

    useEffect(() => {
        if (node) {
            dispatch(setSelectedByIdsRestUnselected([node.id]));
        }
    }, [dispatch, node]);

    const itemsForSelectedNodes = useCustomSelector(itemsGetItemsForSelectedNodes);

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    if (node) {
        let links = [];

        if (!node.descendants) {
            links.push({
                url: "/catalog/node/" + node.id + "/create_item",
                label: (
                    <>
                        <AddButtonIcon />
                        Добавить оборудование
                    </>
                ),
            });
        }

        return (
            <Catalog
                head={<>Оборудование в "{node.name}"</>}
                navigation={<TreeView />}
                control={<ControlPanel links={links} />}
                content={
                    <>
                        <Header>Оборудование в "{node.name}"</Header>
                        <ListItems nodes={selectedNodes} items={itemsForSelectedNodes} />
                        <Footer>Всего оборудования: {itemsForSelectedNodes.size}</Footer>
                    </>
                }
            />
        );
    }

    return <>404</>;
}
