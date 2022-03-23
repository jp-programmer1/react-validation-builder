import React, { useCallback, useEffect, useState } from 'react';
import { types } from '../utils';

export const useActionsTag = (values:any, onChangeCallback?:(e:any) => void) => {
  const [generalOptions, setGeneralOptions] = useState<Array<any>>([]);
  const [options, setOptions] = useState<Array<any>>([]);
  const [tags, setTags] = useState<Array<any>>([]);

  useEffect(() => {
    if (values) {
      let data: Array<any> = [];
      for (const key in values) {
        if (key !== "type" && key !== "name" && key !== "fieldKey") {
          let tag = key;
          data.push({ tag, value: values[key], editing: false });
        }
      }
      let extractOptions = types[values.type].map(op => ({ value: op.name, label: op.name }));;
      setGeneralOptions(extractOptions);
      setTags(data);
    }
  }, [values]);

  useEffect(() => {
    // structure options
    if (generalOptions && tags.length > 0) {
      let copyOptions = [...generalOptions];
      copyOptions.unshift({ value: "", label: "Add" })
      tags.forEach(t => {
        let findIndex = copyOptions.findIndex(op => op.value === t.tag);
        if (findIndex !== -1) copyOptions.splice(findIndex, 1);
      });
      setOptions(copyOptions);
    }
  }, [generalOptions, tags]);

  const onAddTag = useCallback((value) => {
    if (value && value !== "") {
      values[value] = { [value]: "", message: "" };
      onChangeCallback && onChangeCallback(values);
    }
  }, [values, onChangeCallback]);

  const onRemoveTag = useCallback((name) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      delete values[name];
      onChangeCallback && onChangeCallback(values);
    }
  }, [values, onChangeCallback]);

  const onActivateEdit = useCallback((name, index) => {
    let data = [...tags];
    data.forEach(((d, key) => {
      if (index === key && name === d.tag) d.editing = !d.editing;
      else d.editing = false;
    }));
    setTags(data);
  }, [tags]);

  const onEditTag = useCallback((name, value) => {
    let data = [...tags];
    return data;
  }, [tags]);

  return {options, tags, generalOptions, onAddTag, onRemoveTag, onActivateEdit, onEditTag};
}
