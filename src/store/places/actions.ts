import * as types from "./types";
import Place from "src/models/place";

export const loadPlaces = () =>
    ({
        type: types.LOAD_PLACES,
    } as const);

export const loadPlacesSuccess = (places: Place[]) =>
    ({
        type: types.LOAD_PLACES_SUCCESS,
        places,
    } as const);
