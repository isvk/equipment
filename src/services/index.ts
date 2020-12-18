import Bottle from "bottlejs";
import Firebase from "./firebase";
import ApiNode from "src/services/api/apiNode";
import ApiItem from "src/services/api/apiItem";

let bottle = new Bottle();

export default bottle;
bottle.service("Firebase", Firebase);
bottle.service("ApiNode", ApiNode, "Firebase");
bottle.service("ApiItem", ApiItem, "Firebase");

declare module "bottlejs" {
    interface IContainer {
        ApiNode: ApiNode;
        ApiItem: ApiItem;
    }
}
