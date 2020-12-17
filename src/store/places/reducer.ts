import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import Place from "src/models/place";
import * as types from "./types";
import * as actions from "./actions";

export type TStorePlace = Map<Place["id"], Place>;

const reducer = (state: TStorePlace = Map(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_PLACES_SUCCESS:
            action.places.forEach((place: Place) => {
                state = state.set(place.id, place);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
