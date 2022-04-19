/// <reference types="react" />
interface InputProps {
    name?: string;
    value: any;
    onChange: (value: string | number) => void;
    type?: any;
    placeholder?: string;
    min?: number;
    max?: number;
    required?: boolean;
    disabled?: any;
    onEnter?: (e: any) => void;
    onClick?: (e: any) => void;
    onBlur?: (e: any) => void;
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
    value: any;
    label: string;
    onChange: (value: boolean) => void;
    disabled?: any;
}
export declare const InputCustom: ({ name, value, onChange, type, placeholder, min, max, required, disabled, onEnter, onClick, onBlur }: InputProps) => JSX.Element;
export declare const SelectCustom: ({ name, value, onChange, options, required, disabled }: SelectProps) => JSX.Element;
export declare const SwitchCustom: ({ name, value, label, onChange, disabled }: SwitchProps) => JSX.Element;
export {};
