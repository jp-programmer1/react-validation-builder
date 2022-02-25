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
const BadgeInput = ({ FieldRender, onEditFieldRender, options = [], values, color, name, activateEdit = true, actions }) => {
    const onEditField = (0, react_1.useCallback)((e, nameField) => {
        onEditFieldRender && onEditFieldRender(nameField);
        return;
    }, [onEditFieldRender]);
    return (react_1.default.createElement("div", { className: "validation-builder-badge-container" },
        activateEdit === true && FieldRender && Object.assign({}, FieldRender()),
        activateEdit === false &&
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-sm-2", onClick: (e) => onEditField(e, name) },
                    react_1.default.createElement("p", null, values[name])))));
};
exports.default = BadgeInput;
