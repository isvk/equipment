import { Record } from "immutable";

export interface IPlace {
    id: string;
    name: string;
    parts?: IPlace["id"][];
}

export const initialPlace: IPlace = {
    id: "",
    name: "",
    parts: undefined,
};

export default class Place extends Record(initialPlace) {}
