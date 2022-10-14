import validations from './validations/index';

export const getValidations = (fieldValidation, values, resolveExpressionCallback) => {
  if (Object.keys(values).length > 0) {
    for (const key in values) {
      let type = validations[key]
      if (type) fieldValidation = type(values, fieldValidation, resolveExpressionCallback);
    }
  }
  return fieldValidation;
}