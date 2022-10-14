"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lessThan = ({ lessThan }, validation) => {
    if (lessThan.message && lessThan.message !== "") {
        return validation.lessThan(lessThan.max, lessThan.message);
    }
    else {
        return validation.lessThan(lessThan.max);
    }
};
exports.default = lessThan;
