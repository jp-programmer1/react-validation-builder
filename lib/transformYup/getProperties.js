"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperties = void 0;
const getProperties = (data) => {
    //@ts-ignore
    let values = Object.values(data);
    let props = "";
    if (values[1]) {
        props += `${values[1]}${values[0] ? `,'${values[0]}'` : ''}`;
    }
    else {
        props += `'${values[0]}'`;
    }
    return props;
};
exports.getProperties = getProperties;
