"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionsTag = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const useActionsTag = (values, onChangeCallback) => {
    const [generalOptions, setGeneralOptions] = (0, react_1.useState)([]);
    const [options, setOptions] = (0, react_1.useState)([]);
    const [tags, setTags] = (0, react_1.useState)([]);
    const [actions, setActions] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // structure tags and create options
        if (values) {
            let data = [];
            for (const key in values) {
                if (key !== "type" && key !== "name" && key !== "fieldKey") {
                    let tag = key;
                    data.push({ tag, value: values[key], type: values.type, fieldKey: values.fieldKey });
                }
            }
            let extractOptions = utils_1.types[values.type].map((op) => ({ value: op.name, label: op.name }));
            setGeneralOptions(extractOptions);
            setTags(data);
        }
    }, [values]);
    (0, react_1.useEffect)(() => {
        // structure options
        if (generalOptions) {
            let copyOptions = [...generalOptions];
            copyOptions.unshift({ value: "", label: "Add" });
            if (tags.length > 0) {
                tags.forEach((t) => {
                    let findIndex = copyOptions.findIndex(op => op.value === t.tag);
                    if (findIndex !== -1) {
                        copyOptions.splice(findIndex, 1);
                    }
                });
            }
            setOptions(copyOptions);
        }
    }, [generalOptions, tags]);
    (0, react_1.useEffect)(() => {
        //Search ACTIONS
        if (tags.length > 0) {
            let searchType = utils_1.types[values.type];
            let actions = [];
            if (searchType.length > 0) {
                tags.forEach(t => {
                    let find = searchType.find(f => f.name === t.tag);
                    if (find)
                        actions.push(Object.assign(Object.assign({}, find), t));
                });
            }
            setActions(actions);
        }
    }, [values, tags]);
    const onAddTag = (0, react_1.useCallback)((value) => {
        if (value && value !== "") {
            let searchType = utils_1.types[values.type];
            let key = searchType.find(s => s.name === value).key;
            values[value] = { message: "" };
            if (key) {
                values[value] = Object.assign(Object.assign({}, values[value]), { [key]: "" });
            }
            onChangeCallback(values);
        }
    }, [values, onChangeCallback]);
    const onFinishEdit = (0, react_1.useCallback)((d) => {
        values[d.tag] = d.value;
        onChangeCallback(values);
    }, [values, onChangeCallback]);
    const onRemoveTag = (0, react_1.useCallback)((name) => {
        if (window.confirm("Are you sure you want to delete it?")) {
            delete values[name];
            onChangeCallback(values);
        }
    }, [values, onChangeCallback]);
    return { options, tags, generalOptions, actions, onAddTag, onRemoveTag, onFinishEdit };
};
exports.useActionsTag = useActionsTag;
