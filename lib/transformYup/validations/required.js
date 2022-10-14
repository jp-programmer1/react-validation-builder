"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const required = ({ required }, validation) => {
    if (required.message && required.message !== "") {
        return validation.required(required.message);
    }
    else {
        return validation.required();
    }
};
exports.default = required;
