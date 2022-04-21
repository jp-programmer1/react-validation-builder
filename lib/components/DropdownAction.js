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
exports.DropdownAction = void 0;
const react_1 = __importStar(require("react"));
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
exports.DropdownAction = DropdownAction;
