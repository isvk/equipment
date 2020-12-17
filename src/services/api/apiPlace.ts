import { IFirebase } from "src/services/IFirebase";
import Place from "src/models/place";

export interface IReadApiPlace {
    docs: {
        id: string;
        data(): { name: string; parts?: { id: string }[] };
    }[];
}

export default class ApiPlace {
    constructor(private firebase: IFirebase, private collection: string = "places") {}

    loadPlaces = () => {
        return this.firebase.get(this.collection).then((apiPlaces: IReadApiPlace) => {
            return apiPlaces.docs.map((apiPlace) => {
                return new Place({
                    id: apiPlace.id,
                    name: apiPlace.data().name,
                    parts: apiPlace.data().parts?.map((part) => part.id),
                });
            });
        });
    };
}
