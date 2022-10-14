"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integer = ({ integer }, validation) => {
    if (integer.message && integer.message !== "") {
        return validation.integer(integer.message);
    }
    else {
        return validation.integer();
    }
};
exports.default = integer;
