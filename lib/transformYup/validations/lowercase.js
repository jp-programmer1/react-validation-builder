"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MESSAGE_DEFAULT = "the field accepts lowercase";
const regex = /^[a-z\s]+$/g;
const lowercase = ({ lowercase }, validation) => {
    if (lowercase.message && lowercase.message !== "") {
        return validation.matches(regex, lowercase.message);
    }
    else {
        return validation.matches(regex, MESSAGE_DEFAULT);
    }
};
exports.default = lowercase;
