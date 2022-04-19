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
exports.TagType = void 0;
const react_1 = __importStar(require("react"));
const utils_1 = require("../utils");
const Index_1 = require("./Index");
const TagType = ({ styles, data, onChange }) => {
    const [activeEdit, setActiveEdit] = (0, react_1.useState)(false);
    const handleChange = (0, react_1.useCallback)((value) => {
        let copyData = Object.assign({}, data);
        copyData.type = value;
        onChange(copyData);
    }, [onChange, data]);
    return (react_1.default.createElement("div", { className: "validation-builder-tag-type" },
        !activeEdit &&
            react_1.default.createElement("div", { style: styles, className: "validation-builder-badge", onClick: () => setActiveEdit(true) }, data.type),
        activeEdit &&
            react_1.default.createElement("div", { onBlur: () => setActiveEdit(false) },
                react_1.default.createElement(Index_1.SelectCustom, { name: "type", onChange: handleChange, options: utils_1.optionsType, value: data.type }))));
};
exports.TagType = TagType;
