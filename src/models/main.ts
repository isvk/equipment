import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusAsync: { loadPlaces: loadStatus; loadInventories: loadStatus };
}

const initialMain: IMain = {
    statusAsync: {
        loadPlaces: loadStatus.notLoaded,
        loadInventories: loadStatus.notLoaded,
    },
};

export default class Main extends Record(initialMain) {}
