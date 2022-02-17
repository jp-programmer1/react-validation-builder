"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const Input = ({ name, value, onChange, type = "text", placeholder }) => {
    return (react_1.default.createElement("input", { type: type, placeholder: placeholder, onChange: (e => onChange(e.target.value)), value: value, name: name, className: "form-control" }));
};
exports.Input = Input;
