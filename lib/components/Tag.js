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
const react_1 = __importStar(require("react"));
const IconCalendar_1 = __importDefault(require("../assets/IconCalendar"));
const IconClose_1 = __importDefault(require("../assets/IconClose"));
const IconKey_1 = __importDefault(require("../assets/IconKey"));
const IconMessage_1 = __importDefault(require("../assets/IconMessage"));
const DropdownAction_1 = require("./DropdownAction");
const Index_1 = require("./Index");
const Tag = ({ data, styles, onClickTag, namekey, onRemove, onEditTag, classNameField, config = {} }) => {
    const [copyData, setCopyData] = (0, react_1.useState)(Object.assign({}, data));
    (0, react_1.useEffect)(() => setCopyData(Object.assign({}, data)), [data]);
    const onChange = (0, react_1.useCallback)((value, key) => {
        let values = Object.assign({}, copyData);
        values.value[key || values.key] = value;
        setCopyData(values);
    }, [copyData]);
    const onFinished = (0, react_1.useCallback)(() => {
        onEditTag(copyData);
    }, [onEditTag, copyData]);
    return (react_1.default.createElement("div", { className: "validation-builder-badge-container" },
        react_1.default.createElement(react_1.default.Fragment, null, copyData && copyData.value &&
            react_1.default.createElement("div", { className: "validation-builder-badge validation-builder-grid", style: Object.assign({}, styles) },
                react_1.default.createElement("div", { onClick: () => onClickTag && onClickTag(copyData), className: "validation-builder-label" }, copyData[namekey]),
                copyData.fieldType === "number" &&
                    react_1.default.createElement(DropdownAction_1.DropdownAction, { iconComponent: react_1.default.createElement(NumberComponent, { config: config, value: copyData.value[copyData.key] }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { className: classNameField, type: "number", onChange: (value) => onChange(parseInt(value)), value: copyData.value[copyData.key] || "" })),
                copyData.fieldType === "string" &&
                    react_1.default.createElement(DropdownAction_1.DropdownAction, { iconComponent: react_1.default.createElement(StringComponent, { config: config, value: copyData.value[copyData.key] }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { className: classNameField, type: "text", onChange: onChange, value: copyData.value[copyData.key] || "" })),
                copyData.fieldType === "date" &&
                    react_1.default.createElement(DropdownAction_1.DropdownAction, { iconComponent: react_1.default.createElement(DateComponent, { config: config, value: copyData.value[copyData.key] }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { className: classNameField, type: "date", onChange: onChange, value: copyData.value[copyData.key] || "" })),
                copyData.fieldType !== "number" && copyData.fieldType !== "string" && copyData.fieldType !== "date" && react_1.default.createElement("div", null),
                react_1.default.createElement(DropdownAction_1.DropdownAction, { iconComponent: react_1.default.createElement(Message, { config: config, data: copyData }), onFinished: onFinished },
                    react_1.default.createElement(Index_1.InputCustom, { className: classNameField, type: "text", onChange: (value) => onChange(value, "message"), value: copyData.value.message || "" })),
                react_1.default.createElement("div", { onClick: () => onRemove(copyData[namekey]), style: Object.assign({}, config.removeTag && config.removeTag.styles), className: "validation-builder-container-remove-tag" }, (config === null || config === void 0 ? void 0 : config.removeTag) ?
                    react_1.default.createElement(react_1.default.Fragment, null,
                        config.removeTag.icon && react_1.default.createElement("i", { className: config.removeTag.icon }),
                        config.removeTag.text && config.removeTag.text)
                    : react_1.default.createElement(IconClose_1.default, { color: "gray" }))))));
};
const Message = ({ data, config }) => (react_1.default.createElement("div", { className: "validation-builder-item-message", style: Object.assign({ opacity: data.value && data.value.message && data.value.message !== "" ? 1 : 0.40 }, config && config.message && config.message.styles) }, config && config.message ?
    react_1.default.createElement(react_1.default.Fragment, null,
        config.message.icon && react_1.default.createElement("i", { className: config.message.icon }),
        config.message.text && config.message.text)
    : react_1.default.createElement("div", { className: 'validation-builder-item-icon' },
        react_1.default.createElement(IconMessage_1.default, null))));
const NumberComponent = ({ value, config }) => (react_1.default.createElement("div", { className: "validation-builder-item-action", style: Object.assign(Object.assign({}, config && config.valueNumberTag && config.valueNumberTag.styles), { opacity: value && value !== "" ? 1 : 0.40 }) }, config && config.valueNumberTag ?
    react_1.default.createElement(react_1.default.Fragment, null,
        config.valueNumberTag.icon && react_1.default.createElement("i", { className: config.valueNumberTag.icon }),
        config.valueNumberTag.text && config.valueNumberTag.text)
    : react_1.default.createElement("span", null, value || "0")));
const StringComponent = ({ value, config }) => (react_1.default.createElement("div", { className: 'validation-builder-item-tag-string', style: Object.assign({ opacity: value && value !== "" ? 1 : 0.40 }, config && config.valueStringTag && config.valueStringTag.styles) }, config && config.valueStringTag ?
    react_1.default.createElement(react_1.default.Fragment, null,
        config.valueStringTag.icon && react_1.default.createElement("i", { className: config.valueStringTag.icon }),
        config.valueStringTag.text && config.valueStringTag.text)
    : react_1.default.createElement("div", { className: 'validation-builder-item-icon' },
        react_1.default.createElement(IconKey_1.default, null))));
const DateComponent = ({ value, config }) => (react_1.default.createElement("div", { className: 'validation-builder-item-tag-string', style: Object.assign({ opacity: value && value !== "" ? 1 : 0.40 }, config && config.valueDateTag && config.valueDateTag.styles) }, config && config.valueDateTag ?
    react_1.default.createElement(react_1.default.Fragment, null,
        config.valueDateTag.icon && react_1.default.createElement("i", { className: config.valueDateTag.icon }),
        config.valueDateTag.text && config.valueDateTag.text)
    : react_1.default.createElement("div", { className: 'validation-builder-item-icon' },
        react_1.default.createElement(IconCalendar_1.default, null))));
exports.default = Tag;
