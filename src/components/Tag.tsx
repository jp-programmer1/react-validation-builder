import React, { useCallback, useEffect, useState } from 'react';
import { ConfigInterface } from '../interfaces/ValidationBuilderEditorInterface';
import { DropdownAction } from './DropdownAction';
import { InputCustom } from './Index';

interface Props {
  styles?: object
  name: string;
  data: any;
  namekey: string
  onClickTag?: (e: any) => void;
  onRemove: (e: any) => void;
  onEditTag: (value: any) => void;
  classNameField?: string;
  config?: ConfigInterface;
}

const Tag = ({ data, styles, onClickTag, namekey, onRemove, onEditTag, classNameField, config = {} }: Props) => {
  const [copyData, setCopyData] = useState({ ...data });
  useEffect(() => setCopyData({ ...data }), [data]);

  const onChange = useCallback((value, key?: string) => {
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
              <DropdownAction iconComponent={<NumberComponent config={config} value={copyData.value[copyData.key]} />} onFinished={onFinished} >
                <InputCustom className={classNameField} type="number" onChange={(value: any) => onChange(parseInt(value))} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>

            }

            {copyData.fieldType === "string" &&
              <DropdownAction iconComponent={<StringComponent config={config} value={copyData.value[copyData.key]} />} onFinished={onFinished}>
                <InputCustom className={classNameField} type="text" onChange={onChange} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>
            }

            {copyData.fieldType === "date" &&
              <DropdownAction iconComponent={<DateComponent config={config} value={copyData.value[copyData.key]} />} onFinished={onFinished}>
                <InputCustom className={classNameField} type="date" onChange={onChange} value={copyData.value[copyData.key] || ""} />
              </DropdownAction>

            }

            <DropdownAction iconComponent={<Message config={config} data={copyData} />} onFinished={onFinished}>
              <InputCustom className={classNameField} type="text" onChange={(value) => onChange(value, "message")} value={copyData.value.message || ""} />
            </DropdownAction>


            <div onClick={() => onRemove(copyData[namekey])} style={{ ...config.removeTag && config.removeTag.styles }}>
              {config?.removeTag ?
                <React.Fragment>
                  {config.removeTag.icon && <i className={config.removeTag.icon}></i>}
                  {config.removeTag.text && config.removeTag.text}
                </React.Fragment>
                : 'x'}

            </div>
          </div>
        }
      </React.Fragment>
    </div>
  )
}
const Message = ({ data, config }) => (
  <div className="validation-builder-item-message"
    style={{ opacity: data.value && data.value.message && data.value.message !== "" ? 1 : 0.60, ...config && config.message && config.message.styles }}
  >
    {config && config.message ?
      <React.Fragment>
        {config.message.icon && <i className={config.message.icon}></i>}
        {config.message.text && config.message.text}
      </React.Fragment>
      : <div className='validation-builder-item-custom-message'>m</div>}
  </div>
);

const NumberComponent = ({ value, config }) => (
  <div className="validation-builder-item-action" style={{ ...config && config.valueNumberTag && config.valueNumberTag.styles }}>
    {config && config.valueNumberTag ?
      <React.Fragment>
        {config.valueNumberTag.icon && <i className={config.valueNumberTag.icon}></i>}
        {config.valueNumberTag.text && config.valueNumberTag.text}
      </React.Fragment>
      : <span>{value || "0"}</span>}
  </div>
);

const StringComponent = ({ value, config }) => (
  <div className='validation-builder-item-tag-string'
    style={{ opacity: value && value !== "" ? 1 : 0.60, ...config && config.valueStringTag && config.valueStringTag.styles }}>
    {config && config.valueStringTag ?
      <React.Fragment>
        {config.valueStringTag.icon && <i className={config.valueStringTag.icon}></i>}
        {config.valueStringTag.text && config.valueStringTag.text}
      </React.Fragment>
      : <div className='validation-builder-item-custom-string'>s</div>}
  </div>
);

const DateComponent = ({ value, config }) => (
  <div className='validation-builder-item-tag-string'
    style={{ opacity: value && value !== "" ? 1 : 0.60, ...config && config.valueDateTag && config.valueDateTag.styles }}>
    {config && config.valueDateTag ?
      <React.Fragment>
        {config.valueDateTag.icon && <i className={config.valueDateTag.icon}></i>}
        {config.valueDateTag.text && config.valueDateTag.text}
      </React.Fragment>
      : <div className='validation-builder-item-custom-date'>date</div>}
  </div>
);

export default Tag;
