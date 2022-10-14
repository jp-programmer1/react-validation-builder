"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = ({ url }, validation) => {
    if (url.message && url.message !== "") {
        return validation.url(url.message);
    }
    else {
        return validation.url();
    }
};
exports.default = url;
