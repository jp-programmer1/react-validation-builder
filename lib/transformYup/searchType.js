"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchYupType = void 0;
const types = {
    "string": "yup.string().",
    "number": "yup.number().",
    "date": "yup.date().",
    "boolean": "yup.boolean()."
};
const searchYupType = (type) => {
    return types[type];
};
exports.searchYupType = searchYupType;
