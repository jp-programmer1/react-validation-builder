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
 * @param data the json schema object
 * @param onChange function that returns a jsonschema
 * @param className set container className
 * @param componentAdd integrate add item component
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param id set container id

 * @returns {JSX.Element}
 * @constructor
 */
const JsonSchemaValidate = ({ data = utils_1.defaultSchema, onChange, className = "", componentAdd, componentOffCollapse, componentOnCollapse, componentRemove, id, showList }) => {
    const [collapsed, setCollapsed] = (0, react_1.useState)(true);
    const onCollapsed = (0, react_1.useCallback)(() => setCollapsed(current => !current), []);
    const [values, setValues] = (0, react_1.useState)({});
    const [keyEdit, setKeyEdit] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (keyEdit) {
            let find = data.properties[keyEdit];
            if (find)
                setValues(data.properties[keyEdit]);
        }
    }, []);
    const onChangeCallback = (0, react_1.useCallback)((value, name) => {
        let copyData = Object.assign({}, values);
        copyData[name] = value;
        console.log(copyData);
        setValues(copyData);
    }, [values]);
    const onAdd = (0, react_1.useCallback)(() => {
        if (values) {
            let copyData = Object.assign({}, data);
            if (keyEdit) {
                delete values.name;
                copyData.properties[keyEdit] = values;
            }
            else {
                let key = values.name;
                delete values.name;
                copyData.properties[key] = values;
            }
            copyData.properties = Object.assign(Object.assign({}, copyData.properties), values);
        }
    }, [keyEdit, data, values, onChange]);
    const onRemove = (0, react_1.useCallback)(() => {
    }, []);
    return (react_1.default.createElement("div", { className: `react-jsonschema-validate-editor-container ${className}`, id: id },
        react_1.default.createElement("div", { className: "row align-items-center" },
            react_1.default.createElement("div", { className: "col-sm-4" },
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "Name Field", value: values.name, onChange: (value) => onChangeCallback(value, "name") })),
            react_1.default.createElement("div", { className: "col-sm-4" },
                react_1.default.createElement(Index_1.SelectCustom, { name: "type", value: values.type, onChange: (value) => onChangeCallback(value, "type"), options: utils_1.optionsType })),
            react_1.default.createElement("div", { className: "col-sm-2 form-check" },
                react_1.default.createElement(Index_1.SwitchCustom, { label: "Required", name: "required", value: values.required, onChange: (checked) => onChangeCallback(checked, "required") })),
            values.type && values.type !== "boolean" &&
                react_1.default.createElement("div", { className: "col-sm-2 react-jsonschema-validate-editor-collapse" },
                    react_1.default.createElement("span", { className: `${!collapsed ? "json-editor-collapse-down" : ""}`, onClick: onCollapsed }, "^"))),
        react_1.default.createElement("div", { className: "text-start mt-3" },
            react_1.default.createElement("button", { className: "btn btn-success text-align-left", onClick: onAdd, type: "button" }, keyEdit ? 'Edit' : 'Add')),
        !collapsed &&
            react_1.default.createElement("div", { className: "mt-2 json-validate-editor-extended-configuration-container" },
                react_1.default.createElement("div", { className: "text-json-editor-h6 mb-2" },
                    react_1.default.createElement("h6", null, "Extended Configuration"),
                    react_1.default.createElement("div", { className: "json-validate-editor-divider" })),
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { values: values, onChangeCallback: (value, name) => onChangeCallback(value, name) }))));
};
exports.default = JsonSchemaValidate;
