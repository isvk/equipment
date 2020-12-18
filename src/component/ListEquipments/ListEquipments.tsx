import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusAsync } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import LoadPlaces from "src/component/Loading/LoadPlaces";
import LoadInventories from "src/component/Loading/LoadInventories";

export default function ListEquipments() {
    const statusAsync = useCustomSelector(mainGetStatusAsync);

    if (statusAsync.loadPlaces !== loadStatus.loaded) {
        return <LoadPlaces />;
    } else if (statusAsync.loadInventories !== loadStatus.loaded) {
        return <LoadInventories />;
    }

    return (
        <>
            <h1>Список оборудования</h1>
        </>
    );
}
