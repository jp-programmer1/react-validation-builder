import React, { useCallback, useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchemaValidateInterface } from '../interfaces/JsonSchemaValidateInterface';
import { optionsType } from '../utils';
import { ExtendedConfigEdit } from './ExtendedConfigEdit';
import { InputCustom, SelectCustom } from '../components/Index';
import Tag from '../components/Tag';
import '../../lib/styles/styles.css';
import { useActionsField } from '../hooks/useActionsField';
import { useActionsTag } from '../hooks/useActionsTag';


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

const JsonSchemaValidate = ({ data, onChange, className = "", id, }: JsonSchemaValidateInterface) => {

  const { onChangeCallback, onEditField, onAddField, fields, editing } = useActionsField(data);

  const styles = useMemo(() => ({
    backgroundColor: "#DBAB2F",
    color: "white",
    fontWeight: "bold",
    width: 100,
  }), []);


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
            <Tag styles={{ ...styles }} name="type" data={field} namekey="type" />
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
