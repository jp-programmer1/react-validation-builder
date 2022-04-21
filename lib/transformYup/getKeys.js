"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeys = void 0;
const getProperties_1 = require("./getProperties");
const getKeys = (keys, values) => {
    let prop = "";
    let cont = keys.length - 1;
    keys.forEach((k, index) => {
        let properties = `(${(0, getProperties_1.getProperties)(values[k])})`;
        prop += `${k}${properties}${(index === cont) ? '' : '.'}`;
    });
    return prop;
};
exports.getKeys = getKeys;
