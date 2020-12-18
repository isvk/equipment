import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadItemsAsync } from "src/store/rootSelector";
import { loadItems } from "src/store/item/actions";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/component/Alert/Alert";

export default function LoadItems() {
    const dispatch = useCustomDispatch();
    const statusAsync = useCustomSelector(mainGetStatusLoadItemsAsync);

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    if (statusAsync === loadStatus.load) {
        return <Alert type="preload" text="Загрузка оборудования" />;
    } else if (statusAsync === loadStatus.errorServer) {
        return <Alert type="warning" text="Ошибка загрузки оборудования" />;
    }

    return <></>;
}
