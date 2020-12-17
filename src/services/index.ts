import Bottle from "bottlejs";
import Firebase from "./firebase";
import ApiPlace from "src/services/api/apiPlace";

let bottle = new Bottle();

export default bottle;
bottle.service("Firebase", Firebase);
bottle.service("ApiPlace", ApiPlace, "Firebase");

declare module "bottlejs" {
    interface IContainer {
        ApiPlace: ApiPlace;
    }
}
