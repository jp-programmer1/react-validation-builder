/// <reference types="react" />
import { JsonSchema } from "./JsonSchemaInterface";
export interface JsonSchemaValidateInterface {
    data: JsonSchema;
    onChange: (value: JsonSchema) => void;
    componentOnCollapse?: JSX.Element;
    getList?: (list: object[]) => void;
    componentOffCollapse?: JSX.Element;
    componentRemove?: JSX.Element;
    componentAdd?: JSX.Element;
    className?: string;
    id?: string;
    onRemoveItem?: (name: string) => void;
}
