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
const getValidations_1 = require("./getValidations");
const searchType_1 = require("./searchType");
const transformSchemaToYup = (data, resolveExpressionCallback) => {
    return yup.object().shape(Object.assign({}, transformSchema(data, resolveExpressionCallback)));
};
const transformSchema = (data, resolveExpressionCallback) => {
    let schema = {};
    if (data) {
        for (const key in data) {
            let nameField = key;
            let values = data[key];
            let type = (0, searchType_1.searchYupType)(values.type);
            let validations = (0, getValidations_1.getValidations)(type, values, resolveExpressionCallback);
            schema = Object.assign(Object.assign({}, schema), { [nameField]: validations });
        }
    }
    return schema;
};
exports.default = transformSchemaToYup;
