import React, { useCallback, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';
import { ExtendedConfigEdit } from './ExtendedConfigEdit';
import { InputCustom } from '../components/Index';
import '../../lib/styles/styles.css';
import { useActionsField } from '../hooks/useActionsField';
import { TagType } from '../components/TagType';


/**
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentRemove integrate remove item component
 * @returns {JSX.Element}
 * @constructor
 */

const ValidationBuilderEditor = ({ data, onChange, className = "" }: ValidationBuilderEditorInterface) => {

  const { onChangeCallback, onAddField, fields, onRemoveField, fieldKeys, onChangeFieldName } = useActionsField(data, onChange);

  const styles = useMemo(() => ({
    backgroundColor: "#35AACB",
    color: "white",
    fontWeight: "bold",
    width: 100,
  }), []);
  
  return (
    <div className={`react-jsonschema-validate-editor-container ${className}`}>
      <div className="validate-editor-container-button-add">
        <button type="button" className="btn btn-primary btn-sm" onClick={onAddField} >Add</button>
      </div>
      {fields && fields.map((field, key) => (
        <div className="row align-items-center mb-3" key={key}>
          <div className="col-sm-3 d-flex align-items-center" style={{marginTop: 5}}>
            <div className="validate-editor-container-remove-field">
              <button type="button" className="btn btn-danger btn-sm" onClick={onRemoveField}><i className="fas fa-times"></i></button>
            </div>
            <InputCustom type="text" placeholder="Name Field" value={fieldKeys[key]}
              onBlur={() => {
                field.fieldKey = fieldKeys[key];
                onChangeCallback(field, key)}
              }
              onChange={(value) => {
                onChangeFieldName(value, key);
              }} />
          </div>
          <div className="col-sm-2 validate-editor-container-select-type">
            <TagType styles={{ ...styles }} data={field} onChange={(value:string) => onChangeCallback(value, key)} />
          </div>
          <div className="col-sm-7 validate-editor-container-config-tags ">
            {field.type &&
              <ExtendedConfigEdit keyComponent={`${key}-${field.fieldKey}`} values={field} onChangeCallback={(value: any) => onChangeCallback(value, key)} />
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default ValidationBuilderEditor;
