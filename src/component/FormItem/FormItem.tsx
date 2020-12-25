import React, { useState, useEffect } from "react";
import { is } from "immutable";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatusAsync } from "src/store/rootSelector";
import { setStatusAsync } from "src/store/main/actions";
import { saveStatus } from "src/store/saveStatus";
import Item from "src/models/item";
import Button from "src/component/UI/Button/Button";
import FieldInput from "src/component/UI/FieldInput/FieldInput";
import Modal from "src/component/UI/Modal/Modal";
import { FaCloudUploadAlt as NoSavedIcon } from "react-icons/fa";
import { FaCheck as SaveIcon } from "react-icons/fa";
import { FaSpinner as PreloaderIcon } from "react-icons/fa";
import { FaTrashAlt as DeleteIcon } from "react-icons/fa";

import "./FormItem.scss";

interface IFromItemProps {
    typeForm: "create" | "edit";
    item: Item;
    handleSave(item: Item): void;
    handleDelete?(id: Item["id"]): void;
}

export default function FormItem(props: IFromItemProps) {
    const dispatch = useCustomDispatch();
    const [item, setItem] = useState(props.item);
    const isItemNotSaved = !is(item, props.item);
    const statusAsync = useCustomSelector(mainGetStatusAsync);
    const [showModalDelete, setShowModalDelete] = useState(false);

    useEffect(() => {
        dispatch(setStatusAsync("saveItem", isItemNotSaved ? saveStatus.notSaved : saveStatus.saved));
    }, [dispatch, isItemNotSaved]);

    return (
        <div className="form-item">
            <div className="field name">
                <div className="label">Название:</div>
                <div className="value">
                    <FieldInput value={item.name} onChange={(e) => setItem(item.set("name", e.currentTarget.value))} />
                </div>
            </div>
            <div className="field count">
                <div className="label">Количество:</div>
                <div className="value">
                    <FieldInput
                        value={String(item.count)}
                        onChange={(e) => setItem(item.set("count", Number(e.currentTarget.value)))}
                        type="number"
                        min="1"
                    />
                </div>
            </div>
            <div className="buttons">
                <Button className="buttonSave" onClick={() => props.handleSave(item)}>
                    {(statusAsync.saveItem === saveStatus.notSaved ||
                        statusAsync.saveItem === saveStatus.errorServer) && <NoSavedIcon />}
                    {statusAsync.saveItem === saveStatus.saved && <SaveIcon />}
                    {statusAsync.saveItem === saveStatus.save && <PreloaderIcon className="preloaderIcon" />}
                    {props.typeForm === "create" && "Добавить"}
                    {props.typeForm === "edit" && "Сохранить"}
                </Button>
                {typeof props.handleDelete === "function" && (
                    <>
                        {showModalDelete && (
                            <Modal title="Удалить оборудование?" onClose={() => setShowModalDelete(false)}>
                                <div className="wrapperButtons">
                                    <button onClick={() => props.handleDelete!(props.item.id)}>Да</button>
                                    <button onClick={() => setShowModalDelete(false)}>Нет</button>
                                </div>
                            </Modal>
                        )}

                        <Button className="buttonDelete" onClick={() => setShowModalDelete(true)}>
                            <DeleteIcon />
                            Удалить
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
