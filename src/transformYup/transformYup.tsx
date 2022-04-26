import * as yup from 'yup';
import { getValidations } from './getValidations';
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
      let type = searchYupType(values.type);
      let validations = getValidations(type, values);
      schema = {...schema, [nameField]: validations}
    }
  }
  return schema;
}

export default transformSchemaToYup;