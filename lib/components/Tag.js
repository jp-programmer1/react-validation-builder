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
const Tag = ({ values, styles, name, onActivateEdit, editing, onChange, options, data, onRemove }) => {
    const [tagValue, setTagValue] = (0, react_1.useState)(values);
    const [filterOptions, setFilterOptions] = (0, react_1.useState)(options);
    const [collapse, setCollapse] = (0, react_1.useState)({});
    console.log(data, options);
    (0, react_1.useEffect)(() => setTagValue(values || ""), [values]);
    const onEdit = (0, react_1.useCallback)(() => {
        if (onActivateEdit) {
            onActivateEdit && onActivateEdit(name);
        }
    }, [name, onActivateEdit]);
    const onSearchOptions = (0, react_1.useCallback)((value) => {
        value = value && value.toLowerCase();
        let filter = [];
        if (value) {
            let copyOptions = [...options];
            copyOptions.forEach((op) => {
                let filterValue = op.name;
                if (filterValue.includes(value))
                    filter.push(op);
            });
        }
        else
            filter = [...options];
        setFilterOptions(filter);
    }, [options]);
    const onSubmit = (0, react_1.useCallback)((value) => {
        let returnValue;
        if (value)
            returnValue = value;
        else {
            if (options.some(op => op.name === tagValue))
                returnValue = tagValue;
        }
        if (returnValue && returnValue !== "") {
            onChange(returnValue);
            setCollapse(true);
        }
        setTagValue("");
    }, [tagValue, options, onChange]);
    (0, react_1.useEffect)(() => {
        onSearchOptions(tagValue);
        if (tagValue)
            setCollapse(false);
    }, [tagValue, onSearchOptions]);
    return (react_1.default.createElement("div", { className: "validation-builder-badge-container" },
        editing &&
            react_1.default.createElement("div", { className: "validation-builder-contianer-input" },
                react_1.default.createElement(Index_1.InputCustom, { onChange: setTagValue, name: "tag", value: tagValue, onClick: () => setCollapse(current => !current), onEnter: (e) => { e.key === "Enter" ? onSubmit() : ""; } }),
                !collapse &&
                    react_1.default.createElement("div", { className: "validator-builder-options-tag" }, filterOptions.length > 0 && filterOptions.map((op, key) => (react_1.default.createElement("div", { className: "validator-builder-options", key: key, onClick: () => onSubmit(op.name) }, op.name))))),
        !editing &&
            react_1.default.createElement(react_1.default.Fragment, null,
                !data &&
                    react_1.default.createElement("div", { className: "validation-builder-badge", onClick: onEdit, style: Object.assign({}, styles) }, values),
                data && data.value &&
                    react_1.default.createElement("div", { className: "validation-builder-badge validation-builder-grid", style: Object.assign({}, styles) },
                        react_1.default.createElement("div", { onClick: onEdit }, values),
                        react_1.default.createElement("div", { className: "" }),
                        react_1.default.createElement("div", { className: "validation-builder-item-message" },
                            react_1.default.createElement("i", { className: "fas fa-comment-alt", style: { opacity: data.value.message && data.value.message !== "" ? 1 : 0.60 } })),
                        react_1.default.createElement("div", { onClick: () => onRemove && onRemove(values) },
                            react_1.default.createElement("i", { className: "fas fa-times" }))))));
};
exports.default = Tag;
