import { IFirebase } from "src/services/IFirebase";
import Item from "src/models/item";

export interface IReadApiItem {
    id: string;
    data(): {
        name: string;
        count: string | number;
        place?: { id: string };
    };
}

export default class ApiItem {
    constructor(private firebase: IFirebase, private collection: string = "inventory") {}

    loadItems = () => {
        return this.firebase.get(this.collection).then((apiItems: { docs: IReadApiItem[] }) => {
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

    loadItem = (id: Item["id"]) => {
        return this.firebase.getOne(this.collection, id).then((apiItem: IReadApiItem) => {
            return new Item({
                id: apiItem.id,
                nodeId: apiItem.data().place?.id,
                name: apiItem.data().name,
                count: Number(apiItem.data().count),
            });
        });
    };

    createItem = (item: Item) => {
        if (item.nodeId) {
            let filestore = this.firebase.firestore;

            return filestore
                .collection(this.collection)
                .add({
                    name: item.name,
                    count: item.count,
                    place: filestore.collection("places").doc(item.nodeId),
                })
                .then((response: any) => {
                    return response.id;
                });
        } else {
            throw new Error("Not found ancestor node");
        }
    };

    updateItem = (id: Item["id"], item: Item) => {
        if (id && item) {
            let filestore = this.firebase.firestore;

            return filestore
                .collection(this.collection)
                .doc(id)
                .set({
                    name: item.name,
                    count: item.count,
                    place: filestore.collection("places").doc(item.nodeId),
                })
                .then(() => true);
        } else {
            throw new Error("Not found item");
        }
    };

    deleteItem = (id: Item["id"]) => {
        return this.firebase.delete(this.collection, id).then(() => true);
    };
}
