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
const utils_1 = require("./utils");
const transformSchemaToYup = (data) => {
    const transformSchema = () => {
        if (data) {
            let schema = {};
            for (const key in data) {
                let nameField = key;
                let values = data[key];
                let type = values.type;
                let actions = utils_1.types[type];
                delete values.fieldKey;
                delete values.type;
                let keysValidation = Object.keys(values);
                console.log(keysValidation);
                // schema = {
                //   ...schema, 
                //   [nameField]: 
                // }
            }
        }
        return {};
    };
    return yup.object().shape(Object.assign({}, transformSchema()));
};
exports.default = transformSchemaToYup;
