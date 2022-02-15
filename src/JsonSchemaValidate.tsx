import React, { useCallback, useEffect, useState } from 'react';
import { JsonSchemaValidateInterface } from './interfaces/JsonSchemaValidateInterface';

/**
 * @param value 
 * @param onChange
 */

const JsonSchemaValidate = ({value, onChange, className="", componentAdd, componentOffCollapse, 
                            componentOnCollapse, componentRemove, key}:JsonSchemaValidateInterface) => {

  const [data, setData] = useState<object>(value);
  const [collapsed, setCollapsed] = useState();
  const [keyEdit, setKeyEdit] = useState();
  const [addValue, setAddValue] = useState({});

  useEffect(() => setData(value), [value]);


  const onChangeCallback = useCallback(() => {
    let values = {...data};
    onChange(values);
  }, [data, onChange]);
  
  return (
    <div className={`editor-container ${className}`} key={key}>
      <input placeholder="name field" type="text" />
    </div>
  );
}

export default JsonSchemaValidate;
