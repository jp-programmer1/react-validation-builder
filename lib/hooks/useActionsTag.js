"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionsTag = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const useActionsTag = (values, onChangeCallback) => {
    const [generalOptions, setGeneralOptions] = (0, react_1.useState)([]);
    const [options, setOptions] = (0, react_1.useState)([]);
    const [tags, setTags] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (values) {
            let data = [];
            for (const key in values) {
                if (key !== "type" && key !== "name" && key !== "fieldKey") {
                    let tag = key;
                    data.push({ tag, value: values[key], editing: false });
                }
            }
            let extractOptions = utils_1.types[values.type].map(op => ({ value: op.name, label: op.name }));
            ;
            setGeneralOptions(extractOptions);
            setTags(data);
        }
    }, [values]);
    (0, react_1.useEffect)(() => {
        // structure options
        if (generalOptions && tags.length > 0) {
            let copyOptions = [...generalOptions];
            copyOptions.unshift({ value: "", label: "Add" });
            tags.forEach(t => {
                let findIndex = copyOptions.findIndex(op => op.value === t.tag);
                if (findIndex !== -1)
                    copyOptions.splice(findIndex, 1);
            });
            setOptions(copyOptions);
        }
    }, [generalOptions, tags]);
    const onAddTag = (0, react_1.useCallback)((value) => {
        if (value && value !== "") {
            values[value] = { [value]: "", message: "" };
            onChangeCallback && onChangeCallback(values);
        }
    }, [values, onChangeCallback]);
    const onRemoveTag = (0, react_1.useCallback)((name) => {
        if (window.confirm("Are you sure you want to delete it?")) {
            delete values[name];
            onChangeCallback && onChangeCallback(values);
        }
    }, [values, onChangeCallback]);
    const onActivateEdit = (0, react_1.useCallback)((name, index) => {
        let data = [...tags];
        data.forEach(((d, key) => {
            if (index === key && name === d.tag)
                d.editing = !d.editing;
            else
                d.editing = false;
        }));
        setTags(data);
    }, [tags]);
    const onEditTag = (0, react_1.useCallback)((name, value) => {
        let data = [...tags];
        return data;
    }, [tags]);
    return { options, tags, generalOptions, onAddTag, onRemoveTag, onActivateEdit, onEditTag };
};
exports.useActionsTag = useActionsTag;
