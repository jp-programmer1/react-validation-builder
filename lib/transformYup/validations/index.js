"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const required_1 = __importDefault(require("./required"));
const min_1 = __importDefault(require("./min"));
const max_1 = __importDefault(require("./max"));
const matches_1 = __importDefault(require("./matches"));
const email_1 = __importDefault(require("./email"));
const url_1 = __importDefault(require("./url"));
const uuid_1 = __importDefault(require("./uuid"));
const trim_1 = __importDefault(require("./trim"));
const lowercase_1 = __importDefault(require("./lowercase"));
const uppercase_1 = __importDefault(require("./uppercase"));
const lessThan_1 = __importDefault(require("./lessThan"));
const moreThan_1 = __importDefault(require("./moreThan"));
const positive_1 = __importDefault(require("./positive"));
const negative_1 = __importDefault(require("./negative"));
const integer_1 = __importDefault(require("./integer"));
const expression_1 = __importDefault(require("./expression"));
const validations = {
    "required": required_1.default,
    "min": min_1.default,
    "max": max_1.default,
    "matches": matches_1.default,
    "email": email_1.default,
    "url": url_1.default,
    "uuid": uuid_1.default,
    "trim": trim_1.default,
    "lowercase": lowercase_1.default,
    "uppercase": uppercase_1.default,
    "lessThan": lessThan_1.default,
    "moreThan": moreThan_1.default,
    "positive": positive_1.default,
    "negative": negative_1.default,
    "integer": integer_1.default,
    "expression": expression_1.default
};
exports.default = validations;
