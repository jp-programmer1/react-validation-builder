/// <reference types="react" />
import { ConfigInterface } from '../interfaces/ValidationBuilderEditorInterface';
interface ExtendedConfigEditInterface {
    values: any;
    onChangeCallback: (e: any) => void;
    keyComponent: string;
    classNameFieldTag: string;
    classNameFieldSelect: string;
    config: {
        stylesTag: object;
        config?: ConfigInterface;
    };
}
export declare const ExtendedConfigEdit: ({ values, onChangeCallback, keyComponent, classNameFieldTag, classNameFieldSelect, config }: ExtendedConfigEditInterface) => JSX.Element;
export {};
