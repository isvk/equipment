import Bottle from "bottlejs";
import Firebase from "./firebase";
import ApiPlace from "src/services/api/apiPlace";
import ApiInventory from "src/services/api/apiInventory";

let bottle = new Bottle();

export default bottle;
bottle.service("Firebase", Firebase);
bottle.service("ApiPlace", ApiPlace, "Firebase");
bottle.service("ApiInventory", ApiInventory, "Firebase");

declare module "bottlejs" {
    interface IContainer {
        ApiPlace: ApiPlace;
        ApiInventory: ApiInventory;
    }
}
