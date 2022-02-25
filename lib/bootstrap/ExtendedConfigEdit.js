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
const TypesConfig_1 = require("./TypesConfig");
const ExtendedConfigEdit = ({ values, onChangeCallback }) => {
    const [options, setOptions] = (0, react_1.useState)([]);
    const [tags, setTags] = (0, react_1.useState)([]);
    const [valueTag, setValueTag] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        if (values) {
            let data = [];
            for (const key in values) {
                if (key !== "type" && key !== "name" && key !== "fieldKey") {
                    let tag = key;
                    data.push({ tag, value: values[key], editing: false });
                }
            }
            setTags(data);
            setOptions(TypesConfig_1.types[values.type]);
        }
    }, [values]);
    const onAddTag = (0, react_1.useCallback)((value) => {
        setValueTag("");
        let key = options.find(op => op.name === value).key;
        values[value] = { [key]: "", message: "" };
        onChangeCallback(values);
    }, [values, options, onChangeCallback]);
    const onEdit = (0, react_1.useCallback)((name, index) => {
        let data = [...tags];
        data.forEach(((d, key) => {
            if (index === key && name === d.tag)
                d.editing = !d.editing;
            else
                d.editing = false;
        }));
        setTags(data);
    }, [tags]);
    const onChange = (0, react_1.useCallback)((tag, value, key) => {
        if (tag !== value) {
            delete values[tag];
            let key = options.find(op => op.name === value).key;
            values[value] = { [key]: "", message: "" };
            onChangeCallback(values);
        }
        onEdit(tag, key);
    }, [onChangeCallback, values, onEdit, options]);
    const styles = (0, react_1.useMemo)(() => ({ backgroundColor: "#3089DB", color: "white" }), []);
    const onRemove = (0, react_1.useCallback)((name) => {
        if (window.confirm("Are you sure you want to delete it?")) {
            delete values[name];
            onChangeCallback(values);
        }
    }, [values, onChangeCallback]);
    return (react_1.default.createElement("div", { className: "validation-builder-data-tags" },
        tags.length > 0 && tags.map((item, key) => (react_1.default.createElement(Tag_1.default, { key: key, styles: styles, options: options, name: item.tag, values: item.tag, data: item, editing: item.editing, onActivateEdit: (name) => onEdit(name, key), onChange: (value) => onChange(item.tag, value, key), onRemove: onRemove }))),
        react_1.default.createElement(Tag_1.default, { styles: Object.assign(Object.assign({}, styles), { marginRigth: "1rem" }), options: options, name: "tag", values: valueTag, editing: true, onChange: onAddTag })));
};
exports.ExtendedConfigEdit = ExtendedConfigEdit;
