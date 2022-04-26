
export const getValidations = (fieldValidation, values) => {
  if (values.required) {
    fieldValidation = fieldValidation.required(values.required.message);
  }
  if (values.min) {
    fieldValidation = fieldValidation.min(values.min.limit, values.min.message);
  }
  if (values.max) {
    fieldValidation = fieldValidation.max(values.max.limit, values.max.message);
  }
  if (values.matches) {
    fieldValidation = fieldValidation.matches(values.matches.regex, values.matches.message);
  }
  if (values.email) {
    fieldValidation = fieldValidation.email(values.email.message);
  }
  if (values.url) {
    fieldValidation = fieldValidation.url(values.url.message);
  }
  if (values.uuid) {
    fieldValidation = fieldValidation.uuid(values.uuid.message);
  }
  if (values.trim) {
    fieldValidation = fieldValidation.trim(values.trim.message);
  }
  if (values.lowercase) {
    fieldValidation = fieldValidation.lowercase(values.lowercase.message);
  }
  if (values.uppercase) {
    fieldValidation = fieldValidation.uppercase(values.uppercase.message);
  }
  if (values.lessThan) {
    fieldValidation = fieldValidation.lessThan(values.lessThan.max, values.lessThan.message);
  }
  if (values.moreThan) {
    fieldValidation = fieldValidation.moreThan(values.moreThan.min, values.moreThan.message);
  }
  if (values.positive) {
    fieldValidation = fieldValidation.positive(values.positive.message);
  }
  if (values.negative) {
    fieldValidation = fieldValidation.negative(values.negative.message);
  }
  if (values.integer) {
    fieldValidation = fieldValidation.integer(values.integer.message);
  }
  return fieldValidation;
}