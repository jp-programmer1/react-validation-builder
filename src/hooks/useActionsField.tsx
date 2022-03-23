import React, { useCallback, useEffect, useState } from 'react'

export const useActionsField = (data) => {
  const [values, setValues] = useState(data);
  const [editing, setEditing] = useState({});
  const [fields, setFields] = useState<Array<any>>([]);

  useEffect(() => setValues(data), [data]);
  const onAddField = useCallback(() => {
    let copyValues = {...values};
    let keys = Object.keys(copyValues).length;
    copyValues[`field${keys}`] = {type: "string"};
    setValues(copyValues);
  }, [values]);

  const onEditField = useCallback((name) => {
    let copyEditing = { ...editing };
    for (const key in copyEditing) {
      if (key === name) copyEditing[key] = !copyEditing[key]
      else copyEditing[key] = false;
    }
    console.log(copyEditing);
    
    setEditing(copyEditing);
  }, [editing]);

  const onChangeCallback = useCallback((value, index) => {
    let copyField = [...fields];
    copyField[index] = { ...value };
    setFields(copyField);
  }, [fields]);

  useEffect(() => {
    let list: Array<any> = [];
    let typeEditing: object = {};
    for (const key in values) {
      list.push({ ...values[key], name: key });
      typeEditing = { ...typeEditing, [key]: false };
    }
    setEditing(typeEditing);
    setFields(list);
  }, [values]);

  return {onChangeCallback, onEditField, onAddField, fields, editing}
}
