import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { useParams } from "react-router";
import { mainGetStatusAsync, itemsGetItemById, nodesGetNodeById } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import { IEditItemUrl } from "src/App";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import Catalog from "src/component/Catalog/Catalog";
import TreeView from "src/component/TreeView/TreeView";
import ControlPanel from "src/component/ControlPanel/ControlPanel";
import EditItem from "src/component/FormItem/EditFormItem/EditItem";
import Header from "src/component/UI/Header/Header";
import { FaRegArrowAltCircleLeft as BackButtonIcon } from "react-icons/fa";

export default function EditItemPage() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const { itemId } = useParams<IEditItemUrl>();

    const item = useCustomSelector(itemsGetItemById, itemId);
    const ancestorNode = useCustomSelector(nodesGetNodeById, item?.nodeId);

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
                        Перейти в "{ancestorNode.name}"
                    </>
                ),
            },
        ];

        return (
            <Catalog
                head={<>Редактировать оборудование "{item.name}"</>}
                navigation={<TreeView />}
                control={<ControlPanel links={links} />}
                content={
                    <>
                        <Header>Редактировать оборудование "{item.name}"</Header>
                        <EditItem item={item} />
                    </>
                }
            />
        );
    }

    return <>404</>;
}
