/// <reference types="react" />
interface InputProps {
    name?: string;
    value: any;
    onChange: (value: string | number) => void;
    type: any;
    placeholder?: string;
    min?: number;
    max?: number;
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
    name?: string;
    value: any;
    label: string;
    onChange: (value: boolean) => void;
}
export declare const InputCustom: ({ name, value, onChange, type, placeholder, min, max }: InputProps) => JSX.Element;
export declare const SelectCustom: ({ name, value, onChange, options }: SelectProps) => JSX.Element;
export declare const SwitchCustom: ({ name, value, label, onChange }: SwitchProps) => JSX.Element;
export {};
