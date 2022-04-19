import React from 'react';

interface InputProps {
  name?: string;
  value: any;
  onChange: (value: string | number) => void;
  type?: any;
  placeholder?: string
  min?: number;
  max?: number;
  required?: boolean;
  disabled?: any;
  onEnter?: (e:any) => void;
  onClick?: (e:any) => void;
  onBlur?: (e:any) => void;
}
interface options {
  label: string;
  value: any;
}
export interface SelectProps {
  name?: string;
  value?: any;
  onChange: (value: string | number) => void;
  options: Array<options>;
  required?: boolean;
  disabled?: any;
}
interface SwitchProps {
  name?: string;
  value: any,
  label: string,
  onChange: (value: boolean) => void;
  disabled?: any;
}

export const InputCustom = ({ name, value, onChange, type = "text", placeholder, min = 0, max, required = false, disabled = false, onEnter, onClick, onBlur }: InputProps) => (
  <input type={type} placeholder={placeholder} required={required} min={min} max={max}
    disabled={disabled} onChange={(e => onChange(e.target.value))} value={value}
    onBlur={onBlur}
    name={name} className="form-control" onKeyUp={onEnter} onClick={onClick} autoComplete="off" />
);

export const SelectCustom = ({ name, value="", onChange, options, required = false, disabled = false }: SelectProps) => (
  <select name={name} required={required} disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} className="form-select">
    {options && options.map((op, key) =>
      <option value={op.value} key={key}>
        {op.label}
      </option>)}
  </select>
);

export const SwitchCustom = ({ name, value, label, onChange, disabled = false }: SwitchProps) => (
  <div className="form-check form-switch">
    <input className="form-check-input" disabled={disabled} name={name} checked={value} type="checkbox" role="switch" id={name} onChange={(e) => onChange(e.target.checked)} />
    <label className="form-check-label" htmlFor={name}>{label}</label>
  </div>
)