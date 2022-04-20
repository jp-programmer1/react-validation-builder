import React from 'react';
import * as yup from 'yup';
import { types } from '../utils';
import { getProperties } from './getProperties';
import { searchYupType } from './searchType';

const transformSchemaToYup = (data) => {
  return yup.object().shape({ ...transformSchema(data) });
}
const transformSchema = (data:any) => {
  if (data) {
    let schema = {};
    for (const key in data) {
      let nameField = key;
      let values = data[key];
      let yupType = searchYupType(values.type);
      delete values.fieldKey;
      delete values.type;

      // let keysValidation = Object.keys(values);
      // console.log(nameField);
      // let sustrac = { [nameField]: {} };
      // keysValidation.forEach(k => {
      //   schema = { ...schema, [nameField]: yupType[k](getProperties(values[key]))};
      // });   
    }

   return schema;
  }
  return {};


}

export default transformSchemaToYup;