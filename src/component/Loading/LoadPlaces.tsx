import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusLoadPlacesAsync } from "src/store/rootSelector";
import { loadPlaces } from "src/store/places/actions";
import { loadStatus } from "src/store/loadStatus";
import Alert from "src/component/Alert/Alert";

export default function LoadPlaces() {
    const dispatch = useCustomDispatch();
    const statusAsync = useCustomSelector(mainGetStatusLoadPlacesAsync);

    useEffect(() => {
        dispatch(loadPlaces());
    }, [dispatch]);

    if (statusAsync === loadStatus.load) {
        return <Alert type="preload" text="Загрузка зданий и комнат" />;
    } else if (statusAsync === loadStatus.errorServer) {
        return <Alert type="warning" text="Ошибка загрузки зданий и комнат" />;
    }

    return <></>;
}
