"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedConfigEdit = void 0;
const react_1 = __importDefault(require("react"));
const Tag_1 = __importDefault(require("./Tag"));
const Index_1 = require("./Index");
const useActionsTag_1 = require("../hooks/useActionsTag");
const ExtendedConfigEdit = ({ values, onChangeCallback, keyComponent, classNameFieldTag, classNameFieldSelect, config }) => {
    const { options, tags, actions, onAddTag, onRemoveTag, onFinishEdit } = (0, useActionsTag_1.useActionsTag)(values, onChangeCallback);
    return (react_1.default.createElement("div", { className: `${classNameFieldTag === "form-control" ? 'd-flex flex-wrap' : "validation-builder-container-tags"}` },
        tags.length > 0 && tags.map((item, index) => (react_1.default.createElement("div", { key: `${item.tag}-${keyComponent}` },
            react_1.default.createElement(Tag_1.default, { styles: config.stylesTag, name: item.tag, data: actions.find(e => e.tag === item.tag), namekey: "tag", onRemove: onRemoveTag, onEditTag: onFinishEdit, classNameField: classNameFieldTag, config: config.config })))),
        react_1.default.createElement("div", { className: "validation-builder-conatainer-select-tag" }, options.length !== 1 && react_1.default.createElement(Index_1.SelectCustom, { options: options, name: "selectTag", onChange: onAddTag, className: classNameFieldSelect }))));
};
exports.ExtendedConfigEdit = ExtendedConfigEdit;
