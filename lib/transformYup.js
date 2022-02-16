"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformYup = void 0;
const json_schema_yup_transformer_1 = __importDefault(require("json-schema-yup-transformer"));
const transformYup = (data) => {
    if (data) {
        const yupschema = (0, json_schema_yup_transformer_1.default)(data.jsonschema, data.errors);
        return yupschema;
    }
    return undefined;
};
exports.transformYup = transformYup;
