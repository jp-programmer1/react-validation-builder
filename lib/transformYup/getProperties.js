"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperties = void 0;
const getProperties = (data) => {
    let keys = Object.keys(data);
    let props = "";
    let find = keys.find(k => k !== "message");
    if (data.message) {
        if (find)
            props += `${data[find]},`;
        props += `'${data.message}'`;
    }
    else
        props += `${data[find], ''}`;
    return props;
};
exports.getProperties = getProperties;
