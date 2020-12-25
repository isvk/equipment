import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "src/store/saveStatus";

export interface IMain {
    statusAsync: { loadNodes: loadStatus; loadItems: loadStatus; saveItem: saveStatus };
}

const initialMain: IMain = {
    statusAsync: {
        loadNodes: loadStatus.notLoaded,
        loadItems: loadStatus.notLoaded,
        saveItem: saveStatus.notSaved,
    },
};

export default class Main extends Record(initialMain) {}
