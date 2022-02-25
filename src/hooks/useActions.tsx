import React, { useState, useCallback } from 'react'
import { parseToProperties } from '../utils';

export const useActions = ({values, data, onEditKey, onChange, parse="jsonschema" }) => {
  const [keyEdit, setKeyEdit] = useState();
  const [loading, setLoading] = useState();


  const onAdd = useCallback(() => {
    if (values) {
      let copyData = { ...data.jsonSchema };
      // parse to jsonSchema (Properties, Required, Errors)
      let jsonParse = parseToProperties(values);
      if (jsonParse.required) {
        let requireArray = copyData.required || [];
        requireArray.push(jsonParse.required);
        copyData.required = requireArray;
      }
      if (keyEdit) {
        if (keyEdit === jsonParse.key) {
          //@ts-ignore
          copyData.properties[keyEdit] = jsonParse.properties[keyEdit];
        } else {
          //@ts-ignore
          delete copyData.properties[keyEdit];
          copyData.properties[jsonParse.key] = jsonParse.properties[jsonParse.key];
        }
      }
      // build structure JsonSchema
      let schema = {
        jsonSchema: { type: "object", title: "root", properties: { ...copyData.properties, ...jsonParse.properties }, required: copyData.required },
        errors: { ...data.errors, ...jsonParse.errors }
      };

      onChange(keyEdit, schema);
      setKeyEdit(undefined);
    }
  }, [keyEdit, data, values, onChange]);

  return { loading }
  
}
