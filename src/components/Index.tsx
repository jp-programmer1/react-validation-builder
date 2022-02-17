import React from 'react';

interface InputProps {
  name?: string;
  value: any;
  onChange: (value: string | number) => void;
  type: any;
  placeholder?: string
  min?:number;
  max?:number
}
interface options {
  label: string;
  value: any;
}
interface SelectProps {
  name?: string;
  value: any;
  onChange: (value: string | number) => void;
  options: Array<options>;
}
interface SwitchProps {
  name?:string;
  value:any,
  label:string,
  onChange: (value:boolean) => void;
}

export const InputCustom = ({ name, value, onChange, type = "text", placeholder, min=0, max }: InputProps) => (
  <input type={type} placeholder={placeholder} min={min} max={max} onChange={(e => onChange(e.target.value))} value={value} name={name} className="form-control" />
);

export const SelectCustom = ({ name, value, onChange, options }: SelectProps) => (
  <select name={name} value={value} onChange={(e) => onChange(e.target.value)} className="form-select">
    {options && options.map((op, key) =>
      <option value={op.value} key={key}>
        {op.label}
      </option>)}
  </select>
);

export const SwitchCustom = ({name, value, label, onChange}:SwitchProps) => (
  <div className="form-check form-switch">
    <input className="form-check-input" name={name} checked={value} type="checkbox" role="switch" id={name} onChange={(e) => onChange(e.target.checked)} />
    <label className="form-check-label" htmlFor={name}>{label}</label>
  </div>
)