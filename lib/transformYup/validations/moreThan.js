"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moreThan = ({ moreThan }, validation) => {
    if (moreThan.message && moreThan.message !== "") {
        return validation.moreThan(moreThan.min, moreThan.message);
    }
    else {
        return validation.moreThan(moreThan.min);
    }
};
exports.default = moreThan;
