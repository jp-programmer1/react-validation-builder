import React from 'react';
import { ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';
import { ExtendedConfigEdit } from '../components/ExtendedConfigEdit';
import { InputCustom } from '../components/Index';
import { useActionsField } from '../hooks/useActionsField';
import { TagType } from '../components/TagType';
import '../../lib/styles/styles.css';

/**
 * @param onChange function that returns a object and list (schema) => void;
 * @param className set container className
 * @param config object ->
  addField?: { icon: string, text: string, styles: object }
  removeField?: { icon: string, text: string, styles: object }
  message?: { icon: string, text: string, styles: object }
  removeTag?: { icon: string, text: string, styles: object }
  valueStringTag?: { icon: string, text: string, styles: object }
  valueNumberTag?: { icon: string, text: string, styles: object }
  valueDateTag?: { icon: string, text: string, styles: object }
 * @param pillStyles object ->     
    pillType: object
    pillTag: object
 * @returns {JSX.Element}
 * @constructor
 */

export const ValidationBuilderEditor = ({ data, onChange, className = "", config, pillStyles }: ValidationBuilderEditorInterface): JSX.Element => {
  const { onChangeCallback, onAddField, fields, onRemoveField, fieldKeys, onChangeFieldName, onChangeType } = useActionsField(data, onChange);

  return (
    <div className={`react-jsonschema-validate-editor-container ${className}`}>
      <div className="validate-editor-container-button-add">
        <button type="button" style={config?.addField?.styles} className="btn btn-primary btn-sm" onClick={onAddField} >
          {config?.addField ?
            <React.Fragment>
              {config.addField.icon && <i className={config?.addField.icon} />}
              {config.addField.text && config.addField.text}
            </React.Fragment>
            : 'Add'}
        </button>
      </div>
      {fields && fields.map((field, key) => (
        <div className="row align-items-center mb-3" key={key}>
          <div className="col-sm-3 d-flex align-items-center" style={{ marginTop: 5 }}>
            <div className="validate-editor-container-remove-field">
              <button type="button" className="btn btn-danger btn-sm" onClick={onRemoveField}>
                {config?.removeField ?
                  <React.Fragment>
                    {config.removeField.icon && <i className={config?.removeField.icon} />}
                    {config.removeField.text && config.removeField.text}
                  </React.Fragment>
                  : 'X'}
              </button>
            </div>
            <InputCustom type="text" placeholder="Name Field" value={fieldKeys[key]}
              className="form-control"
              onBlur={() => {
                field.fieldKey = fieldKeys[key];
                onChangeCallback(field, key)
              }}
              onChange={(value) => {
                onChangeFieldName(value, key);
              }} />
          </div>
          <div className="col-sm-2 validate-editor-container-select-type">
            <TagType
              classNameField="form-select"
              styles={{...pillStyles?.pillType }} 
              data={field} onChange={(value: string) => onChangeType(value, key)} 
            />
          </div>
          <div className="col-sm-7 validate-editor-container-config-tags ">
            {field.type &&
              <ExtendedConfigEdit 
                keyComponent={`${key}-${field.fieldKey}`} 
                values={field} 
                onChangeCallback={(value: any) => onChangeCallback(value, key)}
                classNameFieldTag="form-control"
                classNameFieldSelect="form-select"
                config={{config: config, stylesTag: pillStyles?.pillTag || {}}}
              />
            }
          </div>
        </div>
      ))}
    </div>
  );
}
