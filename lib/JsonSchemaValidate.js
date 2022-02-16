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
require("bootstrap/dist/css/bootstrap.min.css");
const utils_1 = require("./utils");
require("../lib/styles/styles.css");
/**
 * @param data the json schema object
 * @param onChange function that returns a jsonschema
 * @param className set container className
 * @param componentAdd integrate add item component
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param id set container id
 * @param getList function that returns a properties list in array object
 * @returns {JSX.Element}
 * @constructor
 */
const JsonSchemaValidate = ({ data = utils_1.defaultSchema, onChange, className = "", componentAdd, componentOffCollapse, componentOnCollapse, componentRemove, id, getList }) => {
    const [collapsed, setCollapsed] = (0, react_1.useState)();
    const [valueEdit, setValueEdit] = (0, react_1.useState)();
    const [addValue, setAddValue] = (0, react_1.useState)({});
    const onChangeCallback = (0, react_1.useCallback)(() => {
        let copyData = Object.assign({}, data);
        onChange(data);
    }, [data, onChange]);
    const onAdd = (0, react_1.useCallback)(() => {
        let copyData = Object.assign({}, data);
        if (getList !== undefined)
            getList((0, utils_1.parseList)(data));
    }, [addValue, valueEdit, data, getList]);
    const onRemove = (0, react_1.useCallback)(() => {
    }, []);
    return (react_1.default.createElement("div", { className: `react-jsonschema-validate-editor-container ${className}`, id: id },
        react_1.default.createElement("div", { className: "row align-items-center" },
            react_1.default.createElement("div", { className: "col-md-3" },
                react_1.default.createElement("input", { type: "text", name: "name", placeholder: "Name Field", className: "form-control" })),
            react_1.default.createElement("div", { className: "col-md-3" },
                react_1.default.createElement("select", { className: "form-select", name: "type" }, utils_1.optionsType.map((op, key) => (react_1.default.createElement("option", { value: op.value, key: key }, op.label))))),
            react_1.default.createElement("div", { className: "col-md-1 form-check" },
                react_1.default.createElement("input", { type: "checkbox", className: "form-check-input", id: "exampleCheck1" }),
                react_1.default.createElement("label", { className: "form-check-label", htmlFor: "exampleCheck1" }, "required")),
            react_1.default.createElement("div", { className: "col-md-3" },
                react_1.default.createElement("button", { className: "btn btn-outline-secondary", type: "button" }, "Collapse"))),
        react_1.default.createElement("div", { className: "text-start mt-3" },
            react_1.default.createElement("button", { className: "btn btn-success text-align-left", type: "button" }, "Add"))));
};
exports.default = JsonSchemaValidate;
