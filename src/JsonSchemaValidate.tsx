import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchemaValidateInterface, JsonSchemaValuesInterface } from './interfaces/JsonSchemaValidateInterface';
import { defaultSchema, optionsType } from './utils';
import {ExtendedConfigEdit} from './ExtendedConfigEdit';
import { InputCustom, SelectCustom, SwitchCustom } from './components/Index';
import '../lib/styles/styles.css';


/**
 * @param data the json schema object
 * @param onChange function that returns a jsonschema
 * @param className set container className
 * @param componentAdd integrate add item component
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param id set container id

 * @returns {JSX.Element}
 * @constructor
 */

const JsonSchemaValidate = ({ data = defaultSchema, onChange, className = "", componentAdd, componentOffCollapse,
  componentOnCollapse, componentRemove, id, showList }: JsonSchemaValidateInterface) => {

  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onCollapsed = useCallback(() => setCollapsed(current => !current), []);

  const [values, setValues] = useState<JsonSchemaValuesInterface>({});
  const [keyEdit, setKeyEdit] = useState();

  useEffect(() => {
    if(keyEdit){
      let find = data.properties[keyEdit!];
      if(find) setValues(data.properties[keyEdit!]);
    }
  }, []);
  const onChangeCallback = useCallback((value, name) => {
    let copyData = { ...values };
    copyData[name] = value;
    console.log(copyData);
    
    setValues(copyData);
  }, [values]);

  const onAdd = useCallback(() => {
    if(values){
      let copyData = { ...data };
      if(keyEdit){
        delete values.name;
        copyData.properties[keyEdit!] = values;
      }else{
        let key = values.name;
        delete values.name
        copyData.properties[key!] = values
      }
      copyData.properties = {...copyData.properties, ...values};
    }


  }, [keyEdit, data, values, onChange]);

  useEffect(() => {if(values.type === "boolean") setCollapsed(true)}, [values.type]);

  const onRemove = useCallback(() => {

  }, []);

  return (
    <div className={`react-jsonschema-validate-editor-container ${className}`} id={id}>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <InputCustom type="text" placeholder="Name Field" value={values.name} onChange={(value) => onChangeCallback(value, "name")}/>
        </div>
        <div className="col-sm-4">
          <SelectCustom name="type" value={values.type} onChange={(value) => onChangeCallback(value, "type")} options={optionsType} />
        </div>
        <div className="col-sm-2 form-check">
          <SwitchCustom label="Required" name="required" value={values.required} onChange={(checked) => onChangeCallback(checked, "required")} />
        </div>
        {values.type && values.type !== "boolean" && 
          <div className="col-sm-2 react-jsonschema-validate-editor-collapse">
            <span className={`${!collapsed ? "json-editor-collapse-down" : ""}`} onClick={onCollapsed} >^</span>
          </div>
        }
      </div>
      <div className="text-start mt-3">
        <button className="btn btn-success text-align-left" onClick={onAdd} type="button">{keyEdit ? 'Edit' : 'Add'}</button>
      </div>

      {!collapsed && 
        <div className="mt-2 json-validate-editor-extended-configuration-container">
          <div className="text-json-editor-h6 mb-2">
            <h6>Extended Configuration</h6>
            <div className="json-validate-editor-divider"></div>
          </div>
          <ExtendedConfigEdit values={values} onChangeCallback={(value:any, name:string) => onChangeCallback(value, name)} />
        </div>
      }
    </div>
  );
}

export default JsonSchemaValidate;
