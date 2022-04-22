import * as yup from 'yup';
import { DataInterface } from '../interfaces/ValidationBuilderEditorInterface';
import { getKeys } from './getKeys';
import { searchYupType } from './searchType';

const transformSchemaToYup = (data) => {
  return yup.object().shape({ ...transformSchema(data) })
};

const transformSchema = (data) => {
  let schema = {};
  if(data){
    for (const key in data) {
      let nameField = key;
      let values = data[key];
      let yupType = searchYupType(values.type) || "";
      delete values.fieldKey;
      delete values.type;
      if(yupType){
        let keysValidation: Array<any> = Object.keys(values);
        let structureFunction = `return ${yupType}${getKeys(keysValidation, values)}`;
        let getSchema = new Function("yup", structureFunction);
        schema = { ...schema, [nameField]: getSchema(yup) };
      }
    }
  }
  return schema;
}

export default transformSchemaToYup;