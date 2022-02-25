"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
const react_1 = __importDefault(require("react"));
const Index_1 = require("../components/Index");
const FieldMessage = ({ onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { name: "message", onChange: onChange, value: value });
const FieldNumber = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { type: "number", name: name, onChange: onChange, value: value });
const FieldString = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { name: name, onChange: onChange, value: value });
const FieldDate = ({ name, onChange, value }) => react_1.default.createElement(Index_1.InputCustom, { type: "date", name: name, onChange: onChange, value: value });
const getField = (type) => {
};
exports.types = {
    "string": [
        { name: "required", key: "required", fieldType: "boolean" },
        { name: "min", key: "limit", fieldType: "number" },
        { name: "max", key: "limit", fieldType: "number" },
        { name: "matches", key: "regex", fieldType: "string" },
        { name: "email", key: "email", fieldType: "string" },
        { name: "url", key: "url", fieldType: "string" },
        { name: "uuid", key: "uuid", fieldType: "string" },
        { name: "trim", key: "trim", fieldType: "string" },
        { name: "lowercase", key: "lowercase", fieldType: "string" },
        { name: "uppercase", key: "uppercase", fieldType: "string" }
    ],
    "number": [
        { name: "required", key: "required", fieldType: "boolean" },
        { name: "min", key: "limit", fieldType: "number" },
        { name: "max", key: "limit", fieldType: "number" },
        { name: "lessThan", key: "max", fieldType: "number" },
        { name: "moreThan", key: "min", fieldType: "number" },
        { name: "positive", key: "positive", fieldType: "string" },
        { name: "negative", key: "negative", fieldType: "string" },
        { name: "integer", key: "integer", fieldType: "string" },
    ],
    date: [
        { name: "required", key: "", fieldType: "boolean" },
        { name: "min", key: "", fieldType: "date" },
        { name: "max", key: "", fieldType: "date" }
    ]
};
