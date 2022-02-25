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
exports.SelectTagTrait = exports.SelectTag = void 0;
const react_1 = __importStar(require("react"));
const Index_1 = require("./Index");
const SelectTag = ({ options = [], value = "", onChange }) => {
    const [tagValue, setTagValue] = (0, react_1.useState)(value);
    const [filterOptions, setFilterOptions] = (0, react_1.useState)(options);
    const [collapse, setCollapse] = (0, react_1.useState)(true);
    const onSearchOptions = (0, react_1.useCallback)((value) => {
        value = value.toLowerCase();
        let filter = [];
        if (value !== "") {
            let copyOptions = [...options];
            copyOptions.forEach((op) => {
                let filterValue = op.toLowerCase();
                if (filterValue.includes(value))
                    filter.push(op);
            });
        }
        else
            filter = [...options];
        setFilterOptions(filter);
    }, [options]);
    const onSubmit = (0, react_1.useCallback)(() => {
        if (options.some(op => op === tagValue)) {
            onChange(tagValue);
            setCollapse(true);
        }
    }, [tagValue, options, onChange]);
    (0, react_1.useEffect)(() => {
        onSearchOptions(tagValue);
        setCollapse(false);
    }, [tagValue, onSearchOptions, options]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Index_1.InputCustom, { onChange: setTagValue, name: "tag", value: tagValue, onEnter: (e) => { e.key === "Enter" ? onSubmit() : ""; } }),
        !collapse &&
            react_1.default.createElement("div", { className: "validator-builder-options-tag" }, filterOptions.length > 0 && filterOptions.map((op, key) => (react_1.default.createElement("div", { className: "validator-builder-options", key: key, onClick: () => setTagValue(op) }, op))))));
};
exports.SelectTag = SelectTag;
const SelectTagTrait = (onDisabledEdit, value, onChange, { options }) => (react_1.default.createElement(exports.SelectTag, { options: options, value: value, onChange: (value) => {
        onChange(value);
        onDisabledEdit();
    } }));
exports.SelectTagTrait = SelectTagTrait;
