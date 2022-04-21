/// <reference types="react" />
interface DropdownActionInterface {
    children: JSX.Element;
    iconComponent: JSX.Element;
    onFinished: () => void;
}
export declare const DropdownAction: ({ children, iconComponent, onFinished }: DropdownActionInterface) => JSX.Element;
export {};
