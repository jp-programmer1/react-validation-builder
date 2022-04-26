/// <reference types="react" />
interface DropdownActionInterface {
    children: JSX.Element;
    iconComponent: JSX.Element;
    onFinished: () => void;
    onClose?: (e: any) => void;
}
export declare const DropdownAction: ({ children, iconComponent, onFinished, onClose }: DropdownActionInterface) => JSX.Element;
export {};
