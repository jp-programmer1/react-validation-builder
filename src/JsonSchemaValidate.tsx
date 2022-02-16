import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchema } from './interfaces/JsonSchemaInterface';
import { JsonSchemaValidateInterface } from './interfaces/JsonSchemaValidateInterface';
import { defaultSchema, optionsType, parseList } from './utils';
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
 * @param getList function that returns a properties list in array object
 * @returns {JSX.Element}
 * @constructor
 */

const JsonSchemaValidate = ({ data = defaultSchema, onChange, className = "", componentAdd, componentOffCollapse,
  componentOnCollapse, componentRemove, id, getList }: JsonSchemaValidateInterface) => {

  const [collapsed, setCollapsed] = useState();

  const [valueEdit, setValueEdit] = useState<JsonSchema>();
  const [addValue, setAddValue] = useState({});

  const onChangeCallback = useCallback(() => {
    let copyData = { ...data };
    onChange(data);
  }, [data, onChange]);

  const onAdd = useCallback(() => {
    let copyData = { ...data };

    if (getList !== undefined) getList(parseList(data));

  }, [addValue, valueEdit, data, getList]);

  const onRemove = useCallback(() => {

  }, []);


  return (
    <div className={`react-jsonschema-validate-editor-container ${className}`} id={id}>
      <div className="row align-items-center">
        <div className="col-md-3">
          <input type="text" name="name" placeholder="Name Field" className="form-control" />
        </div>
        <div className="col-md-3">
          <select className="form-select" name="type">
            {optionsType.map((op, key) => (
              <option value={op.value} key={key}>{op.label}</option>
            ))}
          </select>
        </div>
        <div className="col-md-1 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">required</label>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-secondary" type="button">Collapse</button>
        </div>
      </div>
      <div className="text-start mt-3">
        <button className="btn btn-success text-align-left" type="button">Add</button>
      </div>
    </div>
  );
}

export default JsonSchemaValidate;
