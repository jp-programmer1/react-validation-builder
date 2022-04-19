"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchCustom = exports.SelectCustom = exports.InputCustom = void 0;
const react_1 = __importDefault(require("react"));
const InputCustom = ({ name, value, onChange, type = "text", placeholder, min = 0, max, required = false, disabled = false, onEnter, onClick, onBlur }) => (react_1.default.createElement("input", { type: type, placeholder: placeholder, required: required, min: min, max: max, disabled: disabled, onChange: (e => onChange(e.target.value)), value: value, onBlur: onBlur, name: name, className: "form-control", onKeyUp: onEnter, onClick: onClick, autoComplete: "off" }));
exports.InputCustom = InputCustom;
const SelectCustom = ({ name, value = "", onChange, options, required = false, disabled = false }) => (react_1.default.createElement("select", { name: name, required: required, disabled: disabled, value: value, onChange: (e) => onChange(e.target.value), className: "form-select" }, options && options.map((op, key) => react_1.default.createElement("option", { value: op.value, key: key }, op.label))));
exports.SelectCustom = SelectCustom;
const SwitchCustom = ({ name, value, label, onChange, disabled = false }) => (react_1.default.createElement("div", { className: "form-check form-switch" },
    react_1.default.createElement("input", { className: "form-check-input", disabled: disabled, name: name, checked: value, type: "checkbox", role: "switch", id: name, onChange: (e) => onChange(e.target.checked) }),
    react_1.default.createElement("label", { className: "form-check-label", htmlFor: name }, label)));
exports.SwitchCustom = SwitchCustom;
