import * as placeActions from "src/store/places/actions";
import * as inventoryActions from "src/store/inventory/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<InferValueTypes<T>>;

export type allActionsTypes = ActionTypesInfer<typeof placeActions | typeof inventoryActions>;
