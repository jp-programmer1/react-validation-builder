import React, { useCallback, useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchemaValidateInterface } from '../interfaces/JsonSchemaValidateInterface';
import { optionsType } from '../utils';
import { ExtendedConfigEdit } from './ExtendedConfigEdit';
import { InputCustom } from '../components/Index';
import Tag from '../components/Tag';
import '../../lib/styles/styles.css';


/**
 * @param data this property receives {jsonSchema, errors}. default {}
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param showList view Table
 * @param 
 * @param id set container id

 * @returns {JSX.Element}
 * @constructor
 */

const initTypeString = {
  person: {
    type: "string",
    required: true,
    min: { limit: 2, message: "Hello" },
    fieldKey: "person"
  },
  phone: {
    type: "number",
    required: {required: true, message: "Este campo es requerido"},
    fieldKey: "phone"
  }

};

const JsonSchemaValidate = ({ data = {}, onChange, className = "", id, }: JsonSchemaValidateInterface) => {
  const [values, setValues] = useState({ ...initTypeString });
  const [fields, setFields] = useState<Array<any>>([]);
  const [editing, setEditing] = useState({});

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

  const styles = useMemo(() => ({
    backgroundColor: "#DBAB2F",
    color: "white",
    fontWeight: "bold",
    width: 100,
  }), []);

  const onAddField = useCallback(() => {
    let copyValues = {...values};
    let keys = Object.keys(copyValues).length;
    copyValues[`field${keys}`] = {type: "string"};
    setValues(copyValues);
  }, [values]);

  const onEdit = useCallback((name) => {
    let copyEditing = { ...editing };
    for (const key in copyEditing) {
      if (key === name) copyEditing[key] = !copyEditing[key]
      else copyEditing[key] = false;
    }
    console.log(copyEditing);
    
    setEditing(copyEditing);
  }, [editing]);

  return (
    <div className={`react-jsonschema-validate-editor-container ${className}`} id={id}>
      <div className="validate-editor-container-button-add">
        <button type="button" className="btn btn-success btn-sm" onClick={onAddField} >Add</button>
      </div>
      {fields && fields.map((field, key) => (
        <div className="row align-items-center mb-3" key={key}>
          <div className="col-sm-3">
            <InputCustom type="text" placeholder="Name Field" value={field.name || ""}
              onChange={(value) => {
                field.name = value;
                onChangeCallback(field, key);
              }} />
          </div>
          <div className="col-sm-2 validate-editor-container-select-type">
            <Tag styles={{ ...styles }} options={optionsType} name="type" values={field.type} editing={editing[field.name]}
              onActivateEdit={() => onEdit(field.fieldKey)}
              onChange={(value) => {
                field.type = value;
                onChangeCallback(field, key);
                onEdit(field.fieldKey);
              }}
            />
          </div>
          <div className="col-sm-7 validate-editor-container-config-tags ">
            {field.type &&
              <ExtendedConfigEdit values={field} onChangeCallback={(value: any) => onChangeCallback(value, key)} />
            }
          </div>
        </div>
      ))}

    </div>
  );
}

export default JsonSchemaValidate;
