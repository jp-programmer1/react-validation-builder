import React from 'react';
import convertToYup from "json-schema-yup-transformer";

interface InterfaceDataTransformYup {
  jsonschema: object
  errors: object
}

export const transformYup = (data:InterfaceDataTransformYup) => {
  if(data){
    const yupschema = convertToYup(data.jsonschema, data.errors);
    return yupschema;
  }
  return undefined;
}
