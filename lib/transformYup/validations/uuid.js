"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = ({ uuid }, validation) => {
    if (uuid.message && uuid.message !== "") {
        return validation.uuid(uuid.message);
    }
    else {
        return validation.uuid();
    }
};
exports.default = uuid;
