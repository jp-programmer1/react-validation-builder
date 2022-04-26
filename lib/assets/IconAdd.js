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
const React = __importStar(require("react"));
const IconAdd = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
        // enableBackground: "new 0 0 512 512",
        width: 12,
        height: 12,
        fill: props.color
    }, xmlSpace: "preserve" },
    React.createElement("switch", null,
        React.createElement("g", null,
            React.createElement("path", { d: "M440 216H304c-4.4 0-8-3.6-8-8V72c0-22.1-17.9-40-40-40s-40 17.9-40 40v136c0 4.4-3.6 8-8 8H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h136c4.4 0 8 3.6 8 8v136c0 22.1 17.9 40 40 40s40-17.9 40-40V304c0-4.4 3.6-8 8-8h136c22.1 0 40-17.9 40-40s-17.9-40-40-40z" })))));
exports.default = IconAdd;
