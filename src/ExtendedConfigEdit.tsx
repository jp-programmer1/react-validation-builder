import React from 'react';
import { SelectCustom, InputCustom, SwitchCustom } from './components/Index';
import { optionsFormat } from './utils';

export const ExtendedConfigEdit = ({ values, onChangeCallback }) => {

  return (
    <div>
      {values.type === 'string' &&
        <React.Fragment>
          <div className="row align-items-center mb-2">
            <div className="col-sm-2 t-l"><label htmlFor="format">Format</label></div>
            <div className="col-sm-10">
              <SelectCustom name="format" value={values.format} onChange={(value) => onChangeCallback(value, "format")} options={optionsFormat} />
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-sm-2 t-l"><label htmlFor="minLength">Min Length</label></div>
            <div className="col-sm-4">
              <InputCustom type="number" name="minLength" value={values.minLength} onChange={(value) => onChangeCallback(value, "minLength")} />
            </div>

            <div className="col-sm-2 t-l"><label htmlFor="maxLength">Max Lenght</label></div>
            <div className="col-sm-4">
              <InputCustom type="number" name="maxLength" value={values.maxLength} onChange={(value) => onChangeCallback(value, "maxLength")} />
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-sm-2 t-l"><label htmlFor="pattern">Pattern</label></div>
            <div className="col-sm-10">
              <InputCustom type="text" placeholder="regular expression" name="pattern" value={values.pattern} onChange={(value) => onChangeCallback(value, "pattern")} />
            </div>
          </div>
        </React.Fragment>
      }
      {(values.type === "number" || values.type === "integer") &&
        <React.Fragment>
          <div className="row align-items-center mb-2">
            <div className="col-sm-2 t-l"><label htmlFor="minimum">Min</label></div>
            <div className="col-sm-4">
              <InputCustom type="number" name="minimum" value={values.minimum} onChange={(value) => onChangeCallback(value, "minimum")} />
            </div>

            <div className="col-sm-2 t-l"><label htmlFor="maximum">Max</label></div>
            <div className="col-sm-4">
              <InputCustom type="number" name="maximum" value={values.maximum} onChange={(value) => onChangeCallback(value, "maximum")} />
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <div className="col-sm-6">
              <SwitchCustom label="Exclusive Minimum" name="exclusiveMinimum" value={values.exclusiveMinimum} onChange={(value) => onChangeCallback(value, "exclusiveMinimum")} />
            </div>
            <div className="col-sm-6">
              <SwitchCustom label="Exclusive Maximum" name="exclusiveMaximum" value={values.exclusiveMaximum} onChange={(value) => onChangeCallback(value, "exclusiveMaximum")} />
            </div>
          </div>
        </React.Fragment>
      }
      <div className="row align-items-center mb-2">
        <div className="col-sm-2 t-l"><label htmlFor="enum">Enum</label></div>
        <div className="col-sm-10">
          <InputCustom type="text" placeholder="example person, cat, dog" name="enum" value={values.enum} onChange={(value) => onChangeCallback(value, "enum")} />
        </div>
      </div>
      <div className="row align-items-center mb-2">
        <div className="col-sm-2 t-l"><label htmlFor="messageError">Message Error</label></div>
        <div className="col-sm-10">
          <InputCustom type="text" placeholder="message to be seen when an error is encountered" name="messageError" value={values.messageError} onChange={(value) => onChangeCallback(value, "messageError")} />
        </div>
      </div>
    </div>
  )
}
