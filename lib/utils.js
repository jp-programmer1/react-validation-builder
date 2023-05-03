"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.optionsType = void 0;
exports.optionsType = [
    { label: "string", value: "string" },
    { label: "number", value: "number" },
    { label: "date", value: "date" },
    { label: "boolean", value: "boolean" },
];
exports.types = {
    "string": [
        { name: "required", fieldType: "boolean" },
        { name: "min", key: "limit", fieldType: "number" },
        { name: "max", key: "limit", fieldType: "number" },
        { name: "matches", key: "regex", fieldType: "string" },
        { name: "email", fieldType: "boolean", deps: ["url", "uuid"] },
        { name: "url", fieldType: "boolean", deps: ["uuid", "email"] },
        { name: "uuid", fieldType: "boolean", deps: ["url", "email"] },
        { name: "trim", fieldType: "boolean" },
        { name: "lowercase", fieldType: "boolean", deps: ["uppercase"] },
        { name: "uppercase", fieldType: "boolean", deps: ["lowercase"] },
        { name: "expression", key: "value", fieldType: "string" }
    ],
    "number": [
        { name: "required", fieldType: "boolean" },
        { name: "min", key: "limit", fieldType: "number" },
        { name: "max", key: "limit", fieldType: "number" },
        { name: "lessThan", key: "max", fieldType: "number" },
        { name: "moreThan", key: "min", fieldType: "number" },
        { name: "positive", fieldType: "boolean", deps: ["negative"] },
        { name: "negative", fieldType: "boolean", deps: ["positive"] },
        { name: "integer", fieldType: "boolean" },
        { name: "expression", key: "value", fieldType: "string" }
    ],
    "date": [
        { name: "required", fieldType: "boolean" },
        { name: "min", key: "limit", fieldType: "date" },
        { name: "max", key: "limit", fieldType: "date" },
        { name: "expression", key: "value", fieldType: "string" }
    ],
    "boolean": [
        { name: "required", fieldType: "boolean" },
        { name: "expression", key: "value", fieldType: "string" }
    ]
};
