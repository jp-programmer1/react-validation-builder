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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedConfigEdit = void 0;
const react_1 = __importStar(require("react"));
const Tag_1 = __importDefault(require("../components/Tag"));
const Index_1 = require("../components/Index");
const useActionsTag_1 = require("../hooks/useActionsTag");
const ExtendedConfigEdit = ({ values, onChangeCallback }) => {
    const { options, tags, onAddTag, onRemoveTag, onActivateEdit, onEditTag } = (0, useActionsTag_1.useActionsTag)(values, onChangeCallback);
    const styles = (0, react_1.useMemo)(() => ({ backgroundColor: "#3089DB", color: "white" }), []);
    return (react_1.default.createElement("div", { className: "validation-builder-container-tags-select" },
        react_1.default.createElement("div", { className: "validation-builder-data-tags" }, tags.length > 0 && tags.map((item, key) => (react_1.default.createElement(Tag_1.default, { key: key, styles: styles, name: item.tag, data: item, namekey: "tag" })))),
        react_1.default.createElement(Index_1.SelectCustom, { options: options, name: "selectTag", onChange: onAddTag })));
};
exports.ExtendedConfigEdit = ExtendedConfigEdit;
