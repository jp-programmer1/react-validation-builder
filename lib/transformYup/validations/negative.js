"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negative = ({ negative }, validation) => {
    if (negative.message && negative.message !== "") {
        return validation.negative(negative.message);
    }
    else {
        return validation.negative();
    }
};
exports.default = negative;
