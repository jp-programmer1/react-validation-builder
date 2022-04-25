import React from 'react';
import { ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';
import { ExtendedConfigEdit } from '../components/ExtendedConfigEdit';
import { InputCustom } from '../components/Index';
import '../../lib/styles/styles.css';
import { useActionsField } from '../hooks/useActionsField';
import { TagType } from '../components/TagType';

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
    <div className={`validate-builder-container ${className}`}>
      <div className="validate-editor-container-button-add">
        <button type="button" style={config?.addField?.styles} className="validate-editor-button" onClick={onAddField} >
          {config?.addField ?
            <React.Fragment>
              {config.addField.icon && <i className={config?.addField.icon} />}
              {config.addField.text && config.addField.text}
            </React.Fragment>
            : 'Add'}
        </button>
      </div>
      {fields && fields.map((field, key) => (
        <div className="validate-builder-TC-container-fields" key={key}>
          <div className="validate-builder-TC-fields-remove" style={{ marginTop: 5 }}>
            <div className="validate-editor-container-remove-field">
              <button type="button" className="validate-editor-button" onClick={() => onRemoveField(key)}>
                {config?.removeField ?
                  <React.Fragment>
                    {config.removeField.icon && <i className={config?.removeField.icon} />}
                    {config.removeField.text && config.removeField.text}
                  </React.Fragment>
                  : 'X'}
              </button>
            </div>
            <InputCustom type="text" placeholder="Name Field" value={fieldKeys[key]}
              className="validate-editor-field-input"
              onBlur={() => {
                field.fieldKey = fieldKeys[key];
                onChangeCallback(field, key)
              }}
              onChange={(value) => {
                onChangeFieldName(value, key);
              }} />
          </div>
          <div className="validate-editor-container-select-type">
            <TagType
              classNameField="validate-editor-field-input"
              styles={{...pillStyles?.pillType }} 
              data={field} onChange={(value: string) => onChangeType(value, key)} 
            />
          </div>
          <div className="validate-editor-container-config-tags ">
            {field.type &&
              <ExtendedConfigEdit 
                keyComponent={`${key}-${field.fieldKey}`} 
                values={field} 
                onChangeCallback={(value: any) => onChangeCallback(value, key)}
                classNameFieldTag="validate-editor-field-input"
                classNameFieldSelect="validate-editor-field-input"
                config={{config: config, stylesTag: pillStyles?.pillTag || {}}}
              />
            }
          </div>
        </div>
      ))}
    </div>
  );
}
