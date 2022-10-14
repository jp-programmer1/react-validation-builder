"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidations = void 0;
const index_1 = __importDefault(require("./validations/index"));
const getValidations = (fieldValidation, values, resolveExpressionCallback) => {
    if (Object.keys(values).length > 0) {
        for (const key in values) {
            let type = index_1.default[key];
            if (type)
                fieldValidation = type(values, fieldValidation, resolveExpressionCallback);
        }
    }
    return fieldValidation;
};
exports.getValidations = getValidations;
