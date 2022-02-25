"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActions = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const useActions = ({ values, data, onEditKey, onChange, parse = "jsonschema" }) => {
    const [keyEdit, setKeyEdit] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)();
    const onAdd = (0, react_1.useCallback)(() => {
        if (values) {
            let copyData = Object.assign({}, data.jsonSchema);
            // parse to jsonSchema (Properties, Required, Errors)
            let jsonParse = (0, utils_1.parseToProperties)(values);
            if (jsonParse.required) {
                let requireArray = copyData.required || [];
                requireArray.push(jsonParse.required);
                copyData.required = requireArray;
            }
            if (keyEdit) {
                if (keyEdit === jsonParse.key) {
                    //@ts-ignore
                    copyData.properties[keyEdit] = jsonParse.properties[keyEdit];
                }
                else {
                    //@ts-ignore
                    delete copyData.properties[keyEdit];
                    copyData.properties[jsonParse.key] = jsonParse.properties[jsonParse.key];
                }
            }
            // build structure JsonSchema
            let schema = {
                jsonSchema: { type: "object", title: "root", properties: Object.assign(Object.assign({}, copyData.properties), jsonParse.properties), required: copyData.required },
                errors: Object.assign(Object.assign({}, data.errors), jsonParse.errors)
            };
            onChange(keyEdit, schema);
            setKeyEdit(undefined);
        }
    }, [keyEdit, data, values, onChange]);
    return { loading };
};
exports.useActions = useActions;
