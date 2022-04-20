import * as yup from 'yup';

export const searchYupType = (type) => {
  let validation;
  switch (type) {
    case "string":
      validation = yup.string();
      break;
    case "number":
      validation = yup.number();
      break;
    case "date":
      validation = yup.date();
      break;
    case "boolean":
      validation = yup.boolean();
      break;
    default:
      validation = yup.string();
      break;
  }
  return validation;
}