import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadPlaces } from "src/store/places/actions";
import { loadInventories } from "src/store/inventory/actions";

export default function ListEquipments() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadPlaces());
        dispatch(loadInventories());
    }, [dispatch]);

    return (
        <>
            <h1>Список оборудования</h1>
        </>
    );
}
