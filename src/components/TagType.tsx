import React, { useCallback, useState, useRef, useEffect } from 'react';
import { optionsType } from '../utils';
import { SelectCustom } from './Index';

export const TagType = ({ styles, data, onChange, classNameField }) => {
  const [activeEdit, setActiveEdit] = useState(false);

  const handleChange = useCallback((value) => {
    let copyData = {...data};
    copyData.type = value;
    onChange(copyData);
  }, [onChange, data]);

  return (
    <div className="validation-builder-tag-type">
      {!activeEdit && 
        <div style={styles} className="validation-builder-badge" onClick={() => setActiveEdit(true)}>
          {data.type}
        </div>
      }
      {activeEdit &&
        <div onBlur={() => setActiveEdit(false)}>
          <SelectCustom name="type" onChange={handleChange} options={optionsType} value={data.type} className={classNameField} />
        </div>
      }
    </div>
  );
}
