import * as yup from 'yup';
import { getValidations } from './getValidations';
import { searchYupType } from './searchType';

const transformSchemaToYup = (data, resolveExpressionCallback) => {
  return yup.object().shape({ ...transformSchema(data, resolveExpressionCallback) })
};

const transformSchema = (data, resolveExpressionCallback) => {
  let schema = {};
  if(data){
    for (const key in data) {
      let nameField = key;
      let values = data[key];
      let type = searchYupType(values.type);
      let validations = getValidations(type, values, resolveExpressionCallback);
      schema = {...schema, [nameField]: validations}
    }
  }
  return schema;
}

export default transformSchemaToYup;