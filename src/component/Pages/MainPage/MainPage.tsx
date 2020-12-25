import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { setSelectedByIdsRestUnselected } from "src/store/nodes/actions";
import { mainGetStatusAsync, nodeState, itemsGetItemsByNodeIds } from "src/store/rootSelector";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";
import Catalog from "src/component/Catalog/Catalog";
import { loadStatus } from "src/store/loadStatus";
import TreeView from "src/component/TreeView/TreeView";
import ListItems from "src/component/ListItems/ListItems";
import Header from "src/component/UI/Header/Header";
import Footer from "src/component/UI/Footer/Footer";

export default function MainPage() {
    const dispatch = useCustomDispatch();
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const nodes = useCustomSelector(nodeState);
    const items = useCustomSelector(
        itemsGetItemsByNodeIds,
        nodes
            .valueSeq()
            .map((node) => node.id)
            .toJS()
    );

    useEffect(() => {
        dispatch(setSelectedByIdsRestUnselected([]));
    }, [dispatch]);

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    if (nodes) {
        return (
            <Catalog
                head={<>Всё оборудование</>}
                navigation={<TreeView />}
                control={<></>}
                content={
                    <>
                        <Header>Всё оборудование</Header>
                        <ListItems nodes={nodes} items={items} />
                        <Footer>Всего оборудования: {items.size}</Footer>
                    </>
                }
            />
        );
    }

    return <>404</>;
}
