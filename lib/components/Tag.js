"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Tag = ({ data, styles, name, onClickTag, namekey }) => {
    console.log(data);
    return (react_1.default.createElement("div", { id: name, className: "validation-builder-badge-container" },
        react_1.default.createElement(react_1.default.Fragment, null, data &&
            react_1.default.createElement("div", { className: "validation-builder-badge validation-builder-grid", style: Object.assign({}, styles) },
                react_1.default.createElement("div", { onClick: () => onClickTag && onClickTag(data) }, data[namekey])))));
};
exports.default = Tag;
