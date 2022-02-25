import React, { useCallback, useEffect, useState } from 'react'
import { InputCustom } from './Index';

interface data {
  editing: boolean;
  tag: string;
  value: any
}
interface Props {
  options: Array<any>;
  values?: any;
  styles?: object
  name: string;
  onFinishedEdit?: () => void;
  data?: data;
  onActivateEdit?: (name: string) => void;
  editing: boolean
  onChange: (value: any) => void;
  onSubmitModal?: (name, value) => void;
  onRemove?: (name: string) => void;
}

const Tag = ({ values, styles, name, onActivateEdit, editing, onChange, options, data, onRemove}: Props) => {
  const [tagValue, setTagValue] = useState(values);
  const [filterOptions, setFilterOptions] = useState(options);
  const [collapse, setCollapse] = useState({});

  console.log(data, options);
  

  useEffect(() => setTagValue(values || ""), [values]);

  const onEdit = useCallback(() => {
    if (onActivateEdit) {
      onActivateEdit && onActivateEdit(name);
    }
  }, [name, onActivateEdit]);

  const onSearchOptions = useCallback((value) => {
    value = value && value.toLowerCase();
    let filter: Array<any> = [];
    if (value) {
      let copyOptions = [...options];
      copyOptions.forEach((op: any) => {
        let filterValue = op.name;
        if (filterValue.includes(value)) filter.push(op);
      });
    } else filter = [...options];
    setFilterOptions(filter);
  }, [options]);

  const onSubmit = useCallback((value?: any) => {
    let returnValue;
    if (value) returnValue = value;
    else {
      if (options.some(op => op.name === tagValue)) returnValue = tagValue;
    }
    if (returnValue && returnValue !== "") {
      onChange(returnValue);
      setCollapse(true);
    }
    setTagValue("");
  }, [tagValue, options, onChange]);

  useEffect(() => {
    onSearchOptions(tagValue);
    if (tagValue) setCollapse(false);

  }, [tagValue, onSearchOptions]);

  return (
    <div className="validation-builder-badge-container">
      {editing &&
        <div className="validation-builder-contianer-input">
          <InputCustom onChange={setTagValue} name="tag" value={tagValue}
            onClick={() => setCollapse(current => !current)}
            onEnter={(e) => { e.key === "Enter" ? onSubmit() : "" }}
          />
          {!collapse &&
            <div className="validator-builder-options-tag">
              {filterOptions.length > 0 && filterOptions.map((op, key) => (
                <div className="validator-builder-options" key={key} onClick={() => onSubmit(op.name)} >{op.name}</div>
              ))}
            </div>
          }
        </div>
      }

      {!editing &&
        <React.Fragment>
          {!data &&
             <div className="validation-builder-badge" onClick={onEdit} style={{ ...styles }}>
               {values}
             </div>
          }
          {data && data.value &&
            <div className="validation-builder-badge validation-builder-grid" style={{ ...styles }}>
              <div onClick={onEdit}>
                {values}
              </div>
              <div className=""></div>
              <div className="validation-builder-item-message">
               
                  <i className="fas fa-comment-alt" style={{opacity: data.value.message && data.value.message !== "" ? 1 : 0.60}}></i>
                
              </div>
              <div onClick={() => onRemove && onRemove(values)}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          }
        </React.Fragment>
      }
    </div>
  )
}

export default Tag;
