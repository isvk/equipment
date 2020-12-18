import { IFirebase } from "src/services/IFirebase";
import Node from "src/models/node";

export interface IReadApiNode {
    docs: {
        id: string;
        data(): { name: string; parts?: { id: string }[] };
    }[];
}

export default class ApiNode {
    constructor(private firebase: IFirebase, private collection: string = "places") {}

    loadNodes = () => {
        return this.firebase.get(this.collection).then((apiNodes: IReadApiNode) => {
            return apiNodes.docs.map((apiNode) => {
                return new Node({
                    id: apiNode.id,
                    name: apiNode.data().name,
                    descendants: apiNode.data().parts?.map((part) => part.id),
                });
            });
        });
    };
}
