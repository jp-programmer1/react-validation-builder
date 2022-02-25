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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
const utils_1 = require("../utils");
const ExtendedConfigEdit_1 = require("./ExtendedConfigEdit");
const Index_1 = require("../components/Index");
const Tag_1 = __importDefault(require("../components/Tag"));
require("../../lib/styles/styles.css");
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
const initTypeString = {
    person: {
        type: "string",
        required: true,
        min: { limit: 2, message: "Hello" },
        fieldKey: "person"
    },
    phone: {
        type: "number",
        required: { required: true, message: "Este campo es requerido" },
        fieldKey: "phone"
    }
};
const JsonSchemaValidate = ({ data = {}, onChange, className = "", id, }) => {
    const [values, setValues] = (0, react_1.useState)(Object.assign({}, initTypeString));
    const [fields, setFields] = (0, react_1.useState)([]);
    const [editing, setEditing] = (0, react_1.useState)({});
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
    const styles = (0, react_1.useMemo)(() => ({
        backgroundColor: "#DBAB2F",
        color: "white",
        fontWeight: "bold",
        width: 100,
    }), []);
    const onAddField = (0, react_1.useCallback)(() => {
        let copyValues = Object.assign({}, values);
        let keys = Object.keys(copyValues).length;
        copyValues[`field${keys}`] = { type: "string" };
        setValues(copyValues);
    }, [values]);
    const onEdit = (0, react_1.useCallback)((name) => {
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
    return (react_1.default.createElement("div", { className: `react-jsonschema-validate-editor-container ${className}`, id: id },
        react_1.default.createElement("div", { className: "validate-editor-container-button-add" },
            react_1.default.createElement("button", { type: "button", className: "btn btn-success btn-sm", onClick: onAddField }, "Add")),
        fields && fields.map((field, key) => (react_1.default.createElement("div", { className: "row align-items-center mb-3", key: key },
            react_1.default.createElement("div", { className: "col-sm-3" },
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "Name Field", value: field.name || "", onChange: (value) => {
                        field.name = value;
                        onChangeCallback(field, key);
                    } })),
            react_1.default.createElement("div", { className: "col-sm-2 validate-editor-container-select-type" },
                react_1.default.createElement(Tag_1.default, { styles: Object.assign({}, styles), options: utils_1.optionsType, name: "type", values: field.type, editing: editing[field.name], onActivateEdit: () => onEdit(field.fieldKey), onChange: (value) => {
                        field.type = value;
                        onChangeCallback(field, key);
                        onEdit(field.fieldKey);
                    } })),
            react_1.default.createElement("div", { className: "col-sm-7 validate-editor-container-config-tags " }, field.type &&
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { values: field, onChangeCallback: (value) => onChangeCallback(value, key) })))))));
};
exports.default = JsonSchemaValidate;
