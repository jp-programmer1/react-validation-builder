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
    activateFocus?: boolean;
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
    onEnter?: (e: any) => void;
}
export declare const InputCustom: ({ name, value, onChange, type, placeholder, min, max, required, disabled, onEnter, onClick, onBlur, className, activateFocus }: InputProps) => JSX.Element;
export declare const SelectCustom: ({ name, value, onChange, options, required, disabled, className, onEnter }: SelectProps) => JSX.Element;
export {};
