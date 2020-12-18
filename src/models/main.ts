import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    statusAsync: { loadNodes: loadStatus; loadItems: loadStatus };
}

const initialMain: IMain = {
    statusAsync: {
        loadNodes: loadStatus.notLoaded,
        loadItems: loadStatus.notLoaded,
    },
};

export default class Main extends Record(initialMain) {}
