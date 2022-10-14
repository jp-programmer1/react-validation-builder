"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matches = ({ matches }, validation) => {
    if (matches.message && matches.message !== "") {
        return validation.matches(matches.regex, matches.message);
    }
    else {
        return validation.matches(matches.regex);
    }
};
exports.default = matches;
