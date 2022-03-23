"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Index_1 = require("../components/Index");
const FieldMessage = ({ onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { name: "message", onChange: onChange, value: value });
const FieldNumber = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { type: "number", name: name, onChange: onChange, value: value });
const FieldString = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { name: name, onChange: onChange, value: value });
const FieldDate = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { type: "date", name: name, onChange: onChange, value: value });
const getField = (type) => {
};
