"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationBuilderEditor = void 0;
const react_1 = __importDefault(require("react"));
const ExtendedConfigEdit_1 = require("../components/ExtendedConfigEdit");
const Index_1 = require("../components/Index");
require("../../lib/styles/styles.css");
const useActionsField_1 = require("../hooks/useActionsField");
const TagType_1 = require("../components/TagType");
const IconAdd_1 = __importDefault(require("../assets/IconAdd"));
const IconClose_1 = __importDefault(require("../assets/IconClose"));
/**
 * @param onChange function that returns a object and list (schema) => void;
 * @param className set container className
 * @param config object ->
  addField?: { icon: string, text: string, styles: object }
  removeField?: { icon: string, text: string, styles: object }
  message?: { icon: string, text: string, styles: object }
  removeTag?: { icon: string, text: string, styles: object }
  valueStringTag?: { icon: string, text: string, styles: object }
  valueNumberTag?: { icon: string, text: string, styles: object }
  valueDateTag?: { icon: string, text: string, styles: object }
 * @param pillStyles object ->
    pillType: object
    pillTag: object
 * @returns {JSX.Element}
 * @constructor
 */
const ValidationBuilderEditor = ({ data, onChange, className = "", config, pillStyles }) => {
    var _a;
    const { onChangeCallback, onAddField, fields, onRemoveField, fieldKeys, onChangeFieldName, onChangeType } = (0, useActionsField_1.useActionsField)(data, onChange);
    return (react_1.default.createElement("div", { className: `validate-builder-container ${className}` },
        react_1.default.createElement("div", { className: "validate-editor-container-button-add" },
            react_1.default.createElement("button", { type: "button", style: (_a = config === null || config === void 0 ? void 0 : config.addField) === null || _a === void 0 ? void 0 : _a.styles, className: "validate-editor-button validate-editor-button-add", onClick: onAddField }, (config === null || config === void 0 ? void 0 : config.addField) ?
                react_1.default.createElement(react_1.default.Fragment, null,
                    config.addField.icon && react_1.default.createElement("i", { className: config === null || config === void 0 ? void 0 : config.addField.icon }),
                    config.addField.text && config.addField.text)
                : react_1.default.createElement("div", null,
                    react_1.default.createElement(IconAdd_1.default, { color: "white" }),
                    " Add"))),
        fields && fields.map((field, key) => (react_1.default.createElement("div", { className: "validate-builder-TC-container-fields", key: key },
            react_1.default.createElement("div", { className: "validate-builder-TC-fields-remove", style: { marginTop: 5, alignItems: "baseline" } },
                react_1.default.createElement("div", { className: "validate-editor-container-remove-field" },
                    react_1.default.createElement("button", { type: "button", className: "validate-editor-button validate-editor-button-remove", style: { padding: (config === null || config === void 0 ? void 0 : config.removeField) ? '0.4rem' : '0rem' }, onClick: () => onRemoveField(key) }, (config === null || config === void 0 ? void 0 : config.removeField) ?
                        react_1.default.createElement(react_1.default.Fragment, null,
                            config.removeField.icon && react_1.default.createElement("i", { className: config === null || config === void 0 ? void 0 : config.removeField.icon }),
                            config.removeField.text && config.removeField.text)
                        : react_1.default.createElement(IconClose_1.default, { color: "white" }))),
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "Name Field", value: fieldKeys[key], className: "validate-editor-field-input", activateFocus: (fieldKeys.length - 1) === key, onBlur: () => {
                        field.fieldKey = fieldKeys[key];
                        onChangeCallback(field, key);
                    }, onChange: (value) => {
                        onChangeFieldName(value, key);
                    } })),
            react_1.default.createElement("div", { className: "validate-editor-container-select-type" },
                react_1.default.createElement(TagType_1.TagType, { classNameField: "validate-editor-field-input", styles: Object.assign({}, pillStyles === null || pillStyles === void 0 ? void 0 : pillStyles.pillType), data: field, onChange: (value) => onChangeType(value, key) })),
            react_1.default.createElement("div", { className: "validate-editor-container-config-tags " }, field.type &&
                react_1.default.createElement(ExtendedConfigEdit_1.ExtendedConfigEdit, { keyComponent: `${key}-${field.fieldKey}`, values: field, onChangeCallback: (value) => onChangeCallback(value, key), classNameFieldTag: "validate-editor-field-input", classNameFieldSelect: "validate-editor-field-input", config: { config: config, stylesTag: (pillStyles === null || pillStyles === void 0 ? void 0 : pillStyles.pillTag) || {} } })))))));
};
exports.ValidationBuilderEditor = ValidationBuilderEditor;
