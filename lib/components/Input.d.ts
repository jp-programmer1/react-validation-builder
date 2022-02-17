/// <reference types="react" />
interface Props {
    name?: string;
    value: string | number;
    onChange: (value: string | number) => void;
    type: any;
    placeholder?: string;
}
export declare const Input: ({ name, value, onChange, type, placeholder }: Props) => JSX.Element;
export {};
