import * as mainActions from "src/store/main/actions";
import * as nodeActions from "src/store/nodes/actions";
import * as itemActions from "src/store/item/actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesInfer<T extends { [key: string]: any }> = ReturnType<InferValueTypes<T>>;

export type allActionsTypes = ActionTypesInfer<typeof mainActions | typeof nodeActions | typeof itemActions>;
