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
const ExtendedConfigEdit_1 = require("./ExtendedConfigEdit");
const Index_1 = require("../components/Index");
require("../../lib/styles/styles.css");
const useActionsField_1 = require("../hooks/useActionsField");
const TagType_1 = require("../components/TagType");
/**
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentRemove integrate remove item component
 * @returns {JSX.Element}
 * @constructor
 */
const ValidationBuilderEditor = ({ data, onChange, className = "" }) => {
    const { onChangeCallback, onAddField, fields, onRemoveField, fieldKeys, onChangeFieldName } = (0, useActionsField_1.useActionsField)(data, onChange);
    const styles = (0, react_1.useMemo)(() => ({
        backgroundColor: "#35AACB",
        color: "white",
        fontWeight: "bold",
        width: 100,
    }), []);
    return (react_1.default.createElement("div", { className: `react-jsonschema-validate-editor-container ${className}` },
        react_1.default.createElement("div", { className: "validate-editor-container-button-add" },
            react_1.default.createElement("button", { type: "button", className: "btn btn-primary btn-sm", onClick: onAddField }, "Add")),
        fields && fields.map((field, key) => (react_1.default.createElement("div", { className: "row align-items-center mb-3", key: key },
            react_1.default.createElement("div", { className: "col-sm-3 d-flex align-items-center", style: { marginTop: 5 } },
                react_1.default.createElement("div", { className: "validate-editor-container-remove-field" },
                    react_1.default.createElement("button", { type: "button", className: "btn btn-danger btn-sm", onClick: onRemoveField },
                        react_1.default.createElement("i", { className: "fas fa-times" }))),
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "Name Field", value: fieldKeys[key], onBlur: () => {
                        field.fieldKey = fieldKeys[key];
                        onChangeCallback(field, key);
                    }, onChange: (value) => {
                        onChangeFieldName(value, key);
                    } })),
            react_1.default.createElement("div", { className: "col-sm-2 validate-editor-container-select-type" },
                react_1.default.createElement(TagType_1.TagType, { styles: Object.assign({}, styles), data: field, onChange: (value) => onChangeCallback(value, key) })),
            react_1.default.createElement("div", { className: "col-sm-7 validate-editor-container-config-tags " }, field.type &&
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { keyComponent: `${key}-${field.fieldKey}`, values: field, onChangeCallback: (value) => onChangeCallback(value, key) })))))));
};
exports.default = ValidationBuilderEditor;
