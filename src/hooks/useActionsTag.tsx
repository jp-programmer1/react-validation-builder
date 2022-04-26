import { useCallback, useEffect, useState } from 'react';
import { types } from '../utils';

export const useActionsTag = (values: any, onChangeCallback: (e: any) => void) => {
  const [generalOptions, setGeneralOptions] = useState<Array<any>>([]);
  const [options, setOptions] = useState<Array<any>>([]);
  const [tags, setTags] = useState<Array<any>>([]);
  const [actions, setActions] = useState<Array<any>>([]);

  useEffect(() => {
    // structure tags and create options
    if (values) {
      let data: Array<any> = [];
      for (const key in values) {
        if (key !== "type" && key !== "name" && key !== "fieldKey") {
          let tag = key;
          data.push({ tag, value: values[key], type: values.type, fieldKey: values.fieldKey });
        }
      }
      let extractOptions = types[values.type].map((op:any) => ({ value: op.name, label: op.name, deps: op.deps }));
      setGeneralOptions(extractOptions);
      setTags(data);
    }
  }, [values]);

  useEffect(() => {
    // structure options
    if (generalOptions) {
      let copyOptions = [...generalOptions];
      copyOptions.unshift({ value: "", label: "Add" });
      if(tags.length > 0){
        tags.forEach((t) => {
          let findIndex = copyOptions.findIndex(op => op.value === t.tag);
          // remove deps options
          if(Array.isArray(copyOptions[findIndex].deps)){
            copyOptions[findIndex].deps.forEach(op => {
              let index = copyOptions.findIndex(c => c.value === op);
              if (index !== -1) copyOptions.splice(index, 1);
            });
          };
        });
        //remove select option
        tags.forEach((t) => {
          let findIndex = copyOptions.findIndex(op => op.value === t.tag);
          if(findIndex !== -1) copyOptions.splice(findIndex, 1);
        });
      }
      setOptions(copyOptions);
    }
  }, [generalOptions, tags]);

  useEffect(() => {
    //Search ACTIONS
    if (tags.length > 0) {
      let searchType = types[values.type];
      let actions:Array<any> = [];
      if (searchType.length > 0) {
        tags.forEach(t => {
          let find = searchType.find(f => f.name === t.tag);
          if(find) actions.push({...find, ...t});
        });
      }
      setActions(actions);
    }
  }, [values, tags]);

  const onAddTag = useCallback((value) => {
    if (value && value !== "") {
      let searchType = types[values.type];
      let key = searchType.find(s => s.name === value).key;
      values[value] = { message: "" };
      if(key){
        values[value] = { ...values[value], [key]: ""}
      }
      onChangeCallback(values);
    }
  }, [values, onChangeCallback]);

  const onFinishEdit = useCallback((d) => {
    values[d.tag] = d.value;
    onChangeCallback(values);
  }, [values, onChangeCallback]);

  const onRemoveTag = useCallback((name) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      delete values[name];
      onChangeCallback(values);
    }
  }, [values, onChangeCallback]);

  return { options, tags, generalOptions, actions, onAddTag, onRemoveTag, onFinishEdit };
}
