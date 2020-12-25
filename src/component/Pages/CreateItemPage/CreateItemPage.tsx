import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { mainGetStatusAsync, nodesGetNodeById } from "src/store/rootSelector";
import Item, { initialItem } from "src/models/item";
import { loadStatus } from "src/store/loadStatus";
import { ICreateItemUrl } from "src/App";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import Catalog from "src/component/Catalog/Catalog";
import TreeView from "src/component/TreeView/TreeView";
import ControlPanel from "src/component/ControlPanel/ControlPanel";
import CreateItem from "src/component/FormItem/CreateFormItem/CreateItem";
import Header from "src/component/UI/Header/Header";
import { FaRegArrowAltCircleLeft as BackButtonIcon } from "react-icons/fa";

export default function CreateItemPage() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const { nodeId } = useParams<ICreateItemUrl>();
    const ancestorNode = useCustomSelector(nodesGetNodeById, nodeId);
    const item = ancestorNode ? new Item({ ...initialItem, nodeId: ancestorNode.id }) : undefined;

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    if (item && ancestorNode) {
        const links = [
            {
                url: "/catalog/node/" + ancestorNode.id,
                label: (
                    <>
                        <BackButtonIcon />
                        Назад
                    </>
                ),
            },
        ];

        return (
            <Catalog
                head={<>Добавить оборудование в "{ancestorNode.name}"</>}
                navigation={<TreeView />}
                control={<ControlPanel links={links} />}
                content={
                    <>
                        <Header>Добавить оборудование в "{ancestorNode.name}"</Header>
                        <CreateItem item={item} />
                    </>
                }
            />
        );
    }

    return <>404</>;
}
