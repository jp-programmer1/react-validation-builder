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
  className?:string;
  activateFocus?:boolean
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
  className?:string
  onEnter?: (e:any) => void;
}

export const InputCustom = ({ name, value, onChange, type = "text", placeholder, min = 0, max, 
                              required = false, disabled = false, onEnter, onClick, onBlur, className, activateFocus }: InputProps) => (
  <input type={type} placeholder={placeholder} required={required} min={min} max={max}
    disabled={disabled} onChange={(e => onChange(e.target.value))} value={value}
    onBlur={onBlur} autoFocus={activateFocus}
    name={name} className={className} onKeyUp={onEnter} onClick={onClick} autoComplete="off" />
);

export const SelectCustom = ({ name, value="", onChange, options, required = false, disabled = false, className, onEnter }: SelectProps) => (
  <select name={name} required={required} disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} className={className} onKeyUp={onEnter} >
    {options && options.map((op, key) =>
      <option value={op.value} key={key}>
        {op.label}
      </option>)}
  </select>
);