"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
const utils_1 = require("./utils");
const ExtendedConfigEdit_1 = require("./ExtendedConfigEdit");
const Index_1 = require("./components/Index");
require("../lib/styles/styles.css");
/**
 * @param data this property receives {jsonSchema, errors}. default {}
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param showList view Table
 * @param
 * @param id set container id

 * @returns {JSX.Element}
 * @constructor
 */
const JsonSchemaValidate = ({ data = {}, onChange, className = "", iconClassCollapseUp, iconClassCollapseDown, iconClassRemove, iconClassEdit, id, showList = true }) => {
    const [collapsed, setCollapsed] = (0, react_1.useState)(true);
    const onCollapsed = (0, react_1.useCallback)(() => setCollapsed(current => !current), []);
    const [values, setValues] = (0, react_1.useState)({});
    const [keyEdit, setKeyEdit] = (0, react_1.useState)();
    const [list, setList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (keyEdit) {
            let itemEdit = (0, utils_1.searchKeyData)(data, keyEdit);
            if (itemEdit)
                setValues(itemEdit);
        }
    }, [data, keyEdit]);
    (0, react_1.useEffect)(() => {
        if (data.jsonSchema)
            setList((0, utils_1.getList)(data.jsonSchema, data.errors));
    }, [data]);
    const onChangeCallback = (0, react_1.useCallback)((value, name) => {
        let copyValues = Object.assign({}, values);
        copyValues[name] = value;
        setValues(copyValues);
    }, [values]);
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
            let arrayList = (0, utils_1.getList)(schema.jsonSchema, schema.errors);
            onChange(schema, arrayList);
            setValues({});
            setKeyEdit(undefined);
            setCollapsed(true);
        }
    }, [keyEdit, data, values, onChange]);
    (0, react_1.useEffect)(() => {
        if (values.type)
            setCollapsed(false);
        else {
            setCollapsed(true);
        }
    }, [values.type]);
    const onRemove = (0, react_1.useCallback)((key) => {
    }, []);
    return (react_1.default.createElement("div", { className: `react-jsonschema-validate-editor-container ${className}`, id: id },
        react_1.default.createElement("div", { className: "row align-items-center" },
            react_1.default.createElement("div", { className: "col-sm-4" },
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "Name Field", value: values.name || "", onChange: (value) => onChangeCallback(value, "name") })),
            react_1.default.createElement("div", { className: "col-sm-4" },
                react_1.default.createElement(Index_1.SelectCustom, { disabled: !values.name, name: "type", value: values.type || "", onChange: (value) => onChangeCallback(value, "type"), options: utils_1.optionsType })),
            react_1.default.createElement("div", { className: "col-sm-2 form-check" },
                react_1.default.createElement(Index_1.SwitchCustom, { disabled: !values.name, label: "Required", name: "required", value: values.required || false, onChange: (checked) => onChangeCallback(checked, "required") })),
            values.type &&
                react_1.default.createElement("div", { className: "col-sm-2 react-jsonschema-validate-editor-collapse" }, iconClassCollapseDown && iconClassCollapseUp ?
                    react_1.default.createElement("i", { className: `${!collapsed ? iconClassCollapseDown : iconClassCollapseUp}` })
                    : react_1.default.createElement("span", { className: `${!collapsed ? "json-editor-collapse-down" : ""}`, onClick: onCollapsed }, "^"))),
        !collapsed &&
            react_1.default.createElement("div", { className: "mt-2 json-validate-editor-extended-configuration-container" },
                react_1.default.createElement("div", { className: "text-json-editor-h6 mb-2" },
                    react_1.default.createElement("h6", null, "Extended Configuration"),
                    react_1.default.createElement("div", { className: "json-validate-editor-divider" })),
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { values: values, onChangeCallback: (value, name) => onChangeCallback(value, name) })),
        react_1.default.createElement("div", { className: "text-start mt-3" },
            react_1.default.createElement("button", { disabled: !values.name && !values.type, className: "btn btn-success text-align-left", onClick: onAdd, type: "button" }, keyEdit ? 'Edit' : 'Add')),
        list.length > 0 && showList &&
            react_1.default.createElement("div", { className: "json-validate-editor-list-container mt-3" },
                react_1.default.createElement("div", { className: "row t-l" },
                    react_1.default.createElement("div", { className: "col-sm-3" },
                        react_1.default.createElement("strong", null, "Field Name")),
                    react_1.default.createElement("div", { className: "col-sm-2" },
                        react_1.default.createElement("strong", null, "Type")),
                    react_1.default.createElement("div", { className: "col-sm-2" },
                        react_1.default.createElement("strong", null, "Required")),
                    react_1.default.createElement("div", { className: "col-sm-5" })),
                list.map((item, index) => (react_1.default.createElement("div", { className: `row t-l align-items-center ${item.name === keyEdit ? 'json-validate-editor-list-active' : ""}`, key: index },
                    react_1.default.createElement("div", { className: "col-sm-3" }, item.name),
                    react_1.default.createElement("div", { className: "col-sm-2" }, item.type),
                    react_1.default.createElement("div", { className: "col-sm-2" }, item.required ? 'Yes' : ""),
                    react_1.default.createElement("div", { className: "col-sm-5 json-validate-editor-actions" },
                        react_1.default.createElement("div", { className: "json-validate-editor-actions-actions-item" },
                            react_1.default.createElement("p", { className: "json-validate-editor-actions", onClick: () => setKeyEdit(item.name) }, iconClassEdit ? react_1.default.createElement("i", { className: iconClassEdit })
                                : react_1.default.createElement("button", { className: "btn btn-light btn-sm" }, "Edit")),
                            react_1.default.createElement("p", { className: "json-validate-editor-actions", onClick: () => onRemove(item.name) }, iconClassRemove ? react_1.default.createElement("i", { className: iconClassRemove })
                                : react_1.default.createElement("button", { className: "btn btn-danger btn-sm" }, "X"))))))))));
};
exports.default = JsonSchemaValidate;
