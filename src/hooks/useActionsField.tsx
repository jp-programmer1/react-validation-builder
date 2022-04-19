import React, { useCallback, useEffect, useState } from 'react'

export const useActionsField = (data, onChange) => {
  const [values, setValues] = useState(data);
  const [fields, setFields] = useState<Array<any>>([]);
  const [fieldKeys, setFieldKeys] =  useState<Array<any>>([]);

  useEffect(() => setValues(data), [data]);

  const onAddField = useCallback(() => {
    let copyValues = {...values};
    let keys = Object.keys(copyValues).length;
    copyValues[`field${keys}`] = {type: "string", fieldKey: `field${keys}`};
    setValues(copyValues);
  }, [values]);

  const onRemoveField = useCallback((index) => {
    let copyField = [...fields];
    copyField.splice(index, 1);
    onChange(structureData(copyField));
  }, [fields, onChange]);

  const onChangeCallback = useCallback((value, index) => {
    fields[index] = { ...value };
    onChange(structureData(fields));
  }, [fields, onChange]);

  useEffect(() => {
    let list: Array<any> = [];
    const fieldsNames:Array<any> = [];
    for (const key in values) {
      list.push({ ...values[key] });
      fieldsNames.push(key);
    }
    setFieldKeys(fieldsNames);
    setFields(list);
  }, [values]);

  const structureData = useCallback((field:Array<any>) => {
    let data = {};
    field.forEach(e => {
      data = { ...data, [e.fieldKey]: { ...e } };
    });
    return data;
  }, []);

  const onChangeFieldName = useCallback((value, key) => {
    let copy = [...fieldKeys];
    copy[key] = value;
    setFieldKeys(copy)
  }, []);

  return {onChangeCallback, onAddField, fields, onRemoveField, onChangeFieldName, fieldKeys}
}
