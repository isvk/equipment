import { IFirebase } from "src/services/IFirebase";
import Item from "src/models/item";

export interface IReadApiItem {
    docs: {
        id: string;
        data(): {
            name: string;
            count: string | number;
            place?: { id: string };
        };
    }[];
}

export default class ApiItem {
    constructor(private firebase: IFirebase, private collection: string = "inventory") {}

    loadItems = () => {
        return this.firebase.get(this.collection).then((apiItems: IReadApiItem) => {
            return apiItems.docs
                .map((apiItem) => {
                    if (apiItem.id.length > 0 && Number(apiItem.data().count) > 0) {
                        return new Item({
                            id: apiItem.id,
                            nodeId: apiItem.data().place?.id,
                            name: apiItem.data().name,
                            count: Number(apiItem.data().count),
                        });
                    }

                    return undefined;
                })
                .filter((apiItem) => apiItem);
        });
    };
}
