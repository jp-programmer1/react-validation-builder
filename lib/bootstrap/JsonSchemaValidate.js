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
const ExtendedConfigEdit_1 = require("./ExtendedConfigEdit");
const Index_1 = require("../components/Index");
const Tag_1 = __importDefault(require("../components/Tag"));
require("../../lib/styles/styles.css");
const useActionsField_1 = require("../hooks/useActionsField");
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
const JsonSchemaValidate = ({ data, onChange, className = "", id, }) => {
    const { onChangeCallback, onEditField, onAddField, fields, editing } = (0, useActionsField_1.useActionsField)(data);
    const styles = (0, react_1.useMemo)(() => ({
        backgroundColor: "#DBAB2F",
        color: "white",
        fontWeight: "bold",
        width: 100,
    }), []);
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
                react_1.default.createElement(Tag_1.default, { styles: Object.assign({}, styles), name: "type", data: field, namekey: "type" })),
            react_1.default.createElement("div", { className: "col-sm-7 validate-editor-container-config-tags " }, field.type &&
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { values: field, onChangeCallback: (value) => onChangeCallback(value, key) })))))));
};
exports.default = JsonSchemaValidate;
