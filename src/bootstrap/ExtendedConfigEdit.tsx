import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Tag from '../components/Tag';
import { types } from './TypesConfig';



export const ExtendedConfigEdit = ({ values, onChangeCallback }) => {
  const [options, setOptions] = useState<Array<any>>([]);
  const [tags, setTags] = useState<Array<any>>([]);
  const [valueTag, setValueTag] = useState("");

  useEffect(() => {
    if (values) {
      let data: Array<any> = [];
      for (const key in values) {
        if (key !== "type" && key !== "name" && key !== "fieldKey") {
          let tag = key;
          data.push({ tag, value: values[key], editing: false });
        }
      }
      setTags(data);
      setOptions(types[values.type]);
    }
  }, [values]);

  const onAddTag = useCallback((value) => {
    setValueTag("");
    let key = options.find(op => op.name === value).key;
    values[value] = { [key]: "", message: "" };
    onChangeCallback(values);
  }, [values, options, onChangeCallback]);

  const onEdit = useCallback((name, index) => {
    let data = [...tags];
    data.forEach(((d, key) => {
      if (index === key && name === d.tag) d.editing = !d.editing;
      else d.editing = false;
    }));
    setTags(data);
  }, [tags]);

  const onChange = useCallback((tag, value, key) => {
    if (tag !== value) {
      delete values[tag];
      let key = options.find(op => op.name === value).key;
      values[value] = { [key]: "", message: "" };
      onChangeCallback(values);
    }
    onEdit(tag, key);
  }, [onChangeCallback, values, onEdit, options]);

  const styles = useMemo(() => (
    { backgroundColor: "#3089DB", color: "white" }
  ), []);

  const onRemove = useCallback((name) => {
    if(window.confirm("Are you sure you want to delete it?")){
      delete values[name];
      onChangeCallback(values);
    }
  }, [values, onChangeCallback]);

  return (
    <div className="validation-builder-data-tags">
      {tags.length > 0 && tags.map((item, key) => (
        <Tag key={key} styles={styles} options={options} name={item.tag} values={item.tag} data={item}
          editing={item.editing} onActivateEdit={(name) => onEdit(name, key)}
          onChange={(value) => onChange(item.tag, value, key)}
          onRemove={onRemove}
        />
      ))}

      <Tag styles={{ ...styles, marginRigth: "1rem" }} options={options} name="tag" values={valueTag}
        editing={true}
        onChange={onAddTag}
      />
    </div>
  );
}
