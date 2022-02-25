"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedConfigEdit = void 0;
const react_1 = __importDefault(require("react"));
const Index_1 = require("./components/Index");
const utils_1 = require("./utils");
const ExtendedConfigEdit = ({ values, onChangeCallback }) => {
    return (react_1.default.createElement("div", null,
        values.type === 'string' &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "row align-items-center mb-2" },
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "format" }, "Format")),
                    react_1.default.createElement("div", { className: "col-sm-10" },
                        react_1.default.createElement(Index_1.SelectCustom, { name: "format", value: values.format || "", onChange: (value) => onChangeCallback(value, "format"), options: utils_1.optionsFormat }))),
                react_1.default.createElement("div", { className: "row align-items-center mb-2" },
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "minLength" }, "Min Length")),
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.InputCustom, { type: "number", name: "minLength", value: values.minLength, onChange: (value) => onChangeCallback(parseInt(value), "minLength") })),
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "maxLength" }, "Max Lenght")),
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.InputCustom, { type: "number", name: "maxLength", value: values.maxLength, onChange: (value) => onChangeCallback(parseInt(value), "maxLength") }))),
                react_1.default.createElement("div", { className: "row align-items-center mb-2" },
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "pattern" }, "Pattern")),
                    react_1.default.createElement("div", { className: "col-sm-10" },
                        react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "regular expression", name: "pattern", value: values.pattern, onChange: (value) => onChangeCallback(value, "pattern") })))),
        (values.type === "number" || values.type === "integer") &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "row align-items-center mb-2" },
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "minimum" }, "Min")),
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.InputCustom, { type: "number", name: "minimum", value: values.minimum, onChange: (value) => onChangeCallback(parseInt(value), "minimum") })),
                    react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                        react_1.default.createElement("label", { htmlFor: "maximum" }, "Max")),
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.InputCustom, { type: "number", name: "maximum", value: values.maximum, onChange: (value) => onChangeCallback(parseInt(value), "maximum") }))),
                react_1.default.createElement("div", { className: "row align-items-center justify-content-center mb-2" },
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.SwitchCustom, { label: "Exclusive Minimum", name: "exclusiveMinimum", value: values.exclusiveMinimum, onChange: (value) => onChangeCallback(value, "exclusiveMinimum") })),
                    react_1.default.createElement("div", { className: "col-sm-4" },
                        react_1.default.createElement(Index_1.SwitchCustom, { label: "Exclusive Maximum", name: "exclusiveMaximum", value: values.exclusiveMaximum, onChange: (value) => onChangeCallback(value, "exclusiveMaximum") })))),
        values.type !== "boolean" &&
            react_1.default.createElement("div", { className: "row align-items-center mb-2" },
                react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                    react_1.default.createElement("label", { htmlFor: "enum" }, "Enum")),
                react_1.default.createElement("div", { className: "col-sm-10" },
                    react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "example person, cat, dog", name: "enum", value: values.enum, onChange: (value) => onChangeCallback(value, "enum") }))),
        react_1.default.createElement("div", { className: "row align-items-center mb-2" },
            react_1.default.createElement("div", { className: "col-sm-2 t-l" },
                react_1.default.createElement("label", { htmlFor: "messageError" }, "Message Error")),
            react_1.default.createElement("div", { className: "col-sm-10" },
                react_1.default.createElement(Index_1.InputCustom, { type: "text", placeholder: "message to be seen when an error is encountered", name: "messageError", value: values.messageError, onChange: (value) => onChangeCallback(value, "messageError") })))));
};
exports.ExtendedConfigEdit = ExtendedConfigEdit;
