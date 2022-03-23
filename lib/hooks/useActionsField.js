"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionsField = void 0;
const react_1 = require("react");
const useActionsField = (data) => {
    const [values, setValues] = (0, react_1.useState)(data);
    const [editing, setEditing] = (0, react_1.useState)({});
    const [fields, setFields] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => setValues(data), [data]);
    const onAddField = (0, react_1.useCallback)(() => {
        let copyValues = Object.assign({}, values);
        let keys = Object.keys(copyValues).length;
        copyValues[`field${keys}`] = { type: "string" };
        setValues(copyValues);
    }, [values]);
    const onEditField = (0, react_1.useCallback)((name) => {
        let copyEditing = Object.assign({}, editing);
        for (const key in copyEditing) {
            if (key === name)
                copyEditing[key] = !copyEditing[key];
            else
                copyEditing[key] = false;
        }
        console.log(copyEditing);
        setEditing(copyEditing);
    }, [editing]);
    const onChangeCallback = (0, react_1.useCallback)((value, index) => {
        let copyField = [...fields];
        copyField[index] = Object.assign({}, value);
        setFields(copyField);
    }, [fields]);
    (0, react_1.useEffect)(() => {
        let list = [];
        let typeEditing = {};
        for (const key in values) {
            list.push(Object.assign(Object.assign({}, values[key]), { name: key }));
            typeEditing = Object.assign(Object.assign({}, typeEditing), { [key]: false });
        }
        setEditing(typeEditing);
        setFields(list);
    }, [values]);
    return { onChangeCallback, onEditField, onAddField, fields, editing };
};
exports.useActionsField = useActionsField;
