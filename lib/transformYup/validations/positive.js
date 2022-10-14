"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const positive = ({ positive }, validation) => {
    if (positive.message && positive.message !== "") {
        return validation.positive(positive.message);
    }
    else {
        return validation.positive();
    }
};
exports.default = positive;
