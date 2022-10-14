"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MESSAGE_DEFAULT = 'expression validation failed';
const expression = (props, validation, resolveExpressionCallback) => {
    const { expression, fieldKey } = props;
    return validation.test('', expression.message, function (fieldValue) {
        //@ts-ignore;
        const { path, createError } = this;
        //call the callback to do its custom validation, it must return a true or false
        let resolveValue = resolveExpressionCallback && resolveExpressionCallback(fieldKey, fieldValue, expression.value);
        if (resolveValue)
            return true;
        else {
            let message = expression.message && expression.message !== "" ? expression.message : MESSAGE_DEFAULT;
            return createError({ path, message: message });
        }
    });
};
exports.default = expression;
