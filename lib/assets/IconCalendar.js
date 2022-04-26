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
const IconCalendar = (props) => (React.createElement("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", style: {
        fill: props.color,
        width: 16,
        height: 16
    } },
    React.createElement("title", null),
    React.createElement("g", { "data-name": "Layer 2" },
        React.createElement("path", { d: "M24 29H8a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5ZM8 7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Z" }),
        React.createElement("path", { d: "M24 25h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2v-2h-2ZM28 13H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2ZM11 9a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1ZM21 9a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z" })),
    React.createElement("path", { style: {
            fill: "none",
        }, d: "M0 0h32v32H0z" })));
exports.default = IconCalendar;
