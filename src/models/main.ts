import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "src/store/saveStatus";
import { deleteStatus } from "src/store/deleteStatus";

export interface IMain {
    statusAsync: { loadNodes: loadStatus; loadItems: loadStatus; saveItem: saveStatus; deleteItem: deleteStatus };
}

const initialMain: IMain = {
    statusAsync: {
        loadNodes: loadStatus.notLoaded,
        loadItems: loadStatus.notLoaded,
        saveItem: saveStatus.notSaved,
        deleteItem: deleteStatus.notDeleted,
    },
};

export default class Main extends Record(initialMain) {}
