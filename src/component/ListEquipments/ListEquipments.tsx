import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadPlaces } from "src/store/places/actions";

export default function ListEquipments() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadPlaces());
    }, [dispatch]);

    return (
        <>
            <h1>Список оборудования</h1>
        </>
    );
}
