/// <reference types="react" />
import { JsonSchema } from "./JsonSchemaInterface";
export interface JsonSchemaValidateInterface {
    data: JsonSchema;
    onChange: (value: JsonSchema) => void;
    componentOnCollapse?: JSX.Element;
    componentOffCollapse?: JSX.Element;
    componentRemove?: JSX.Element;
    componentAdd?: JSX.Element;
    className?: string;
    id?: string;
    showList?: boolean;
}
export interface JsonSchemaValuesInterface {
    name?: string;
    required?: Array<string>;
    type?: 'number' | 'string' | 'integer' | "boolean";
    format?: 'date-time' | "date" | "hostname" | "email" | "ipv4" | "ipv6" | "uri";
    pattern?: any;
    minLength?: number;
    maxLength?: number;
    enum?: Array<string | number>;
    exclusiveMinimum?: boolean;
    exclusiveMaximum?: boolean;
    minimum?: number;
    maximum?: number;
}
