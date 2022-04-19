import React, { useCallback, useEffect, useState } from 'react';
import { InputCustom } from './Index';

interface Props {
  styles?: object
  name: string;
  data: any;
  namekey: string
  onClickTag?: (e: any) => void;
  onRemove: (e: any) => void;
  onEditTag: (value: any) => void;
}

const Tag = ({ data, styles, onClickTag, namekey, onRemove, onEditTag }: Props) => {
  const [copyData, setCopyData] = useState({ ...data });
  useEffect(() => setCopyData({ ...data }), [data]);

  const onChange = useCallback((value, key?:string) => {
    let values = { ...copyData };
    values.value[key || values.key] = value;
    setCopyData(values);
  }, [copyData]);

  const onFinished = useCallback(() => {
    onEditTag(copyData);
  }, [onEditTag, copyData]);

  return (
    <div className="validation-builder-badge-container">
      <React.Fragment>
        {copyData && copyData.value &&
          <div className="validation-builder-badge validation-builder-grid" style={{ ...styles }}>
            <div onClick={() => onClickTag && onClickTag(copyData)}>
              {copyData[namekey]}
            </div>

            {copyData.fieldType === "number" &&
              <DropdownAction iconComponent={<NumberComponent value={copyData.value[copyData.key]} />} onFinished={onFinished} >
                <InputCustom type="number" onChange={(value:any) => onChange(parseInt(value))} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>

            }

            {copyData.fieldType === "string" &&
              <DropdownAction iconComponent={<StringComponent value={copyData.value[copyData.key]} />} onFinished={onFinished}>
                <InputCustom type="text" onChange={onChange} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>
            }

            {copyData.fieldType === "date" &&
              <DropdownAction iconComponent={<i className="fas fa-calendar"></i>} onFinished={onFinished}>
                <InputCustom type="date" onChange={onChange} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>

            }

            <DropdownAction iconComponent={<Message data={copyData} />} onFinished={onFinished}>
              <InputCustom type="text" onChange={(value) => onChange(value, "message")} value={copyData.value.message || ""} />
            </DropdownAction>


            <div onClick={() => onRemove(copyData[namekey])}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        }
      </React.Fragment>
    </div>
  )
}
const Message = ({ data }) => (
  <div className="validation-builder-item-message">
    <i className="fas fa-comment-alt" style={{ opacity: data.value.message && data.value.message !== "" ? 1 : 0.60 }}></i>
  </div>
);

const NumberComponent = ({value}) => (
  <div className="validation-builder-item-action"><span>{value || "0"}</span></div>
);

const StringComponent = ({value}) => (
  <i className="fas fa-cog" style={{ opacity: value && value !== "" ? 1 : 0.60 }}></i>
);

const DropdownAction = ({ children, iconComponent, onFinished }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="validation-builder-container-dropdown">
      <div className="dropdown">
        <div className={`dropdown-toogle ${edit ? 'show' : ''}`}
          onClick={() => {
            if (edit) onFinished();
            setEdit(!edit);
          }}
        >
          {iconComponent}
        </div>
        <div className={`validation-builder-container-dropdown-menu dropdown-menu ${edit ? 'show' : ''}`}>
          <div className="validation-builder-field-action">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
