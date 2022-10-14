"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const min = ({ min }, validation) => {
    if (min.message && min.message !== "") {
        return validation.min(min.limit, min.message);
    }
    else {
        return validation.min(min.limit);
    }
};
exports.default = min;
