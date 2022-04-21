import React from 'react';
import * as yup from 'yup';
import { types } from '../utils';
import { getKeys } from './getKeys';
import { searchYupType } from './searchType';

const transformSchemaToYup = (data) => {
  return yup.object().shape({ ...transformSchema(data) });
}
const transformSchema = (data: any) => {
  let schema = {};
  for (const key in data) {
    let nameField = key;
    let values = data[key];
    let yupType = searchYupType(values.type);
    delete values.fieldKey;
    delete values.type;

    let keysValidation: Array<any> = Object.keys(values);
    let structureFunction = `return ${yupType}${getKeys(keysValidation, values)}`;
    console.log(structureFunction);
    
    let getSchema = new Function("yup", structureFunction);
    schema = { ...schema, [nameField]: getSchema(yup) };
  }
  return schema;
}

export default transformSchemaToYup;