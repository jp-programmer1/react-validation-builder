"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max = ({ max }, validation) => {
    if (max.message && max.message !== "") {
        return validation.max(max.limit, max.message);
    }
    else {
        return validation.max(max.limit);
    }
};
exports.default = max;
