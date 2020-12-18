import { IFirebase } from "src/services/IFirebase";
import Inventory from "src/models/inventory";

export interface IReadApiInventory {
    docs: {
        id: string;
        data(): {
            name: string;
            count: string | number;
            place?: { id: string };
        };
    }[];
}

export default class ApiInventory {
    constructor(private firebase: IFirebase, private collection: string = "inventory") {}

    loadInventories = () => {
        return this.firebase.get(this.collection).then((apiInventories: IReadApiInventory) => {
            return apiInventories.docs.map((apiInventory) => {
                if (apiInventory.id.length > 0 && Number(apiInventory.data().count) > 0) {
                    return new Inventory({
                        id: apiInventory.id,
                        placeId: apiInventory.data().place?.id,
                        name: apiInventory.data().name,
                        count: Number(apiInventory.data().count),
                    });
                }
            });
        });
    };
}
