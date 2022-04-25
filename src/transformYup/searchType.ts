import * as yup from 'yup';

const types = {
  "string": yup.string,
  "number": yup.number,
  "date": yup.date,
  "boolean": yup.boolean
}

export const searchYupType = (type) => {
  return types[type]();
}