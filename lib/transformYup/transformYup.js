"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup = __importStar(require("yup"));
// import { DataInterface } from '../interfaces/ValidationBuilderEditorInterface';
// import { getKeys } from './getKeys';
const searchType_1 = require("./searchType");
const transformSchemaToYup = (data) => {
    return yup.object().shape(Object.assign({}, transformSchema(data)));
};
const transformSchema = (data) => {
    let schema = {};
    if (data) {
        for (const key in data) {
            let nameField = key;
            let values = data[key];
            let fieldValidation = (0, searchType_1.searchYupType)(values.type);
            delete values.fieldKey;
            delete values.type;
            if (values.required) {
                fieldValidation = fieldValidation.required(values.required.message);
            }
            if (values.min) {
                fieldValidation = fieldValidation.min(values.min.limit, values.min.message);
            }
            if (values.max) {
                fieldValidation = fieldValidation.max(values.max.limit, values.max.message);
            }
            if (values.matches) {
                fieldValidation = fieldValidation.matches(values.matches.regex, values.matches.message);
            }
            if (values.email) {
                fieldValidation = fieldValidation.email(values.email.message);
            }
            if (values.url) {
                fieldValidation = fieldValidation.url(values.url.message);
            }
            if (values.uuid) {
                fieldValidation = fieldValidation.uuid(values.uuid.message);
            }
            if (values.trim) {
                fieldValidation = fieldValidation.trim(values.trim.message);
            }
            if (values.lowercase) {
                fieldValidation = fieldValidation.lowercase(values.lowercase.message);
            }
            if (values.uppercase) {
                fieldValidation = fieldValidation.uppercase(values.uppercase.message);
            }
            if (values.lessThan) {
                fieldValidation = fieldValidation.lessThan(values.lessThan.max, values.lessThan.message);
            }
            if (values.moreThan) {
                fieldValidation = fieldValidation.moreThan(values.moreThan.min, values.moreThan.message);
            }
            if (values.positive) {
                fieldValidation = fieldValidation.positive(values.positive.message);
            }
            if (values.negative) {
                fieldValidation = fieldValidation.negative(values.negative.message);
            }
            if (values.integer) {
                fieldValidation = fieldValidation.integer(values.integer.message);
            }
            schema = Object.assign(Object.assign({}, schema), { [nameField]: fieldValidation });
        }
    }
    return schema;
};
exports.default = transformSchemaToYup;
