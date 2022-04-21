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
    className?: string;
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
    className?: string;
}
export declare const InputCustom: ({ name, value, onChange, type, placeholder, min, max, required, disabled, onEnter, onClick, onBlur, className }: InputProps) => JSX.Element;
export declare const SelectCustom: ({ name, value, onChange, options, required, disabled, className }: SelectProps) => JSX.Element;
export {};
