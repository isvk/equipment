import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusAsync } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadNodes from "src/component/Loading/LoadNodes";
import LoadItems from "src/component/Loading/LoadItems";

export default function CatalogPage() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);

    if (statusAsync.loadNodes !== loadStatus.loaded) {
        return <LoadNodes />;
    } else if (statusAsync.loadItems !== loadStatus.loaded) {
        return <LoadItems />;
    }

    return (
        <>
            <h1>Список оборудования</h1>
        </>
    );
}
