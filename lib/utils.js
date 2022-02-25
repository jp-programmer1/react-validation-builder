"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getList = exports.searchKeyData = exports.parseToProperties = exports.optionsType = void 0;
exports.optionsType = [{ name: "string" }, { name: "number" }, { name: "date" }, { name: "boolean" }];
const parseToProperties = (values) => {
    let schema = { properties: {} };
    let errors = {};
    let required;
    let key;
    if (values.name) {
        key = values.name;
        if (values.required) {
            required = values.name;
            delete values.required;
        }
        delete values.name;
        if (values.messageError) {
            let message = values.messageError;
            delete values.messageError;
            errors = { [key]: message };
        }
        schema.properties = { [key]: Object.assign({}, values) };
        // @ts-ignore
        if (schema.properties[key] && schema.properties[key].enum) {
            // @ts-ignore
            schema.properties[key].enum = parseToArrayEnum(schema.properties[key].enum);
        }
    }
    return { properties: schema.properties, required, errors, key };
};
exports.parseToProperties = parseToProperties;
const searchKeyData = (data, key) => {
    let parseData = {};
    let schema = data.jsonSchema;
    let errors = data.errors;
    let properties = schema.properties;
    let required = schema.required || [];
    if (properties[key]) {
        if (properties[key]) {
            parseData = Object.assign(Object.assign({}, properties[key]), { name: key, enum: parseToObjectEnum(properties[key].enum), required: required.some((r) => r === key), messageError: errors[key] ? errors[key] : "" });
        }
    }
    return parseData;
};
exports.searchKeyData = searchKeyData;
const getList = (values, errors) => {
    let list = [];
    let properties = values.properties;
    let required = values.required || [];
    for (const key in properties) {
        list.push(Object.assign(Object.assign({}, properties[key]), { name: key, required: required.some((r) => r === key), messageError: errors[key] }));
    }
    return list;
};
exports.getList = getList;
const parseToArrayEnum = (value) => {
    let enumList = [];
    if (value) {
        value.split(',').map((v) => {
            v.trim();
            enumList.push(v);
        });
    }
    return enumList;
};
const parseToObjectEnum = (value = []) => {
    let data = "";
    if (value.length > 0) {
        let cont = value.length - 1;
        value.forEach((v, index) => {
            data += `${v}${index === cont ? '' : ','}`;
        });
    }
    return data;
};
