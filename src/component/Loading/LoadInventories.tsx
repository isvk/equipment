import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadInventoriesAsync } from "src/store/rootSelector";
import { loadInventories } from "src/store/inventory/actions";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/component/Alert/Alert";

export default function LoadInventories() {
    const dispatch = useCustomDispatch();
    const statusAsync = useCustomSelector(mainGetStatusLoadInventoriesAsync);

    useEffect(() => {
        dispatch(loadInventories());
    }, [dispatch]);

    if (statusAsync === loadStatus.load) {
        return <Alert type="preload" text="Загрузка оборудования" />;
    } else if (statusAsync === loadStatus.errorServer) {
        return <Alert type="warning" text="Ошибка загрузки оборудования" />;
    }

    return <></>;
}
