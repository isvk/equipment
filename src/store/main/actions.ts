import * as types from "./types";
import Main from "src/models/main";
import { loadStatus } from "src/store/loadStatus";
import { saveStatus } from "src/store/saveStatus";

export const setStatusAsync = (status: keyof Main["statusAsync"], value: loadStatus | saveStatus) =>
    ({
        type: types.SET_STATUS_ASYNC,
        status,
        value,
    } as const);
