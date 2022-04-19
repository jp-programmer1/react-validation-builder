import React from 'react';
import * as yup from 'yup';
import { types } from './utils';

const transformSchemaToYup = (data) => {
  
  const transformSchema = () => {
    if(data){
      let schema = {}
      for (const key in data) {
        let nameField = key;
        let values = data[key];
        let type = values.type;
        let actions = types[type];
        delete values.fieldKey;
        delete values.type;
        let keysValidation = Object.keys(values);
        console.log(keysValidation);
        
        // schema = {
        //   ...schema, 
        //   [nameField]: 
        // }

        
        
        
        
      }
    }
    return {};
    
 
  }



  return yup.object().shape({...transformSchema()});
}

export default transformSchemaToYup;