import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { updateItem, deleteItem } from "src/store/item/actions";
import Item from "src/models/item";
import FormItem from "../FormItem";

interface IEditFormItemProps {
    item: Item;
}

export default function EditItem(props: IEditFormItemProps) {
    const dispatch = useCustomDispatch();

    const handleSave = (item: Item) => {
        dispatch(updateItem(item.id, item));
    };

    const handleDelete = (id: Item["id"]) => {
        dispatch(deleteItem(id));
    };

    return <FormItem typeForm="edit" item={props.item} handleSave={handleSave} handleDelete={handleDelete} />;
}
