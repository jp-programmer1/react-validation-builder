"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email = ({ email }, validation) => {
    if (email.message && email.message !== "") {
        return validation.email(email.message);
    }
    else {
        return validation.email();
    }
};
exports.default = email;
