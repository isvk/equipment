import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { createItem } from "src/store/item/actions";
import Item from "src/models/item";
import FormItem from "../FormItem";

interface ICreateItemProps {
    item: Item;
}

export default function CreateItem(props: ICreateItemProps) {
    const dispatch = useCustomDispatch();

    const handleSave = (item: Item) => {
        dispatch(createItem(item));
    };

    return <FormItem typeForm="create" item={props.item} handleSave={handleSave} />;
}
