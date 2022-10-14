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
exports.SelectCustom = exports.InputCustom = void 0;
const react_1 = __importStar(require("react"));
const InputCustom = ({ name, value, onChange, type = "text", placeholder, min = 0, max, required = false, disabled = false, onEnter, onClick, onBlur, className, activateFocus }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (activateFocus && ref.current)
            ref.current.focus();
    }, [activateFocus, ref]);
    return react_1.default.createElement("input", { type: type, placeholder: placeholder, required: required, min: min, max: max, disabled: disabled, onChange: (e => onChange(e.target.value)), value: value, onBlur: onBlur, ref: ref, name: name, className: className, onKeyUp: onEnter, onClick: onClick, autoComplete: "off" });
};
exports.InputCustom = InputCustom;
const SelectCustom = ({ name, value = "", onChange, options, required = false, disabled = false, className, onEnter }) => (react_1.default.createElement("select", { name: name, required: required, disabled: disabled, value: value, onChange: (e) => onChange(e.target.value), className: className, onKeyUp: onEnter }, options && options.map((op, key) => react_1.default.createElement("option", { value: op.value, key: key }, op.label))));
exports.SelectCustom = SelectCustom;
