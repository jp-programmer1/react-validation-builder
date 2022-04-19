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
const react_1 = __importStar(require("react"));
const Index_1 = require("./Index");
const Tag = ({ data, styles, onClickTag, namekey, onRemove, onEditTag }) => {
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
                react_1.default.createElement("div", { onClick: () => onClickTag && onClickTag(copyData) }, copyData[namekey]),
                copyData.fieldType === "number" &&
                    react_1.default.createElement(DropdownAction, { iconComponent: react_1.default.createElement(NumberComponent, { value: copyData.value[copyData.key] }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { type: "number", onChange: (value) => onChange(parseInt(value)), value: copyData.value[copyData.key] || "" })),
                copyData.fieldType === "string" &&
                    react_1.default.createElement(DropdownAction, { iconComponent: react_1.default.createElement(StringComponent, { value: copyData.value[copyData.key] }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { type: "text", onChange: onChange, value: copyData.value[copyData.key] || "" })),
                copyData.fieldType === "date" &&
                    react_1.default.createElement(DropdownAction, { iconComponent: react_1.default.createElement("i", { className: "fas fa-calendar" }), onFinished: onFinished },
                        react_1.default.createElement(Index_1.InputCustom, { type: "date", onChange: onChange, value: copyData.value[copyData.key] || "" })),
                react_1.default.createElement(DropdownAction, { iconComponent: react_1.default.createElement(Message, { data: copyData }), onFinished: onFinished },
                    react_1.default.createElement(Index_1.InputCustom, { type: "text", onChange: (value) => onChange(value, "message"), value: copyData.value.message || "" })),
                react_1.default.createElement("div", { onClick: () => onRemove(copyData[namekey]) },
                    react_1.default.createElement("i", { className: "fas fa-times" }))))));
};
const Message = ({ data }) => (react_1.default.createElement("div", { className: "validation-builder-item-message" },
    react_1.default.createElement("i", { className: "fas fa-comment-alt", style: { opacity: data.value.message && data.value.message !== "" ? 1 : 0.60 } })));
const NumberComponent = ({ value }) => (react_1.default.createElement("div", { className: "validation-builder-item-action" },
    react_1.default.createElement("span", null, value || "0")));
const StringComponent = ({ value }) => (react_1.default.createElement("i", { className: "fas fa-cog", style: { opacity: value && value !== "" ? 1 : 0.60 } }));
const DropdownAction = ({ children, iconComponent, onFinished }) => {
    const [edit, setEdit] = (0, react_1.useState)(false);
    return (react_1.default.createElement("div", { className: "validation-builder-container-dropdown" },
        react_1.default.createElement("div", { className: "dropdown" },
            react_1.default.createElement("div", { className: `dropdown-toogle ${edit ? 'show' : ''}`, onClick: () => {
                    if (edit)
                        onFinished();
                    setEdit(!edit);
                } }, iconComponent),
            react_1.default.createElement("div", { className: `validation-builder-container-dropdown-menu dropdown-menu ${edit ? 'show' : ''}` },
                react_1.default.createElement("div", { className: "validation-builder-field-action" }, children)))));
};
exports.default = Tag;
