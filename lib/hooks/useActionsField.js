"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionsField = void 0;
const react_1 = require("react");
const useActionsField = (data, onChange) => {
    const [values, setValues] = (0, react_1.useState)(data);
    const [fields, setFields] = (0, react_1.useState)([]);
    const [fieldKeys, setFieldKeys] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => setValues(data), [data]);
    const onAddField = (0, react_1.useCallback)(() => {
        let copyValues = Object.assign({}, values);
        let keys = Object.keys(copyValues).length;
        copyValues[`field${keys}`] = { type: "string", fieldKey: `field${keys}` };
        setValues(copyValues);
    }, [values]);
    const onRemoveField = (0, react_1.useCallback)((index) => {
        let copyField = [...fields];
        copyField.splice(index, 1);
        onChange(structureData(copyField));
    }, [fields, onChange]);
    const onChangeCallback = (0, react_1.useCallback)((value, index) => {
        fields[index] = Object.assign({}, value);
        onChange(structureData(fields));
    }, [fields, onChange]);
    (0, react_1.useEffect)(() => {
        let list = [];
        const fieldsNames = [];
        for (const key in values) {
            list.push(Object.assign({}, values[key]));
            fieldsNames.push(key);
        }
        setFieldKeys(fieldsNames);
        setFields(list);
    }, [values]);
    const structureData = (0, react_1.useCallback)((field) => {
        let data = {};
        field.forEach(e => {
            data = Object.assign(Object.assign({}, data), { [e.fieldKey]: Object.assign({}, e) });
        });
        return data;
    }, []);
    const onChangeFieldName = (0, react_1.useCallback)((value, key) => {
        let copy = [...fieldKeys];
        copy[key] = value;
        setFieldKeys(copy);
    }, []);
    return { onChangeCallback, onAddField, fields, onRemoveField, onChangeFieldName, fieldKeys };
};
exports.useActionsField = useActionsField;
